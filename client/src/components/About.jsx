import '../styles/about.css'

const About = () => {
    return (
        <div className="about">
            <div className="about__container container">
                <div className="about__inner">
                    <h2 className="title">Наша команда</h2>
                    <ul className="about__list">
                        <li className="about__item">
                            <img className="about__img" src="../images/about1.jpg" alt=""/>
                            <h3 className="about__title">Андрій Якобувич</h3>
                            <p className="about__text">Директор</p>
                            <ul className="icon__list">
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon1.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon2.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon3.png" alt="#"/>
                                </li>
                            </ul>
                        </li>
                        <li className="about__item">
                            <img className="about__img" src="../images/about2.jpg" alt=""/>
                            <h3 className="about__title">Юлія Олексанлрівна</h3>
                            <p className="about__text">Головний дизайнер</p>
                            <ul className="icon__list">
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon1.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon2.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon3.png" alt="#"/>
                                </li>
                            </ul>
                        </li>
                        <li className="about__item">
                            <img className="about__img" src="../images/about3.jpg" alt=""/>
                            <h3 className="about__title">Максим Анатолієвич</h3>
                            <p className="about__text">Головний розробник</p>
                            <ul className="icon__list">
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon1.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon2.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon3.png" alt="#"/>
                                </li>
                            </ul>
                        </li>
                        <li className="about__item">
                            <img className="about__img" src="../images/about4.jpg" alt=""/>
                            <h3 className="about__title">Роман Андрієвич</h3>
                            <p className="about__text">Головний менжер з продаж</p>
                            <ul className="icon__list">
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon1.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon2.png" alt="#"/>
                                </li>
                                <li className="icon__item">
                                    <img className="about__img" src="../images/icon3.png" alt="#"/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;