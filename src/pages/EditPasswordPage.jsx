import EditPassword from "../components/EditPassword"
import { useEffect } from "react";
import { animateScroll as scroll} from "react-scroll";


function EditPasswordPage() {

    useEffect(() => {
        scroll.scrollToTop();
      }, []);

    return(
        <div>
           <EditPassword/>
        </div>
        
    )
}

export default EditPasswordPage;