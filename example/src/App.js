import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Utilities } from 'vwapp-utilities';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Ambiente de desenvolvimento.</h1>
        <p>Classes: {Utilities.method(Utilities.LIST_TO_STRING, ["class1", "class2"], "-")}</p>
        <p>URL: {Utilities.method(Utilities.MAKE_URL, "calculo numerico")}</p>
      </Container>
    )
  }
}

export default App;
