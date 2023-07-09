import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { counterAtom } from "../../Atoms";
const Add = () => {

    const [value, setValue] = useState(0);
    const [count, setCount] = useRecoilState(counterAtom);


    const increment = () => {
        setValue(value + 1);
    }

    const decrement = () => {
        setValue(value - 1);
    }



    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div>
                <h1>Useing UseState</h1>
                <Button onClick={increment} >+</Button>
                <p>{value} </p>
                <Button onClick={decrement} >-</Button>
            </div>

            <div>
                <h1>Useing RecoilState</h1>
                <Button onClick={inc} >+</Button>
                <p>{count} </p>
                <Button onClick={dec} >-</Button>
            </div>
        </>
    );
}

export default Add;