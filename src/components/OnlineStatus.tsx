import {useEffect, useState} from "react";

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine); //checks if user is connected in browser


    useEffect(() => {
        const handler = () => setIsOnline(navigator.onLine);
        const pollingId: number = setInterval(handler, 5000);//every 5sec runs handler as some browser aren't compatible

        window.addEventListener('online', handler);//when user is online, run handler. handler sets state based on online or offline
        window.addEventListener('offline', handler);

        //cleanup. remove eventlisteners
        return () => {
            //clear interval
            clearInterval(pollingId);
            window.removeEventListener("online", handler);
            window.removeEventListener("offline", handler);
        }

    } ,[]); //dependency is here an empty array [], useEffect will run only once




    return (
        <>
            <div className= {`text-white text-center mt-12 mx-4 p-4 rounded ${isOnline ? "bg-green-500" : "bg-cf-dark-red"}`}>
                {isOnline ? "You are online" : "You are offline"}
            </div>

        </>
    )
}

export default OnlineStatus;