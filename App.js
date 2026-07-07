import React from "react";
import ReactDOM from "react-dom/client";

/*const heading = React.createElement('h1', { id: 'heading' }, 'namaste react')   //core react 
const root = ReactDOM.createRoot(document.getElementById('root'))  

const headingjsx = <h1 id='jsxheading'>namaste react in jsx</h1>   //jsx element(this is how we write jsx element)
root.render(headingjsx);*/
const root = ReactDOM.createRoot(document.getElementById("root"));//creating root for react
const Title = () => (<h1>this is my title for component composition</h1>)//functional component
const elm = 1000 //js variable
const heading=(<h1>oye mai to js hi hu{elm} </h1>) //element composition
const ComponentHeading = () => (<div> //functional component
  <Title />  //component composition
  <h1>{elm}</h1>   // adding js variable in jsx
  {heading}        // adding js element in jsx
  <h1>this is my 1st  component</h1>
</div>)
root .render(<ComponentHeading/>) //rendering the component into the root