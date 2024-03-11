import EditForm from "../components/EditForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditPassword from "../components/EditPassword";
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