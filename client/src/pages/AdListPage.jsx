import AdList from "../components/AdList.jsx";
import '../styles/adList.css'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const AdListPage = () => {
    return (
        <div className='adListPage'>
            <Header/>
            <AdList/>
            <Footer/>
        </div>
    );
};

export default AdListPage;