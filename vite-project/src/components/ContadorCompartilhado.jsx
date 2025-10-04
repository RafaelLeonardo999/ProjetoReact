import {useState} from "react";

export default function ContadorCompartilhado(props){
   

    function Clique(){
        props.setCount(props.count + 1);
    }

    return (
        <div>
            <label>Contador</label>
            <br/>
            <button onClick={Clique}>
                Contagem Compartilhada: {props.count}
            </button>
        </div>
    )
}