import EditForm from "../components/EditForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function EditProfilePage() {
    return(
        <div>
           <EditForm/> 
        </div>
        
    )
}

export default EditProfilePage;