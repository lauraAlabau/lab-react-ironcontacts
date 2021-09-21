import './App.css';
import contacts from "./contacts.json";
import {useState} from 'react';




function App() {
  console.log(contacts)
  //console.log(contacts[0])
  //console.log(contacts[0].name)
  //console.log(contacts.splice(0,5))
  const [contact, setContact] = useState(contacts.splice(0,5))

  function addRandom(){
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)] // Me devuelve un objeto random
    //console.log(randomContact.name) 
    const newArray = [...contact] // Duplico el array original de contact
    newArray.push(randomContact)  //Añado el elemento random a ese array nuevo
    setContact(newArray) 
  }

  function sortByPopularity(){
    const newArray = [...contact] 
    const sortByPopularity = newArray.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContact(sortByPopularity) 
  }

  function sortByName(){
    const newArray = [...contact] 
    const sortByName = newArray.sort(function (a, b) {
      if(a.name < b.name){ 
        return -1; 
      }
      if(a.name > b.name){ 
        return 1; 
      }
      return 0;
    });
    setContact(sortByName) 
  }
 

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
       <button onClick={() =>{
          addRandom()
      }}>Add Random Contact
      </button>

      <button onClick={() =>{
          sortByPopularity()
      }}>Sort by popularity
      </button>

      <button onClick={() =>{
          sortByName()
      }}>Sort by name
      </button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contact.map((element) => {
          return(
            <tr key= {element.id}>
              <td><img src={element.pictureUrl} alt=""/></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.wonOscar ? "🏆" : ""}</td>
              <td>{element.wonEmmy  ? "🏆" : ""}</td>
            </tr>
          )
        })}
      </table>

    </div>
  );
}

export default App;
