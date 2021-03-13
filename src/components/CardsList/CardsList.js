import CardItem from "./CardItem/CardItem";

const CardsList = ({contacts, showContactInfo}) => {
  return (
    <div>
      {
        contacts.map(contact => {
          return (
            <CardItem 
              key={contact.id}
              showContactInfo={() => showContactInfo(contact.id)}
              contact={contact}
            />
          )
        })
      }   
    </div>
  );
};

export default CardsList;
