import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import Overlay from 'react-bootstrap/lib/Overlay';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Style from './Style.css';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Pagination from 'react-bootstrap/lib/Pagination';

export default class World extends React.Component {
  open() {
    this.setState({ showModal: true });
  }

  newopen() {
    this.setState({ showModal: false, show: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  newclose() {
    this.setState({ show: false });
  }

  constructor()
    {
    super();
    this.state =
    { showModal: false,
      show: false,
      activePage: 1,
    };
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey });
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">Click to see overlay</Tooltip>
  );
    return (
      <div>
      <div>
        <h1>World</h1>

        <ButtonToolbar >
          <OverlayTrigger placement="right" overlay={tooltip}>
            <Button bsStyle="danger" bsSize="large" onClick={this.open.bind(this)}>1</Button>
          </OverlayTrigger>
        <Button bsStyle="primary" bsSize="large">2</Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="small"
          keyboard
          transparent={true}
          >
          <Modal.Header closeButton>
            <h2>Sample Modal</h2>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" bsSize="large" onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="info" bsSize="large" onClick={this.newopen.bind(this)}>Newopen</Button>
          </Modal.Footer>
        </Modal>

      </div>
      <DropdownButton title="Dropdown" bsStyle="info" bsSize="large"id="abc">
            <MenuItem eventKey="1">Dropdown link1</MenuItem>
            <MenuItem eventKey="2">Dropdown link2</MenuItem>
        </DropdownButton>
        <ButtonToolbar>
          <Button bsStyle="success" bsSize="large">3</Button>
          <Button bsStyle="warning" bsSize="large">4</Button>
        </ButtonToolbar>
      <div className="modal-container">
        <Modal
          show={this.state.show}
          onHide={this.newclose.bind(this)}
          container={this}
          dialogClassName={Style.custom_modal}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.newclose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Nav bsStyle="tabs" activeKey={1}>
        <NavItem eventKey={1} href="/home">Navitem 1</NavItem>
        <NavItem eventKey={2} title="Nv2">Navitem 2</NavItem>
        <NavItem eventKey={3} >Navitem 3</NavItem>
      </Nav>
      <Pagination
        bsSize="medium"
        first
        last
        prev
        next
        ellipsis
        boundayLinks
        maxButtons={5}
        items={10}
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)}
        />
    </div>
  );
  }
}
