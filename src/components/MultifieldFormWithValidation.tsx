import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

//optional values, we will not have all fields required
type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

const initialValues = {
    name: "",
    email: "",
    message: "",
}

//html validation: required

const MultifieldFormWithValidation = () => {

const [values, setValues] = useState<FormValues>(initialValues);

    //errors
    const [errors, setErrors] = useState<FormErrors | null>(null);

//state to save data we will submit
    //when value is null we hide the submitted data info at the end of the page
    const [submittedData, setSubmittedData] = useState<FormValues | null >(null);

    //take values, return errors. checks whether we have errors
    const validateForm = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};

            //check name - email - textarea whether we have any values or if there is an empty space
        if (!values.name.trim()){
            errors.name = "Name is required."
        }

        if (!values.email.trim() ||
            !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.
            test(values.email.trim()) ){
            errors.email = "Email is required."
        }

        if (values.message.length < 5){
            errors.message = "Message is required."
        }

        return errors;
        };

const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target; //we want to take info of name and value of input

    setValues (prev => ({
        ...prev,
        //find name from input and give as value the value
        [name]: value,
    }));
    setErrors(
        prev => ({
            ...prev,
            //remove the field (undefined)
            [name]: undefined,
        }));

}

const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    //checks whether there are any errors
    const validationErrors = validateForm(values);


    //used to count how many keys exist in this Object. return an array with name,email,message
    //if one field has an error (count Object's length) then pass errors in state
    if (Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
        setSubmittedData(null);
        return;
    } //stop form submission. thus code below will not run


    setSubmittedData(values);
    setValues(initialValues);
    setErrors(null);

}

const handleClear = () => {
    setValues(initialValues);
    setErrors(null);
    setSubmittedData(null);
}
    return(
        <>
            <div className="flex max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                        />

                        //if we have entered an name we show it, otherwise is empty
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                        />

                        //if we have entered an email we show it, otherwise is empty
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email}</p>
                        )}
                    </div>
                    <div>
            <textarea
                name="message"
                value={values.message}
                placeholder="Type your message"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border"
                minLength={5}
            ></textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded">
                            Clear
                        </button>
                    </div>
                    { submittedData && (
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Submitted Data</h2>
                            <p><strong>Name:</strong> {submittedData.name}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                            <p><strong>Message:</strong> {submittedData.message}</p>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default MultifieldFormWithValidation;