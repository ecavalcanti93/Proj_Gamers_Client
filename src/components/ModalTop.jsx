import { animateScroll as scroll } from "react-scroll";
import "./ModalTop.css";

function BackToTop() {
  return (
    <div className="btn-top">
      <button
        className="button-top"
        onClick={() => {
          scroll.scrollToTop();
        }}
      ></button>
    </div>
  );
}

export default BackToTop;
