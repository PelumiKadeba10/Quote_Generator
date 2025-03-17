import { useState, useEffect } from "react";

const url = "https://api.api-ninjas.com/v1/quotes";
const key = "ASp9hh12Ya3hEsSsrLpK2w==8HqM4fTNzMb1ORBt"

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