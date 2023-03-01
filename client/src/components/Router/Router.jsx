import React from "react";
import { Route } from "react-router-dom";
import {Landing,Home,Detail,Form} from "../../pages";


export default function Router() {
    return (
        <>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/detail/:id" component ={Detail}/>
        <Route path="/create" component ={Form}/>
        </>
    )
}

