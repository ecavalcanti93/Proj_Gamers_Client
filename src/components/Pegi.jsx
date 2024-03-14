import pegi3 from "../assets/age-3-black_0.jpg"
import pegi7 from "../assets/age-7-black.jpg"
import pegi12 from "../assets/age-12-black.jpg"
import pegi16 from "../assets/age-16-black.jpg"
import pegi18 from "../assets/age-18-black 2_0.jpg"
import "./Pegi.css"
import { Link } from "react-router-dom";


function Pegi (props) {

    function logoPegi() {
        switch (props.children) {
            case 3:
                return pegi3
            case 7:
                return pegi7
            case 12:
                return pegi12
            case 16:
                return pegi16
            case 18:
                return pegi18
        }
    }

    return (
        <Link to="https://pegi.info/" target="_blank"><img src={logoPegi()} alt="pegi logo" className='logo-pegi'/></Link>
    )
}

export default Pegi;