import {useEffect} from "react";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = "Autoredirect";
    })
    return (
        <>
            <AutoRedirectAdvanced />
        </>
    )
}

export default  AutoRedirectPage;