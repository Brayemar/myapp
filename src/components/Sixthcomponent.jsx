import {useState} from 'react';
const Sixthcomponent = () =>{
    const [weight, setWeight] = useState("50kg")
    return(
        <div className="Sixthcomponent">
            <h1>This is the Sixth component</h1>
            <h2>The weight is:{weight}</h2>
            <button onClick={ () => setWeight("55kg")}>Click to update the Number</button>
        </div>
    )
}

export default Sixthcomponent;