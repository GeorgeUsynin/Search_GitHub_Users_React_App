import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import gitCat from '../../assets/images/gitCat.svg'
import cls from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setIsNotFound, UserType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {NavLink, useHistory} from "react-router-dom";

export const Header = () => {

    const history = useHistory()


    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setIsNotFound(false))
            dispatch(setCurrentPage(1))
            const trimmedUserName = userName.replace(/\s/g, '')
            history.push(`/profile/${trimmedUserName}`)
            setUserName('')
        }
    }

    const user = useSelector<AppRootStateType, UserType | null>(state => state.profile.user)
    const isNotFound = useSelector<AppRootStateType, boolean>(state => state.profile.isNotFound)

    if (!user && isNotFound) {
        history.push(`/usernotfound`)
    }

    return (
        <div className={cls.header}>
            <div className={cls.gitCat}>
                <NavLink to={'/searchpage'}><img src={gitCat} alt="gitCat"/></NavLink>
            </div>
            <div>
                <input
                    value={userName}
                    onChange={onChangeHandler}
                    className={cls.search}
                    onKeyPress={onKeyPressHandler}
                    placeholder={'Enter GitHub username'}/>
            </div>
        </div>
    )
}