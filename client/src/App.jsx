import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import EditeAdForm from './components/EditeAdForm.jsx';
import Home from "./pages/Home.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAdPage from "./pages/CreateAdPage.jsx";
import AdListPage from "./pages/AdListPage.jsx";
import {useSelector} from "react-redux";
import Header from "./components/Header.jsx";
import EditAdFormPage from "./pages/EditAdFormPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";



const App = () => {
    const isAuthenticated = useSelector(state => !!state.auth.message);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage/>}/>
                {isAuthenticated ? (
                    <>
                        <Route path="/createAd" element={<CreateAdPage />} />
                        <Route path="/adList" element={<AdListPage />} />
                        <Route path="/ads/:id/edit" element={<EditAdFormPage />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>

        </BrowserRouter>
    );
};

export default App;
