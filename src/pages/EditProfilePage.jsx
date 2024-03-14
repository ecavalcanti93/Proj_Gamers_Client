import EditForm from "../components/EditForm";
import { useEffect } from "react";
import { animateScroll as scroll} from "react-scroll";

const API_URL = import.meta.env.VITE_API_URL;

function EditProfilePage() {

    useEffect(() => {
        scroll.scrollToTop();
      }, []);
      
    return(
        <div>
           <EditForm/> 
        </div>
        
    )
}

export default EditProfilePage;