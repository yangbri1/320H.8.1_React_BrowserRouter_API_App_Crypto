import { Link } from "react-router-dom";

// create React functional component
export default function Currencies(){
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];

    return(
        // <h1>Currencies component</h1>
        <div className="currencies">
            {/* map each name to symbol */}
            {currencies.map((coin) => {
                // destructure out "name" & "symbol" from currencies "props"
                const { name, symbol } = coin;

                return (
                    // create a bunch of anchor tags linking to each coin
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    )
}