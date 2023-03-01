import React, {useEffect,useState} from "react";
import { useSelector } from "react-redux";
import style from "./Temperaments.module.css"

export default function Temperaments({setForm}){
    const temperaments = useSelector((state)=>state.temperaments)
    const [actualTemps,setActualTemps]= useState([]);
    

    useEffect(()=>{
        setForm((prevForm)=>({
            ...prevForm,
            temperaments: actualTemps,
        }))
    },[actualTemps,setForm])
    
    return(
        <ul style={{
            overflowY : "scroll",
            maxHeight:"150px",
            listStyle:"none"
        }}>
            {temperaments.map((temperament)=>{
                return(
                    <li key={temperament.id}>
                        {temperament.name}
                        {!actualTemps.includes(temperament.id) ? (<button className={style.TempButton} type="button" onClick={()=> setActualTemps([...actualTemps,temperament.id])}>+</button>) : null}

                        {actualTemps.includes(temperament.id) ? (<button className={style.TempButton} type="button" onClick={()=> setActualTemps(actualTemps.filter((tempt)=>tempt !== temperament.id))}>-
                        </button>) : null}
                    </li>
                )
            })}
        </ul>
    )


}