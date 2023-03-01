import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import { getTemperaments } from "../../redux/actions";
import validate from "../../components/Validator/validate";
import Input from "../../components/Input/Input"
import Temperaments from "../../components/Temperaments/Temperaments";

import style from "./Form.module.css"
import axios from "axios";



const Form = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch])

    



    const [form,setForm] = useState({
        name:"",
        height:"",
        weight:"",
        lifeSpan:"",
        temperaments:""
    })

    const [error,setError] = useState({
        name:"",
        height:"",
        weight:"",
        lifeSpan:"",

    })

    const changeHandler = (e) =>{
        const prop = e.target.name;
        const value = e.target.value;


        validate({...form,[prop]:value},error,setError);
        setForm({...form,[prop]:value});




    }

    const submitHandler= ((e) => {
        e.preventDefault()
        axios
        .post("http://localhost:3001/dogs",form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    })

    return (
        <DefaultLayout>
            <form className={style.Form} onSubmit={submitHandler}>
                <Input
                name="name"
                label="Name: "
                value = {form.name}
                onChange = {changeHandler}
                error={error.name}
                type="text"/>

                <Input
                name="weight"
                label="Weight: "
                value = {form.weight}
                onChange = {changeHandler}
                error={error.weight}
                type="number"/>

                <Input
                name="height"
                label="Height: "
                value = {form.height}
                onChange = {changeHandler}
                error={error.height}
                type="number"/>

                <Input
                name="lifeSpan"
                label="LifeSpan: "
                value = {form.lifeSpan}
                onChange = {changeHandler}
                error={error.lifeSpan}
                type="number"/>

                <div>
                    <label className={style.FormLabel}>Temperaments: </label>
                    <Temperaments setForm={setForm} />
                </div>
                <button className={style.CreateButton} type="submit">Create</button>

            </form>
        </DefaultLayout>
        
    )
}

export default Form;