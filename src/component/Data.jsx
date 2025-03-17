import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URI;
const key = import.meta.env.VITE_API_KEY;

function Data(){
    const [quotes, setQuote] = useState([]);
    useEffect(() => {
        fetch(url,
           {
            method: "GET",
            mode: "cors",
            headers: {
                "X-Api-Key": key
            },
           })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setQuote(data);
        })
        .catch((error) => console.error("Error fetching quote", error));
    }, []);

    return(
        <div className="mt-4 ">
            <p className="pb-3 font-bold text-xl">Quote of the day</p>
            {quotes.map((item, index) =>(
                <div key={index}>
                <p className="italic">{item.quote}</p>
                <p className="font-semibold "> - {item.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Data