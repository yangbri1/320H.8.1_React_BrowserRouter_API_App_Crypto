// here NavBar are components NOT pages

import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
        {/* usually wrap Link around a button or something stylized */}
        {/* key={name} deprecated but workaround for warning */}
        <Link key={name} to="/">
            <div>CRYPTO PRICES</div>
        </Link>
        <Link to="/currencies">
            <div>CURRENCIES</div>
        </Link>
        {/* Oussama way */}
        {/* <Link key={name} to={`/price/${symbol}`} >
            <h2>{name}</h2>
        </Link>" */}
    </div>
  );
}