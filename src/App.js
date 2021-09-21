import './App.css';
import contacts from "./contacts.json";

function App() {
  console.log(contacts)
  //console.log(contacts[0])
  //console.log(contacts[0].name)
  //console.log(contacts.splice(0,5))
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.splice(0,5).map((element) => {
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
