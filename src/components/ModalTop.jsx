import { useState, useEffect, useLayoutEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll} from "react-scroll";
import axios from "axios";
import "./ModalTop.css";

const API_URL = import.meta.env.VITE_API_URL;

function BackToTop() {
  const navigate = useNavigate();

  return (
    <div className="btn-top">
    <button className="button-top" onClick={()=>{
        scroll.scrollToTop();
    }}></button>
    </div>
  );
}

export default BackToTop;
