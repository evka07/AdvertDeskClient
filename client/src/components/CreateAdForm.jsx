import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createAd} from '../redux/actions';
import '../styles/createAdForm.css'

const CreateAdForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateAd = () => {
        dispatch(createAd({title, description, img}))
            .then(response => {
                setMessage(response.payload);
                setTitle('')
                setDescription('')
                setImg('')
            })
            .catch(error => {
                setMessage(error.payload);
            });
    };

    return (
        <div className='createAdForm'>
            <div className="createAdForm__container container">
                <h2 className="createAdForm__title">Створити продукт</h2>
                <div className="createAdForm__inner">
                    <input className="createAdForm__input" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                    <input maxLength='100' className="createAdForm__input" type="text" placeholder="Description" value={description}
                           onChange={e => setDescription(e.target.value)}/>
                    <input className="createAdForm__input" type="text" placeholder="Image URL" value={img} onChange={e => setImg(e.target.value)}/>
                    <button className="createAdForm__btn" onClick={handleCreateAd}>Створити</button>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default CreateAdForm;
