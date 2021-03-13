import { Button } from "react-bootstrap";

const ContactInfo = ({ contactInfo, deleteContact, goToEditForm}) => {

  const image = (
    <img
      style={{ width: '100%' }} 
      src={contactInfo.photo} 
      alt="preview" 
    />
  );

  return (
    <div> 
      <div className='d-flex mt-1' >

        <div style={{ width: 200, minHeight: 200 }}>
            {contactInfo.photo ? image : null}
        </div>

        <div className='ml-2'>
          <h3>{contactInfo.name}</h3>
          <div>Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></div>
          <div>Email: <a href={`email:${contactInfo.email}`}>{contactInfo.email}</a></div>
        </div>

      </div>
      
      <div>
        <Button
          className='my-2 mr-2'
          variant="warning"
          onClick={() => goToEditForm(contactInfo.id)}
        >
          Edit
        </Button>
        <Button
          className='my-2 mr-2'
          variant="danger"
          onClick={() => deleteContact(contactInfo.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  )

};

export default ContactInfo;
