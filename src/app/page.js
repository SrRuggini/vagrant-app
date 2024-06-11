import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/src/app/styles/page.module.css';

export default function Home() {
    return (
        <>
            <main>
                <div className="container">
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
                    <div className="content-wrap">
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
            </main>
        </>
    );
}
