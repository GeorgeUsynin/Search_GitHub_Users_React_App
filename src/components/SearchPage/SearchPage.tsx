import React from "react";
import lens from '../../assets/images/lens2.svg'
import cls from './SearchPage.module.css'

export const SearchPage = () => {
    return (
        <div className={cls.searchPage}>
            <div className={cls.image}>
                <img src={lens} alt="lens"/>
            </div>
            <div className={cls.textWrapper}>
                <p>Start with searching a GitHub user</p>
            </div>
        </div>
    )
}