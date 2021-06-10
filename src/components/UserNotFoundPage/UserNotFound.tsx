import React from "react";
import userIcon from '../../assets/images/user.svg'
import cls from './UserNotFound.module.css'

export const UserNotFoundPage = () => {
    return (
        <div className={cls.userNotFoundPage}>
            <div>
                <img src={userIcon} alt="user icon"/>
            </div>
            <div className={cls.textWrapper}>
                <p>User not found</p>
            </div>
        </div>
    )
}