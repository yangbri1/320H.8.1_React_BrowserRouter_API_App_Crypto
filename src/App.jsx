// import Routes, Route from react-router-dom library
import { Routes, Route } from "react-router-dom"

// import CSS styling
import './styles.css';

// import pages
import Main from "./pages/Main.jsx"
import Price from "./pages/Price.jsx"
import Currencies from "./pages/Currencies.jsx"

// import Nav component
import Nav from "./components/Nav.jsx";

// root functional component App()
export default function App() {
  return(
    <div className="App">
      {/* Nav is outside Routes -- Routes should only include Route */}
      <Nav />
      <Routes>
        {/* Pass down a route &  a React functional component*/}
        <Route path='/' element={<Main />} />
        {/* :symbol to make price a dynamic route */}
        <Route path='/price/:symbol' element={<Price />} />
        <Route path='/currencies' element={<Currencies />} />
      </Routes>
    </div>
  )
}