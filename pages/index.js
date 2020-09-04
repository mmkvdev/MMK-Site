import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MMK 🌎</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    I'm <a href="https://github.com/mmkvdev">MMK!</a>
                </h1>

                <p className={styles.description}>
                    A Software Engineer who tries to automate things{'!'}
                </p>
            </main>
        </div>
    );
}
