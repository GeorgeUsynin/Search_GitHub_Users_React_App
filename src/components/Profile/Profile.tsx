import React, {useEffect} from "react";
import cls from './Profile.module.css'
import {setIsFetchingPhoto, UserType} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {PreloaderForPhoto} from "../common/Preloader/PreloaderForPhoto";

export const Profile: React.FC<{ user: UserType | null }> = React.memo(({user}) => {

    console.log('Profile rendered')

    const isFetchingPhoto = useSelector<AppRootStateType, boolean>(state => state.profile.isFetchingPhoto)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setIsFetchingPhoto(true))
    }, [])


    function nFormatter(num: number, digits: number) {
        const lookup = [
            {value: 1, symbol: ""},
            {value: 1e3, symbol: "k"},
            {value: 1e6, symbol: "M"},
            {value: 1e9, symbol: "G"},
            {value: 1e12, symbol: "T"},
            {value: 1e15, symbol: "P"},
            {value: 1e18, symbol: "E"}
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    return user &&

        <div className={cls.profileWrapper}>

            <div className={cls.avatarImage}>
                {
                    isFetchingPhoto
                    &&
                    <PreloaderForPhoto/>
                }
                <img
                    style={{visibility: isFetchingPhoto ? 'hidden' : 'visible'}}
                    src={user.avatar_url ? user.avatar_url : ''}
                    alt="avatar"
                    onLoad={() => {
                        dispatch(setIsFetchingPhoto(false))
                    }}
                />
            </div>

            <a href={user.html_url ? user.html_url : ''} target={'_blank'}><p
                className={cls.login}>{user.login}</p></a>

            {user.bio && <p className={cls.bio}>{user.bio}</p>}

            <div className={cls.followWrapper}>
                <div>{user.followers && nFormatter(user.followers, 1)} followers</div>
                <div>{user.following && nFormatter(user.following, 1)} following</div>
            </div>
        </div>
})