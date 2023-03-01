import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import { useState } from "react"
import {useSelector} from 'react-redux'
import SetPages from "../SetPages/SetPages"
import Filters from "../Filters/Filters"


const CardsContainer = () =>{

    const dogs = useSelector((state) => state.dogs)
    // console.log(dogs)
    // const [condition,setCondition] = useState("algo")
    const filteredDogs = dogs.filter((dog)=>  dog);
    const [currentPage,setCurrentPage] = useState(1);
    const dogsPerPage = 8;
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = filteredDogs.slice(indexOfFirstDog,indexOfLastDog);
        
    const paging = (pageNumber)=>{
            setCurrentPage(pageNumber)
        }
        
        
        
        

    return (
        <>
        <Filters/>
        <SetPages       
        dogsPerPage = {dogsPerPage}
        dogs = {dogs}
        paging = {paging}/>

            <div className={style.container}>
                {currentDogs.map(dog => {
                    return (<Card
                        key ={dog.id}
                        name={dog.name}
                        weight={dog.weight}
                        temperament={dog.temp}
                        height={dog.height}
                        id ={dog.id}
                        img={dog.img ? dog.img.url : "No image"}
                    />);
                })}
            </div>
        </>
    )
}

export default CardsContainer;

