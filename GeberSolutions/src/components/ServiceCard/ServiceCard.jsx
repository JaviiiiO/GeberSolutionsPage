/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from './Modal';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, imageSrc, detailedDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.serviceCard} onClick={openModal}>
        <div className={styles.serviceImage}>
          <img src={imageSrc} alt={title} />
        </div>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalDetails}>
          <h2>{title}</h2>
          <img src={imageSrc} alt={title} className={styles.modalImage} />
          <p>{detailedDescription}</p>
        </div>
      </Modal>
    </>
  );
};

export default ServiceCard;