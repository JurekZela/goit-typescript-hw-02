import Modal from 'react-modal';
import { IModal } from './Modal-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    border: 'none',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  };

  Modal.setAppElement('#root');

 const LargeImage = ({ isModalOpen, closeModal, largeImage, tags }: IModal) => {
    return (
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Large Image"
  >
    <img src={largeImage} alt={tags} />
</Modal>
  );
};

export default LargeImage;