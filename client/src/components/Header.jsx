import '../styles/header.css'
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";

const Header = () => {
    const isAuthenticated = useSelector(state => !!state.auth.message);
    return (
        <div className='header'>
            <div className="header__container container">
                <div className="header__inner">
                    <div className={'header__logoNav'}>
                        <p className="logo">Lady<span style={{color: "#FF1493"}}>Chic</span></p>
                        <nav className="main">
                            <ul className="main__list">
                                <li className="main__item">
                                    <NavLink to='/'>Дім</NavLink>
                                </li>
                                <li className="main__item">
                                    <NavLink to='/about'>Про нас</NavLink>
                                </li>
                                {isAuthenticated && (
                                    <li className="main__item">
                                        <NavLink to='/adList'>Товари</NavLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className="header__buttons main__item">
                        <NavLink to={'/login'}>Увійти</NavLink>
                        <NavLink to={'/register'}>Зареєструватися</NavLink>
                        {isAuthenticated && (
                            <NavLink to='/createAd'>
                                <Button className="header__btn" variant="primary">Додати товар</Button>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;