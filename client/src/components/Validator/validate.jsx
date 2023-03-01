


    const validate = (form,error,setError) =>{
        const[key] = Object.keys(form);

        switch(key){
            case "name":
                if(/^[A-Za-z]+$/.test(form.name)){
                    setError({...error,name:""})
                }
                else{
                    setError({...error,name:"Invalid name"})
                }
                if(form[key] === ""){setError({error,name:"Empty field"})}
                break;
                case "height":
                    if(isNaN(form[key])){
                        setError({...error,height:"Value needs to be a number"});

                    }else if(form[key] === ""){
                        setError({...error,[key]:"Empty field"})
                    }else{
                        setError({...error,weight:""})
                    }
                    break;
                    case "weight":
                        if(isNaN(form[key])){
                            setError({...error, weight : "Value needs to be a number"});
                        }else if (form[key]===""){
                            setError({...error,[key]:"Empty field"})
                        }else{
                            setError({...error,weight:""})
                        }
                        break;
                        case "lifeSpan":
                            if(isNaN(form[key])){
                                setError({...error,lifeSpan:"Value needs to be a number"});

                            }else if(form[key]===""){setError({...error,[key]:"Empty field"})
                        }else{
                            setError({...error,lifeSpan:""})
                        }
                        break;
                default:
                break;
        }

            }

export default validate ;