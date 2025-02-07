Understanding Props in React

What are Props?

Props (short for "properties") allow you to pass data from one component to another in React. They make components reusable and dynamic by allowing different values to be passed.

How Props Work?

Props are passed from a parent component to a child component.
Props are read-only, meaning they cannot be changed inside the child component.


Example
function Message(props) {
  return <h2>{props.text}</h2>; // Receiving and using props
}

function App() {
  return <Message text="Hello, React Props!" />; // Passing props
}


Why Use Props?
Helps in reusing components
Makes components dynamic and flexible
 Allows better code organization

Props are one of the core concepts in React, making it easier to build modular and maintainable applications. 