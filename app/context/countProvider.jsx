'use client'
import { useState, useEffect } from "react"
import MyContext from "./context"

const CountProvider = ({ children }) => {
    const [maindata, setData] = useState([]);

    //const isAuthenticated = localStorage.getItem("pilotData");

    useEffect(() => {
        const pilotData = JSON.parse(localStorage.getItem('pilotData'));
        if (pilotData) {
            const mergedData = [...maindata, pilotData];
            setData(mergedData);
        //setData(prevData => [...prevData, pilotData]);
        }
        callApi();
    }, [])


    const callApi = async () => {
        
        try {
            const api = await fetch('http://localhost:3000/api');
            const data = await api.json();

            if (api.ok) {
                setData(data.data);
                localStorage.clear();
            } else {
                console.log("API error:", data.error);
            }

        } catch (error) {
            console.log("API error:", error);
        }
    }


    const searchHandle = async (event) => {
        event.preventDefault();
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:3000/api`);
            const newdata = await result.json();
            //console.log(newdata.data);
            const resultData = newdata.data.filter((item) => item.fullname.toLowerCase().includes(key.toLowerCase()));
            if (resultData) {
                setData(resultData);
            }

        } else {
            callApi();
        }
    };


    return <div>
        <MyContext.Provider value={{ searchHandle, maindata }}>
            {children}
        </MyContext.Provider >
    </div>
};

export default CountProvider;