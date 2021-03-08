import React, { useState } from 'react'
import Modal from 'react-modal'
import "./video-modal.css"
import videoPlayIcon from '../../images/video-play-icon.png'

Modal.setAppElement('#App')

const VideoModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customModalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="video-modal">
      <div className="video-modal__image">
        <img src={props.posterImage} alt="Video"/>
        <div className="video-modal__play-icon" onClick={openModal} onKeyDown={openModal} role="button" tabIndex="0">
          <img src={videoPlayIcon} alt="Play Video"/>
        </div>
      </div>   
      <div className="video-modal__caption">
        {props.caption}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customModalStyles}
      >
        <button className="modal-close-btn" onClick={closeModal}>
          <span></span>
          <span></span>
        </button>
        <iframe src={props.videoSource} title="Video" width="640" height="360" frameborder="0" scrolling="auto" loading="lazy" allowFullScreen></iframe>
      </Modal>                
    </div>
  )
}

export default VideoModal