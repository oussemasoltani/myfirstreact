import React from "react";

class Home extends React.Component {
  render() {
    //const name =this.props.name;
    //const lastname =this.props.lastname;
    //const age=this.props.age;
    const { name, lastname, age } = this.props

    return (
      <div>
        welcome to home page component
        <br></br>
        {name}
        <br></br>
        {lastname}
        <br></br>
        {age}
      </div>
    );
  }
}
export default Home;
