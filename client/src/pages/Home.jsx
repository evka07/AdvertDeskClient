import '../styles/home.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HomeTop from "../components/HomeTop.jsx";
import HomeForm from "../components/HomeForm.jsx";
import MySwiper from "../components/MySwiper.jsx";

const Home = () => {


    return (

         <div>
             <Header/>
             <HomeTop/>
             <HomeForm/>
             <MySwiper/>
             <Footer/>
         </div>

    );
};

export default Home;
