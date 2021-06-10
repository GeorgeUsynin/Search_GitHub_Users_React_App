import React from "react";
import cls from './Preloader.module.css'

export const Preloader = () => {
    return (
            <div className={cls.loaderWrapper}>
                <div className={cls.loader}></div>
            </div>
    )
}