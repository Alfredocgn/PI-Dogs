import React from "react";
import style from "./SetPages.module.css"

export default function SetPages ({DOGS_PER_PAGE,filteredDogs,paging}){
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(filteredDogs.length/DOGS_PER_PAGE);i++){
        pageNumbers.push(i)
    }
    return(
        <nav className={style.pagination}>
            <ul className={style.paginationUl}>
                {pageNumbers && 
                pageNumbers.map(number =>{
                    return(
                    <li className={style.paginationList} key={number}>                      
                        <button className={style.paginationButton} onClick={()=> paging(number)}>{number}</button>
                        
                    </li>)

                })}
            </ul>
        </nav>
    )

}

