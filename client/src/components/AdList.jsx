import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdItem from './AdItem';
import { deleteAd, fetchAds } from '../redux/actions.js';
import { InputGroup, Form } from "react-bootstrap";
import '../styles/adList.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const AdList = () => {
    const ads = useSelector(state => state.ads);
    const dispatch = useDispatch();
    const darkTheme = useSelector(state => state.darkTheme);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const endOfListRef = useRef();
    const adsPerPage = 6;

    useEffect(() => {
        dispatch(fetchAds());
    }, [ads]);

    useEffect(() => {
        const handleScroll = () => {
            if (loading) return;
            if (endOfListRef.current && window.innerHeight + window.scrollY >= endOfListRef.current.offsetTop) {
                setLoading(true);
                setTimeout(() => {
                    setCurrentPage(prevPage => prevPage + 1);
                    setLoading(false);
                }, 1000);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    useEffect(() => {
        dispatch(fetchAds());
    }, [currentPage]);

    const handleDeleteAd = (id) => {
        dispatch(deleteAd(id));
    };

    const filteredAds = ads.filter(ad => ad.title.toLowerCase().includes(search.toLowerCase()));
    const paginatedAds = filteredAds.slice(0, adsPerPage * currentPage);

    return (
        <div className={darkTheme ? 'adList adList--dark' : 'adList adList--white'}>
            <div className="adList__container container">
                <h2 className={darkTheme ? 'adList__title adList__title--dark' : 'adList__title adList__title--light'}>Актуальні товари</h2>
                <div className="adList__search">
                    <InputGroup className="mb-3">
                        <Form.Control
                            className={'adList__searchInp'}
                            value={search} placeholder={'Search...'}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </div>

                <ul className='adList__list'>
                    {paginatedAds.map((ad) => (
                        <li className='adList__item' key={ad.id}>
                            <AdItem darkTheme={darkTheme} handleDeleteAd={handleDeleteAd} adId={ad.id} title={ad.title}
                                    description={ad.description} img={ad.img}/>
                        </li>
                    ))}
                </ul>
                <div className='loading' ref={endOfListRef}>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin />}
                </div>
            </div>
        </div>
    );
};

export default AdList;
