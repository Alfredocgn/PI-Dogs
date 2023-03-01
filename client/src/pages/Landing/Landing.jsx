
import Carousel from "../../components/Carousel/Carousel";
import style from "./Landing.module.css"



const Landing = ()=>{
    return (
        <div className={style.LandingContainer}>
        <Carousel autoPlay={true} />
        </div>
    )
}

export default Landing;