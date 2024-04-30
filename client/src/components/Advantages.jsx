import '../styles/advantages.css'

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages__container container">
                <h2 className="advantages__title">Про нашу фірму</h2>
                <div className="advantages__inner">
                    <div className="advantages__img">
                        <img className="img" src="../images/advantages.jpg" alt="#"/>
                    </div>
                    <div className="advantages__content">
                        <p className="advantages__text">
                            <span className="cursor">Ласкаво просимо до LadyChic</span> - вашого вірного провідника у світі елегантності та стилю! У нашому інтернет-магазині ви знайдете найактуальніші та найстильніші жіночі одяг та аксесуари для будь-якого заходу та події.
                        </p>
                        <p className="advantages__text">
                            <span className="cursor">LadyChic</span> - це не просто магазин, а справжнє модне співтовариство, де кожна жінка знайде щось особливе для себе. Ми пропонуємо широкий асортимент товарів від коктейльних суконь до повсякденних образів, щоб ви могли виражати свій стиль у будь-якій ситуації.
                        </p>
                        <p className="advantages__text">
                            Наша команда зробить усе можливе, щоб ваше переживання під час покупок було приємним та зручним. Ми пильно відбираємо товари від найкращих виробників, щоб ви отримали лише найвищу якість за доступними цінами.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;