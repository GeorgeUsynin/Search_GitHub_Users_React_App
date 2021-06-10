import React from "react";
import cls from "./Repository.module.css"

type RepositoryPropsType = {
    name: string | null
    description: string | null
    html_url: string | null
}

export const Repository: React.FC<RepositoryPropsType> = ({name, description, html_url}) => {
    return (
        <div className={cls.repoWrapper}>
            <p className={cls.name}><a href={html_url ? html_url : ''} target={'_blank'}>{name}</a></p>
            <p className={cls.description}>{description}</p>
        </div>
    )
}