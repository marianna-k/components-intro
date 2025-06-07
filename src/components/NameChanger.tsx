import {useState} from "react";

const NameChanger = () => {

    const [name, setName] = useState(''); //initial value  of name:  empty
    //depending on the field type you add the relevant HTML Element in parentheses. here is HTMLInputElement
    //due to input element below, otherwise we could have HTMLSelectElement etc
    
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value); //we want to take the value from input when onChange
    }
    return (
        <>
            <h1 className="text-center text-xl pt-4">Hello, {name || "stranger"}</h1>
            <div className="text-center mt-4">
                <input type="text"  className="border" value={name} onChange={handleChange} />
            </div>

        </>
    )
}

export default NameChanger;