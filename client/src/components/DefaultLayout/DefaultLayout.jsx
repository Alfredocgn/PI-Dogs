import NavBar from "../NavBar/NavBar"
import style from "./DefaultLayout.module.css"


const DefaultLayout = ({children}) =>{
    return(
        <>
        <div className={style.DefaultLayout}>
        <NavBar/>
        {children}

        </div>

        </>

    )
}

export default DefaultLayout;