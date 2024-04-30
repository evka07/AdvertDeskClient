import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__inner">
                    <ul className="footer__list">
                        <li className="footer__item footer__item-title">Продукти</li>
                        <li className="footer__item">Використання</li>
                        <li className="footer__item">Новини</li>
                        <li className="footer__item">Продажа</li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item footer__item-title">Ресурси</li>
                            <li className="footer__item">Блог</li>
                            <li className="footer__item">FAQ</li>
                        <li className="footer__item">Контакти</li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item footer__item-title">Співпраця</li>
                        <li className="footer__item">Постачальник</li>
                        <li className="footer__item">Партнери</li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item footer__item-title">Про нас</li>
                        <li className="footer__item">Про нас</li>
                        <li className="footer__item">Команда</li>
                        <li className="footer__item">Кар'єра</li>
                    </ul>
                </div>
                <p className="year">@Всі права захищені</p>
            </div>
        </footer>
    );
}

export default Footer;
