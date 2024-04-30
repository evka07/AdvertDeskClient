import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../styles/mySwiper.css';
const MySwiper = () => {
    return (
        <div className="swiper">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mySwiper__item">
                        <div className="mySwiper__img">
                            <img src="../images/mySwiper1.jpg" alt="#"/>
                        </div>
                        <div className="mySwiper__contend">
                            <h3 className="mySwiper__title">Підсумок трендів: Дивовижні образи та стилі</h3>
                            <p className="mySwiper__text">Завершіть свій образ за допомогою наших вишуканих аксесуарів, які створять гармонійний акцент вашого стилю. Від ексклюзивних прикрас до функціональних деталей, кожен предмет здатен доповнити ваш образ і підкреслити вашу неповторну індивідуальність. Приєднуйтесь до нашого показу мод, щоб відкрити для себе весь спектр можливостей, які пропонує світ моди.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mySwiper__item">
                        <div className="mySwiper__contend">
                            <h3 className="mySwiper__title">Наукові досягнення у текстильній промисловості</h3>
                            <p className="mySwiper__text">Запрошуємо вас на захопливу подорож через найактуальніші тенденції сучасної моди. Відвідайте наш показ, щоб зануритися у світ різноманітних образів, де кожен елемент вибухає живими кольорами та неочікуваними комбінаціями. Від еклектичних стилів, що викликають захоплення, до класичних втілень елегантності - ми пропонуємо вам повний спектр ідей для того, щоб ваш гардероб став втіленням вашої неповторної особистості.</p>
                        </div>
                        <div className="mySwiper__img">
                            <img className="mySwiper__img" src="../images/mySwiper4.jpeg" alt="#"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mySwiper__item">
                        <div className="mySwiper__img">
                            <img src="../images/mySwiper3.jpg" alt="#"/>
                        </div>
                        <div className="mySwiper__contend">
                            <h3 className="mySwiper__title">Особистий штрих: Елегантні аксесуари та деталі</h3>
                            <p className="mySwiper__text">Перевершуйте уяву з нашою колекцією тканин, які відкривають нові горизонти у світі моди. На показі ви побачите найсучасніші інновації, які змінюють гру гри в текстильній промисловості. Від екологічно чистих матеріалів, що дозволяють зберігати природні ресурси, до технологічних нововведень, що революціонізують способи виробництва - ми прагнемо показати вам майбутнє текстильної промисловості вже сьогодні.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MySwiper;
