// import useParams 
import { useParams } from "react-router-dom";

// useState() to hold state -- rarely ever NOT used in React (bread & butter)
import { useState, useEffect } from "react";

// import React from 'react';

// create React component
export default function Price(){

    // hold coin state
    const [coin, setCoin] = useState(null); // please not a String "null" (not a falsy value)

    // "params" will always be an obj -- dot notation to access property
    // destructure out "symbol" or "params" w/o destructuring
    const { symbol } = useParams();

    // API key from coinapi.io
    // can't really store API_KEY in .env in React ... replace apiKey below w/ personalize API key for full functionality
    const apiKey = import.meta.env.API_KEY;

    // Using the other two variables to create our URL.
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    // async function to retrieve data from db
    async function getData(){
        try {
            let res = await fetch(url);
            let data = await res.json();    // this step is automatically done if using axios
            
            setCoin(data);
        } catch (err) {
            console.error(err);
        }
    }

    // useEffect setup w/ arrow fn
    // want it to reload at every mount
    useEffect(() => {
        getData();
    }, []);     // [] for initial render

    // display when data DNE
    const loading = () => {
        return(<h1>Loading ...</h1>)
    };

    // loaded function when data is fetched
    const loaded = () => {
        return(
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };

    // return(
    //     <h1>{symbol}</h1>
        
    // );

    // If coin has data, run the loaded function; otherwise, run loading.
    return coin && coin.rate ? loaded() : loading();
}