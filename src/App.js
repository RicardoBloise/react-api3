import React, { Component } from "react";
import Contacts from "./components/contacts";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    //fetch("./xxx.json")
    fetch("http://www.hidro.gob.ar/api/v1/AlturasHorarias")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })

      //.then((res) => res.text()) // convert to plain text
      //.then((text) => console.log(text)) // then log it out

      .catch(console.log);
  }

  render() {
    return <Contacts contacts={this.state.contacts} />;
  }
}

export default App;
