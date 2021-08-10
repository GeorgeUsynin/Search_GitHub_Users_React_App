import React, {useEffect} from "react";
import {Profile} from "../Profile/Profile";
import cls from './ProfilePage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {RepoType, UserType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import noRepo from "./../../assets/images/noRepo.png"
import {Repository} from "../Repository/Repository";
import ReactPaginate from 'react-paginate';
import {leftArrow, rightArrow} from "../../assets/pageArrows";
import {PreloaderForRepos} from "../common/Preloader/PreloaderForRepos";
import {getUser} from '../../redux/get-user-saga';
import {getUserRepos} from '../../redux/get-user-repos-saga';

export const ProfilePage = () => {


    //data

    const isFetchingProfile = useSelector<AppRootStateType, boolean>(state => state.profile.isFetchingProfile)

    const isFetchingRepos = useSelector<AppRootStateType, boolean>(state => state.profile.isFetchingRepos)

    const user = useSelector<AppRootStateType, UserType | null>(state => state.profile.user)

    const repos = useSelector<AppRootStateType, Array<RepoType> | null>(state => state.profile.repos)

    const perPage = useSelector<AppRootStateType, number>(state => state.profile.perPage)

    const currentPage = useSelector<AppRootStateType, number>(state => state.profile.currentPage)

    const dispatch = useDispatch()

    const {username} = useParams<{ username: string }>();

    //async

    useEffect(() => {
        dispatch(getUser(username, perPage, currentPage))
    }, [username])

    //other helpful variables

    const mappedRepos = repos && repos.map(repo => {
        return <Repository name={repo.name} description={repo.description} html_url={repo.html_url} key={repo.id}/>
    })

    let helpRangeValue = ((currentPage - 1) * 4 + 1)

    let publicRepos = user && user.public_repos

    const pageCount = user && user.public_repos && perPage ? Math.ceil(user.public_repos / perPage) : 0

    //handlers

    const onPageChangeHandler = (selectedPage: { selected: number }) => {
        dispatch(getUserRepos(username, perPage, selectedPage.selected + 1))
    }

    //UI

    return (
        <div>
            {
                isFetchingProfile
                    ?
                    <Preloader/>
                    :
                    <div className={cls.profilePage}>
                        <Profile user={user}/>
                        {
                            repos && repos.length !== 0
                                ?
                                <div className={cls.reposWithPages}>
                                    <p className={cls.heading}>{`Repositories(${publicRepos})`}</p>
                                    {
                                        isFetchingRepos
                                            ?
                                            <PreloaderForRepos/>
                                            :
                                            <div className={cls.reposWrapper}>
                                                {mappedRepos}
                                            </div>
                                    }
                                    <div className={cls.pagesWrapper}>
                                        <div className={cls.range}>
                                            {
                                                publicRepos === 1
                                                    ?
                                                    <p>{`1 item of 1 items`}</p>
                                                    :
                                                    publicRepos === helpRangeValue
                                                        ?
                                                        <p>{` ${helpRangeValue} item of ${helpRangeValue} items`}</p>
                                                        :
                                                        <p>{`${currentPage !== 1 ? helpRangeValue : 1} 
                                            - ${publicRepos && ((helpRangeValue + 3) > publicRepos) ? publicRepos : helpRangeValue + 3} 
                                            of ${publicRepos} 
                                            items`}</p>
                                            }
                                        </div>
                                        <ReactPaginate
                                            pageCount={pageCount}
                                            pageRangeDisplayed={3}
                                            marginPagesDisplayed={1}
                                            containerClassName={cls.paginateWrapper}
                                            pageClassName={cls.page}
                                            previousLinkClassName={cls.previousA}
                                            previousClassName={cls.previousLi}
                                            nextLinkClassName={cls.nextA}
                                            nextClassName={cls.nextLi}
                                            activeClassName={cls.active}
                                            onPageChange={onPageChangeHandler}
                                            nextLabel={rightArrow}
                                            previousLabel={leftArrow}
                                            disabledClassName={cls.disabledPrevNext}
                                            breakClassName={cls.brake}
                                        />
                                    </div>
                                </div>
                                :
                                <div className={cls.noRepoWrapper}>
                                    <img src={noRepo} alt="noRepo"/>
                                    <p className={cls.noRepoText}>Repository list is empty</p>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}
