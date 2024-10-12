import { useState, FC } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem-styled';
import  LargeImage  from './Modal/Modal';
import { IImageGalleryItem } from './ImageGalleryItem-types';


const ImageGalleryItem: FC<IImageGalleryItem> = ({ smallImg, largeImageURL, tags }) => {
  const [modalOpen, setModal] = useState<boolean>(false);

 const onModalOpen = () => setModal(true);
 const onModalClose = () => setModal(false);

    return (
        <>
         <GalleryItem onClick={onModalOpen}>
          <GalleryItemImg src={smallImg} alt={tags} />
         </GalleryItem>
         <LargeImage 
            isModalOpen={modalOpen} 
            closeModal={onModalClose} 
            largeImage={largeImageURL} 
            tags={tags}/>
        </>
        )
};

export default ImageGalleryItem;