import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({img,name,weight,temperament,id})=>{
    const url = `/detail/${id}`
    return(
        <Link className = {style.containerCard} to={url}>
            <div className={style.card}>
                <p className={style.cardInfo}>Name: {name}</p>                
                <p className={style.cardInfo}>Weight: {weight} Kg</p>
                <p className={style.cardInfo}>Temperament: {temperament}</p>
                <img src={img} alt="imgDog" className={style.cardImage} />
            </div>
        </Link>
    )
}

export default Card;