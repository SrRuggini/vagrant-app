import React from 'react';
import Image from 'next/image';
import styles from '/src/app/styles/home.module.css';

export default function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <div className={styles.Home}>
                        <div className="Logo">
                            <Link href={'/'}>
                                <Image
                                    src="/logotipo.png"
                                    width={265}
                                    height={45}
                                    alt="Vagrantsong"
                                />
                            </Link>
                        </div>
                        <Image
                            className={styles.Home__Cat}
                            src="/cat.png"
                            width={320}
                            height={190}
                            alt="Vagrantsong"
                        />
                        <div className={styles.Home__Card}>
                            <div className={styles.Section__Item}>
                                <Link href="/vagrants/">
                                    <span className={styles.Section__Title}>Vagrants</span>
                                </Link>
                            </div>
                            <div className={styles.Section__Item}>
                                <Link href="/scenarios/">
                                    <span className={styles.Section__Title}>Cenários</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
