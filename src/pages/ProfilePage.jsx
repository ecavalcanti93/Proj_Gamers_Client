import "./ProfilePage.css";
import { useEffect, useContext } from "react";
import Card from "../components/Perfil";
import SearchProfile from "../components/SearchProfile";
import { animateScroll as scroll} from "react-scroll";

function ProfilePage() {
  
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  
  return (
    <div>
      <Card />
      <SearchProfile />
    </div>
  );
}

export default ProfilePage;
