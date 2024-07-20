/* eslint-disable react/prop-types */
import styles from './Contenedores.module.css';

const Contenedores = (props) => {
    return (
        <div style={{width:`${props.width}`, height:`${props.height}`}} className={styles.contenedor}>

        </div>
    )
}

export default Contenedores;