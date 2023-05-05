import styles from './NaoEncontrado.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.texto}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;