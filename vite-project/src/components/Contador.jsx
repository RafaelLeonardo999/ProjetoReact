import {useState} from "react";

export default function Contador(){
    const [count, setCount] = useState(0);

    function Clique(){
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div>
            <label>Contador</label>
            <br/>
            <button onClick={Clique}>
                Contagem: {count}
            </button>
        </div>
    )
}