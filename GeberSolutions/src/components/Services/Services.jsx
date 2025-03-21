import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Remodelación de Cocinas',
      description: 'Transformamos tu cocina en un espacio moderno y funcional.',
      detailedDescription: 'Nuestro servicio de remodelación de cocinas incluye diseño personalizado, instalación de gabinetes, encimeras de alta calidad, electrodomésticos modernos y acabados de lujo. Nos aseguramos de que cada detalle esté perfectamente planificado para maximizar el espacio y la eficiencia.',
      imageSrc: 'https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg',
    },
    {
      title: 'Renovación de Baños',
      description: 'Crea un baño relajante y elegante con nuestro servicio de renovación.',
      detailedDescription: 'Ofrecemos renovaciones completas de baños que incluyen la instalación de nuevas duchas, bañeras, lavabos, sanitarios y azulejos. Utilizamos materiales duraderos y de alta calidad para garantizar un resultado que combine estilo y funcionalidad.',
      imageSrc: 'https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg',
    },
    {
      title: 'Renovación de Fachadas',
      description: 'Mejora la apariencia de tu casa con una fachada renovada.',
      detailedDescription: 'Nuestro servicio de renovación de fachadas incluye la aplicación de nuevos revestimientos, pintura, reparación de estructuras y diseño de paisajismo. Transformamos la apariencia exterior de tu hogar para que sea más atractiva y acogedora.',
      imageSrc: 'https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg',
    },
    {
      title: 'Sustitución de Pisos',
      description: 'Actualiza tus pisos con materiales modernos y duraderos.',
      detailedDescription: 'Ofrecemos una amplia variedad de opciones para la sustitución de pisos, incluyendo madera, cerámica, porcelanato y más. Nuestro equipo se encarga de la remoción del piso antiguo, la preparación de la superficie y la instalación del nuevo piso con precisión y cuidado.',
      imageSrc: 'https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg',
    },
    {
      title: 'Remodelación de Ventanas',
      description: 'Transforma tus ventanas en un lugar elegante y moderno.',
      detailedDescription: 'Nuestro servicio de remodelación de ventanas incluye la instalación de nuevas ventanas, lavabos, acabados de lujo y pintura. Ofrecemos una amplia variedad de opciones para la remodelación de ventanas, asegurando que tus ventanas se adapten perfectamente a tu estilo.',
      imageSrc: 'https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg',
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            detailedDescription={service.detailedDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;