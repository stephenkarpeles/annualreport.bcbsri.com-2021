import React, { useState } from 'react'
import Modal from 'react-modal'
import "./video-modal.css"
import videoPlayIcon from '../../images/video-play-icon.png'
import videoKidsImage from '../../images/video-kids-want-to-know.jpg'

Modal.setAppElement('#App')

const VideoModal = () => {
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
        <img src={videoKidsImage} alt="Video Image"/>
        <div className="video-modal__play-icon" onClick={openModal}>
          <img src={videoPlayIcon} alt="Play Video"/>
        </div>
      </div>   
      <div className="video-modal__caption">
        Watch a clip of the Rhode Island PBS short film series, Kids Want to Know, sponsored by BCBSRI.
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
        <iframe src="//sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/640934f2207f434eb4d5f982f0f90421.m3u8&autostart=false" width="640" height="360" frameborder="0" scrolling="auto" loading="lazy" allowFullScreen></iframe>
      </Modal>                
    </div>
  )
}

export default VideoModal