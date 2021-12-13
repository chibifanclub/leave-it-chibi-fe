import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { updateSearchError, showModal } from '../../packages/redux/search-slice';
import { useSelector } from 'react-redux';
import store from '../../packages/redux/store';


import './LandingModal.css'

const LandingModal = ({show}) => {
  const modalItem = useSelector(state => state.search.item)


  const handleClose = () => {
    store.dispatch(showModal(false))
  }

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{capitalize(modalItem.attributes.name)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Toxicity Level: {modalItem.attributes.toxicity} / 5</h5>
          <h5>Description:</h5>
          <p>{modalItem.attributes.description}</p>
          <h5>Treatment:</h5>
          <p>{modalItem.attributes.treatment}</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )

}

export default LandingModal
