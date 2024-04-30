import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {updateAd} from '../redux/actions';
import '../styles/editeAdForm.css'

const EditeAdForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const adId = parseInt(id);
    const ads = useSelector(state => state.ads);
    const ad = ads.find(ad => ad.id === adId);

    const [formData, setFormData] = useState({
        title: ad ? ad.title : '',
        description: ad ? ad.description : '',
        img: ad ? ad.img : ''
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (ad) {
            setFormData({
                title: ad.title,
                description: ad.description,
                img: ad.img
            });
        }
    }, [ad]);

    const handleUpdateAd = () => {
        dispatch(updateAd(adId, formData))
            .then(response => {
                navigate('/adList');
                setMessage(response.payload);
            })
            .catch(error => {
                setMessage(error.payload);
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='editeAdForm'>
            <div className="editeAdForm__container container">
                <h2 className="editeAdForm__title">Редагувати</h2>
                <div className="editeAdForm__inner">
                    <input className="editeAdForm__input" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
                    <input className="editeAdForm__input" type="text" name="description" placeholder="Description" value={formData.description}
                           onChange={handleChange}/>
                    <input className="editeAdForm__input" type="text" name="img" placeholder="Img" value={formData.img} onChange={handleChange}/>
                    <button className="editeAdForm__btn" onClick={handleUpdateAd}>Оновити</button>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default EditeAdForm;
