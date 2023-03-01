import React from "react";
import style from "./Input.module.css"

export default function Input({label,name,error,value,onChange,type}){
    return(
        <div>
            <label className={style.FormLabel}>{label}</label>
            <input type={type} value={value} onChange ={onChange} name={name}/>
            {error && <span>{error}</span>}
        </div>
    )
}