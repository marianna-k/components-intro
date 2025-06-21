import {useState} from "react";
import {z} from "zod";
import * as React from "react";



const formSchema = z.object({
    name: z.string().trim().nonempty("Name is required."),
    email: z
        .string()
        .trim()
        .nonempty("Email is required.")
        .email("Email is invalid."),
    message: z.string()
        .trim()
        .nonempty("Message is required.")
        .min(5, "Message must be at least 5 characters.")
        .max(8, "Message must be at most 8 characters."),
});

type FormValues = z.infer<typeof formSchema>;
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

const MultifieldFormWithZodValidation = () => {

const [values, setValues] = useState<FormValues>(initialValues);

    //errors
    const [errors, setErrors] = useState<FormErrors | null>(null);

//state to save data we will submit
    //when value is null we hide the submitted data info at the end of the page
    const [submittedData, setSubmittedData] = useState<FormValues | null >(null);
    

    //take values, return errors. checks whether we have errors
    const validateForm = () => {
        const result = formSchema.safeParse(values);//runs validation and returns an object
       //if success then>  {success:true, data:validatedData}

        //if success false then > {success:false, error:errors}
        if(!result.success) {
            const newErrors: FormErrors = {}

            //searching each error and take the element 0 -first element - in the array path[0]
            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormValues;
                //declaring what kind of error it is ex. email [fieldName] and the message depending on the input field
                //ex. for the email field show "E-mail is invalid" . check messages at the top of the code
                newErrors[fieldName] = issue.message;
            });
            setErrors(newErrors);
            return false;
        }

        setErrors({});
        return true;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues (prev => ({
            ...prev,
            [name]: value,
        }));
        setErrors(
            prev => ({
                ...prev,
                [name]: undefined,
            }));
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setSubmittedData(values);
            setValues(initialValues);
        }
    };

    const handleClear = () => {
        setValues(initialValues);
        setErrors({});
        setSubmittedData(null);
    };


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
                            autoComplete="off"
                        />

                       {/*if we have entered a name we show it, otherwise is empty*/}
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
                            autoComplete="off"
                        />

                        {/*if we have entered an email we show it, otherwise is empty*/}
                        {errors?.message && (
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

export default MultifieldFormWithZodValidation;