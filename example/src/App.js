import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Utilities, { Run, By, To } from 'vwapp-utilities';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Ambiente de desenvolvimento.</h1>
        <p><b>Classes</b>: {Utilities.method(Run.LIST_TO_STRING, ["class1", "class2"], "-")}</p>
        <p><b>URL</b>: {Utilities.method(Run.MAKE_URL, "calculo numerico")}</p>
        <p><b>Normalize CPF</b>: {Utilities.normalize(To.CPF, "40572590075")}</p>
        <p><b>Validate CPF</b>: {String(Utilities.validate(By.CPF, "40572590075"))}</p>
      </Container>
    )
  }
}

export default App;
