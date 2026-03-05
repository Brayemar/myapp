const Thirdcomponent = () =>{
    // Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
    let name = "Benson Babalao";
    let age = 52;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my Third Component</h1>
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;

// create Fourthcomponent.jsx, have two variable i.e weight and height and bind them on the user interface. Then render the component on App.js 