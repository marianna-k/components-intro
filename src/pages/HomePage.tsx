import {useEffect} from "react";

const HomePage = () => {

    useEffect(() => {
        document.title = "HomePage";
    })
    return (
        <>
            <h1 className="text-bold">Home Page</h1>
        </>
    )
}

export default  HomePage;