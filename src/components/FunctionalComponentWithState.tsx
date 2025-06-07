import {useState} from "react";


// two ways of using states, class or functional with const.
//this one is easier


const FunctionalComponentWithState= () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="space-y-8 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center">
                    <button className="bg-black text-white p-4" onClick={increaseCount}>
                        Increase
                    </button>

                    <button className="bg-lime-300 text-black mx-2 p-4" onClick={decreaseCount}>
                        Decrease
                    </button>

                    <button className="bg-red-400 text-white mx-2 p-4" onClick={resetCount}>
                       Reset
                    </button>

                </div>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;