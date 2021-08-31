/*
function PersonCard(props){
  return (
  <div>
     <span>
       <h1>Hola, {props.name} </h1>
     </span>
    </div>
  );
}
*/
import './style.css'

function PersonCard({name,age,country}){
  return (
  <div className = 'UserCard'>
     <strong>
       Dev: {name}
     </strong>
      <p>
       Age: {age}
      </p>
      <p>
       País: {country}
     </p>
  </div> 
  );
}

export default PersonCard;
