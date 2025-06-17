import {useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus(); //adding ? as it starts with null, otherwise it'll show an error
    };

    return (
        <>
            <div className="text-center space-x-4 mt-4">
                <input
                    ref={inputRef}
                    type="text" className="border px-4 py-2 rounded"/>
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-gray text-white px-4 py-2 rounded">
                    Focus Input
                </button>
            </div>

        </>
    )
}

export default FocusInput;