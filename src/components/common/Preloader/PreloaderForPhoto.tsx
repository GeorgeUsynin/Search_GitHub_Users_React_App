import React from "react";
import cls from './PreloaderForPhoto.module.css'

export const PreloaderForPhoto = () => {
    return (
            <div className={cls.loaderWrapper}>
                <div className={cls.loader}></div>
            </div>
    )
}