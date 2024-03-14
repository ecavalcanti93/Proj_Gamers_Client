import EditForm from "../components/EditForm";
import { useEffect } from "react";
import { animateScroll as scroll} from "react-scroll";

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