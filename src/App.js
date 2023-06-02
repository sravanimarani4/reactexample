import './App.css';

function App() {

  //variable model
  // const firstName = "sravani"
  // const lastName = "Mragani"

  const user = {
    firstName : "savani",
    lastName : "Maragani"
  }

  function fullName(user){
   return(
    `My FullName is :${user.firstName} ${user.lastName}`
   )
  }


  return (
    <div className="App">
      {/* <h1>My Name is : {firstName + " " + lastName}</h1> */}
      <h1>{fullName(user)}</h1>
    </div>
  );
}

export default App;
