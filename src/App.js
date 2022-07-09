import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Components/CardGroup2/CardGroup2';




function App() {
  return (

    <div className="App">

      <h2>Bootstrap with react practicing!!</h2>
      <Button variant="warning">My Button</Button>{' '}
      <Button variant="success">My Button</Button>{' '}
      <br />
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <br />
      <Spinner animation="grow" variant="warning" />{' '}
      <Spinner animation="grow" variant="info" />
      <br />
      <CardGroup2></CardGroup2>

    </div>
  );
}

export default App;
