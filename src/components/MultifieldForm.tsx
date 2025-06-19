import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const initialValues = {
    name: "",
    email: "",
    message: "",
}

//html validation: required

const MultifieldForm = () => {

const [values, setValues] = useState<FormValues>(initialValues);

//state to save data we will submit
    const [submittedData, setSubmittedData] = useState<FormValues | null >(null); //when value is null we hide the submitted data info at the end of the page

const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target; //we want to take info of name and value of input

    setValues(
        (prev) => ({
            ...prev,
            //find name from input and give as value the value
            [name]: value,
        })
    )

}

const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(values); //values that has on state
    console.log(values);
    setValues(initialValues);

}

const handleClear = () => {
    setValues(initialValues);
    setSubmittedData(null);
}
    return (
        <>
            <div className="flex text-center mx-auto max-w-md ">
            <form onSubmit ={handleSubmit} className =" text-center mt-8 space-y-4">
                <input
                    type="text"
                    name = "name"
                    onChange ={handleChange}
                    value={values.name}
                    placeholder="Name"
                    className ="w-full px-4 py-2 rounded border"
                    required/>

                <input
                    type="email"
                    name = "email"
                    onChange ={handleChange}
                    value={values.email}
                    placeholder="Email"
                    className ="w-full px-4 py-2 rounded border"
                    required />

               <textarea className ="w-full px-4 py-2 rounded border"
               name ="message"
                         value={values.message}
               placeholder="Type your Message"
                         onChange ={handleChange}
                         minLength={5}
               required>
               </textarea>

                <div className= " flex gap-4">
                    <button
                        type="submit"

                        className ="bg-cf-dark-red text-white px-4 py-2 rounded">
                        Submit
                    </button>

                    <button
                        type="button"
                        onClick={handleClear}
                        className ="bg-gray-200 text-cf-gray px-4 py-2 rounded">
                        Clear
                    </button>

                </div>

                {submittedData && (
                    <div className= "mt-6 border-t pt-4 space-y-2">
                        <h2 className ="font-bold ">Submitted Data</h2>
                        {/*takes info of submittedData stored in input fields*/}
                        <p><strong>Name:</strong>{submittedData.name}</p>
                        <p><strong>Email:</strong>{submittedData.email}</p>
                        <p><strong>Message:</strong>{submittedData.message}</p>
                    </div>
                )}


            </form>
            </div>
        </>
    )
}

export default MultifieldForm;