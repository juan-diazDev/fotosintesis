import Link from 'next/link';
import styles from '../../styles/About.module.scss';

const About = () => {
  return (
    <section className={styles.hero__short__about_container}>
      <h2>
        About us
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia, earum sint amet suscipit quasi assumenda. Dolore debitis nulla minus, tempora commodi perspiciatis. Reiciendis, sequi quaerat consequuntur molestias odit sit.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at culpa, quae corrupti et porro suscipit aliquam a, quo nulla earum modi inventore dolores. Deserunt vitae quibusdam aut amet dolorem!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatem soluta? Amet, perferendis doloremque? Architecto esse a, non iste ipsam consequuntur enim maiores cumque expedita, sapiente temporibus rem cupiditate nemo.
      </p>
      <Link href="/sign-up">
        <div className={styles.short__description__start__button}>
          <button>Start reding!</button>
        </div>
      </Link>
    </section>
  )
}

export default About
