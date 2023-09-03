
import React, { Component } from 'react';
import Modal from 'react-modal';
import { StyledImage, StyledPreview } from './GalleryItem.syled';

Modal.setAppElement('#root');

export class GalleryItem extends Component{

    state= {
        isModalOpen: false,
    }

    customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      height: '90vh'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.3)',
    }
  };
    
    openModal = () => this.setState({isModalOpen:true});
    
    closeModal = () => this.setState({isModalOpen:false});
    

    render(){
        const {
            image: {id, largeImageURL, webformatURL}
        } = this.props;

        return(
            <>
            <StyledPreview src={webformatURL} alt={id} onClick={this.openModal} />
            <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={this.customStyles}
            >
                <StyledImage src={largeImageURL} alt={id} />
                
            </Modal>
            </>
           
        )
        
}
}
