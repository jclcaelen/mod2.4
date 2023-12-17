import styles from './Button.module.css'

// Passing Event Handlers as Props
function Button({ label, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;