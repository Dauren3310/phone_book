import CardItem from "./CardItem/CardItem";

const CardsList = ({contacts}) => {
  return (
    <div>
      {
        contacts.map(contact => {
          return (
            <CardItem 
              key={contact.id}
              contact={contact}
            />
          )
        })
      }   
    </div>
  );
};

export default CardsList;
