import React from "react";

export default props=>{
    const resposta= props.resposta;
    const texto = props.texto;
    const sim = ()=>{
        if(resposta){
            console.log(props.texto)
        }
    };
    return(
        <div>
            {sim}
            {resposta}
            {texto}
        </div>
    );
}