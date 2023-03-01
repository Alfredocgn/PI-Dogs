import { useEffect, useState } from "react";
import style from "./Carousel.module.css"
import { Link } from "react-router-dom";



export default function Carousel (autoPlay){
    const images = ["Rona.jpeg","Dog-1.jpg","Dog-2.jpg","Ami.jpeg"];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const[selectedImage,setSelectedImage]=useState(images[0]);

    useEffect(()=>{
        if(autoPlay){
            const interval = setInterval(()=>{
                selectNewImage(selectedIndex,images)
            },3000);
            return () => clearInterval(interval);
        }
    })

    const selectNewImage = (index,images,next = true) =>{

        const condition = next ? selectedIndex <images.length - 1 : selectedIndex > 0;
        const nextIndex =
        next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1 ;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    } 
    
    const previous = () =>{
        selectNewImage(selectedIndex,images,false)

    }

    const next = () =>{
        selectNewImage(selectedIndex,images,true)


    }


    return(
    <>
    <div className={style.CarouselContainer}>
        <div className={style.sider}>
            <h1 className={style.HomeTitle}>Find your best friend with one click...</h1>
            <Link className={style.HomeLink} to="/home">Home</Link> 
        </div>
        <img src={require(`../../../public/img/${selectedImage}`).default} alt="Dogs" className={style.CarouselImg}/>
    </div>
    <div className={style.CarouselButtonContainer}>
    <button className={style.CarouselButton} onClick={previous}>{"<"}</button>
    <button className={style.CarouselButton} onClick={next}>{">"}</button>
    </div>




    </>
    )
}