import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/src/app/styles/vagrants.module.css';
import { importJsonByName } from '/src/app/utils/importJson';

export default async function Home() {
    const data = await importJsonByName('vagrants');

    return (
        <>
            <main className={styles.main}>
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
                        {data?.vagrants?.map((vagrant, index) => {
                            const { description, image, passive, passiveDescription, skills, playstyle } = vagrant;
                            return (
                                <div
                                    className={styles.Vagrant__Item}
                                    key={`scenario-${index}`}
                                >
                                    <Image className={styles.Vagrant__Image}
                                        src={`/${image}`}
                                        width={424}
                                        height={500}
                                        alt="Vagrantsong"
                                    />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                    <br/>
                                    <p><b>{passive}:</b></p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: passiveDescription,
                                        }}
                                    />
                                    <br/>
                                    <p><b>Skills e Junk inciais:</b></p>
                                    <p>{skills}</p>
                                    <br/>
                                    <p><b>Playstyle:</b></p>
                                    <p>{playstyle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
