import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const AdItem = ({title, description, img, adId, handleDeleteAd}) => {

    return (
        <Card  style={{width: '100%'}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className="adItem__buttons">
                    <NavLink to={`/ads/${adId}/edit`}>
                        <Button variant="success">Edit</Button>
                    </NavLink>
                    <Button variant="danger" onClick={() => handleDeleteAd(adId)}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AdItem;

