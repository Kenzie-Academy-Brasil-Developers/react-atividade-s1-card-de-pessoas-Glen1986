import './App.css';
import PersonCard from './components/PersonCard/Developer.jsx'

function App() {

//  const userName = 'bobMarley';
  const usersName    = {bobMarley : 'bobMarley', Glen : "Glen",  Darthi : "Darthi"};
  const usersAge     = {bobMarley : '20',        Glen : "39",    Darthi : "16"};
  const usersCountry = {bobMarley : 'Jamaica',   Glen : "Chile", Darthi : "Brasil"};

  return (
    <div className="App">
      <div className="App-header">
        <PersonCard name = {usersName.bobMarley} age = {usersAge.bobMarley} country = {usersCountry.bobMarley}/>
        <PersonCard name = {usersName.Darthi}    age = {usersAge.Darthi}    country = {usersCountry.Darthi}/>
        <PersonCard name = {usersName.Glen}      age = {usersAge.Glen}      country = {usersCountry.Glen}/>
        
  

     </div>
    </div>
  );
}

export default App;
