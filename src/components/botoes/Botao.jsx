import React from "react";
import If from "../condicionais/If";
import arrayPerguntas from "../texto/arrayPerguntas";

export default props => { 

    return (
        <button className={props.name}  onClick={
            _=> {
                if (props.resposta === 'Sim') {
                  props.click(arrayPerguntas[0].errou)
                 
                }
                if(props.resposta === 'Não'){
                    props.click(arrayPerguntas[0].acertou)
                }
            }
        }
        
        >
            <p>{props.resposta}</p>  
        </button>
    );
}