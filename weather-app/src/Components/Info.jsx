 import React from "react";
import s from './info.module.css'

let Info = () => {
    return (
        <div className={s.info_block}>
            <div className={s.appTextOne}>App
            </div>
            <div  className={s.appTextTwo}>Find Weather</div>

        </div>
    )
}

export default Info;