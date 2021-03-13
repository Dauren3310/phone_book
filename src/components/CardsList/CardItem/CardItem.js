import { Card } from "react-bootstrap";

const CardItem = ({contact, showContactInfo}) => {
  return (
    <Card 
      style={{cursor: 'pointer'}} 
      className='my-3' 
      onClick={showContactInfo}
    >
      <Card.Body className='d-flex align-items-center'>
        <img 
          className='mr-3'
          width={80}
          height={80}
          src={contact.photo} 
          alt="preview"
        />
      <Card.Text>{contact.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
