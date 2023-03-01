
import style from "./CardDetail.module.css"


const CardDetail = ({name,img,temperament,height,weight,lifeSpan}) =>{
    return(
        <div className={style.CardDetail}>
            <p className={style.DetailTemp}>Name:{name}</p>
            <p className={style.DetailTemp}>Height:{height && height.metric}</p>
            <p className={style.DetailTemp}>Weight:{weight && weight.metric}</p>
            <p className={style.DetailTemp}>LifeSpan:{lifeSpan}</p>
            <p className={style.DetailTemp}>  Temperaments: {temperament}</p>
            <img src={img} alt="imgDogDetail" className={style.CardDetailImage}/>      
        </div>

    )
}

export default CardDetail;