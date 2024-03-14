import { useNavigate } from "react-router-dom";
import "./ModalBack.css";

const API_URL = import.meta.env.VITE_API_URL;

function BackToBack () {
  const navigate = useNavigate();
    
    return (
  <button className='button-back' onClick={()=>{
    navigate(-1)
  }}></button>
  )
}

export default BackToBack;