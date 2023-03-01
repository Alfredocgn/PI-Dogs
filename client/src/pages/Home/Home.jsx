import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs} from "../../redux/actions";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import style from "./Home.module.css"

const Home = ()=>{
    //1) que se monte, hacer dispatch 
    //se monta con useEffect() manejamos el ciclo de vida del componente
    //que haga el dispatch con useDispatch()

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch])


    return(
        <DefaultLayout>
            <div className={style.Home}><h1 className={style.HomeTitle}> Find your new best friend </h1></div>            
            <CardsContainer/>
        </DefaultLayout>
        
    )
}

export default Home;