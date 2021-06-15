import React from "react";
import cls from './PreloaderForRepos.module.css'

export const PreloaderForRepos = () => {
    return (
            <div className={cls.loaderWrapper}>
                <div className={cls.loader}></div>
            </div>
    )
}