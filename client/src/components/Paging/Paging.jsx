import React from "react";
import {useDispatch,useSelector} from "react-redux";
import setPages from "../SetPages/SetPages";
const { useState } = require("react");



export default function Paging (){

const dispatch = useDispatch()
const allDogs = useSelector((state)=>state.dogs)
const [currentPage,setCurrentPage] = useState(1);
const [dogsPerPage,setDogPerPage]= useState(8);
const indexOfLastDog = currentPage * dogsPerPage;
const indexOfFirstDog = indexOfLastDog - dogsPerPage;
const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog);

const paging = (pageNumber)=>{
    setCurrentPage(pageNumber)
}



}
