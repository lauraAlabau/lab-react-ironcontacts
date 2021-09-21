import './App.css';
import contacts from "./contacts.json";
import {useState} from 'react';


const listContacts = [...contacts]
const spliceList = listContacts.splice(0,5)

function App() {
  //console.log(contacts)
  //console.log(contacts[0])
  //console.log(contacts[0].name)
  //console.log(contacts.splice(0,5))

  const [contact, setContact] = useState(spliceList)

  function addRandom(){
    const randomContact = listContacts.splice(Math.floor(Math.random()*listContacts.length),1) // Me devuelve un objeto random
    console.log(randomContact) 
    console.log(listContacts)
    //const newArray = [...contact] // Duplico el array original de contact
    //newArray.push(randomContact[0])  //Añado el elemento random a ese array nuevo
    setContact([...contact, randomContact[0]]) 
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

  function deleteContact(id){
    const newArray = [...contact] 
    const filteredContacts = newArray.filter(element => {
        return id !== element.id;
      });
      setContact(filteredContacts) 
  }


  return (
    <div className="App">

      <h1>Iron Contacts</h1>

      <button onClick={() =>{addRandom()}}>Add Random Contact</button>
      <button onClick={() =>{sortByPopularity()}}>Sort by popularity</button>
      <button onClick={() =>{sortByName()}}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contact.map((element) => {
          return(
            <tr key= {element?.id}>
              <td><img src={element?.pictureUrl} alt=""/></td>
              <td>{element?.name}</td>
              <td>{element?.popularity}</td>
              <td>{element?.wonOscar ? "🏆" : ""}</td>
              <td>{element?.wonEmmy  ? "🏆" : ""}</td>
              <td>  
                <button className="delete" onClick={() =>{deleteContact(element.id)}}>X</button> 
              </td>
            </tr>
          )
        })}
      </table>

    </div>
  );
}

export default App;
