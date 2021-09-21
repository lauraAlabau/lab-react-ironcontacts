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
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)] // Me devuelve un objeto
    //console.log(randomContact.name) 
    const newArray = [...contact]
    newArray.push(randomContact)
    setContact(newArray)
  }
 

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
       <button onClick={() =>{
          addRandom()
      }}>Add Random Contact
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
