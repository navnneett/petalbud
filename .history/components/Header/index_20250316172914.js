import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
     
     <div className={styles.paragraph}>
        <img src="/images/head.PNG" alt="Story Title-Petalbud" />
        <p>
          Lumina discovers a hidden realm filled with forest spirits.
          A curious baby Petalbud spirit named Bloom emerges, capturing the hearts of the spirits. 
          As Lumina and Bloom form a bond, other Petalbuds reveal their luminescent selves.
        </p>
    </div>
      
    </header>
  );
}

