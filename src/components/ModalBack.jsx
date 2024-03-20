import { useNavigate } from "react-router-dom";
import "./ModalBack.css";

function BackToBack () {
  const navigate = useNavigate();
    
    return (
  <button className='button-back' title="Return" onClick={()=>{
    navigate(-1)
  }}></button>
  )
}

export default BackToBack;