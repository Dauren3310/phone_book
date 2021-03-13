import { Card } from "react-bootstrap";

const CardItem = ({contact}) => {
  return (
    <Card className='my-2'>
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
