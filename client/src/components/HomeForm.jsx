import '../styles/homeForm.css'
import  { useState } from 'react';

const HomeForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [token, setToken] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            email: email,
            text: text,
            token: token
        };

        try {
            const response = await fetch('your_authentication_endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Дані успішно надіслано на сервер');
            } else {
                console.error('Помилка під час надсилання даних на сервер');
            }
        } catch (error) {
            console.error('Помилка під час відправлення запиту на сервер:', error);
        }
    };

    return (
        <div className="homeForm">
            <div className="homeForm__container container">
                <div className="homeForm__inner">
                    <h2 className="homeForm__title">Звязок з ним</h2>
                    <div className="homeForm__form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="homeForm__name" htmlFor="name">Ім'я:</label>
                                <input className="homeForm__input" type="text" id="name" value={name} onChange={handleNameChange} />
                            </div>
                            <div className="form-group">
                                <label className="homeForm__name" htmlFor="email">Електронна пошта:</label>
                                <input className="homeForm__input" type="email" id="email" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="form-group">
                                <label className="homeForm__name" htmlFor="text">Текст повідомлення:</label>
                                <textarea className="homeForm__input homeForm__textarea" id="text" value={text} onChange={handleTextChange}></textarea>
                            </div>
                            <button className="homeForm__btn" type="submit">Надіслати</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeForm;