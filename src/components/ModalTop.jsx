import { useState, useEffect, useLayoutEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll} from "react-scroll";
import axios from "axios";
import "./ModalBack.css";

const API_URL = import.meta.env.VITE_API_URL;

function BackToTop() {
  const navigate = useNavigate();

  return (
    <button onClick={()=>{
        scroll.scrollToTop();
    }}>TOP</button>
  );
}

export default BackToTop;
