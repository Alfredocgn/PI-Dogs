import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout"
import { getDog } from "../../redux/actions";
import style from "./Detail.module.css"
import {useSelector} from 'react-redux';
import CardDetail from "../../components/CardDetail/CardDetail";

const Detail = ()=>{
    const dog = useSelector((state)=>state.dog)
    // console.log(dog)
    const url = useLocation();
    const id = url.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDog(id));
    },[dispatch,id])
    // console.log(dog.reference_image_id)
    return (
        <DefaultLayout>
            <div className={style.Detail}>

                        <CardDetail 
                        key={dog.id}
                        name={dog.name}
                        weight ={dog.weight}
                        temperament = {dog.temperament}
                        height = {dog.height}
                        id = {dog.id}
                        lifeSpan = {dog.life_span}
                        img={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        
                        />               
                    


            </div>
        </DefaultLayout>
        
    )
}

export default Detail;