import React from "react";
import { useRecoilState, RecoilRoot } from "recoil";
import { atom } from "recoil";
import { counterAtom } from "../../Atoms";


export default function ComponentIncrement() {

    const [counter, setCounter] = useRecoilState(counterAtom);

    function onIncrementClick() {
        setCounter(counter + 1);
    }
    return (
        <div>


            <p>{counter}</p>
            <input onClick={onIncrementClick} type="submit" value="Increment" />

        </div>
    )
}