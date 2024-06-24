import React from 'react';
import Image from 'next/image';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/vagrants.module.css';
import { importJsonByName } from '/src/app/utils/importJson';

export default async function Home() {
    const data = await importJsonByName('vagrants', '');

    return (
        <>
            <Header inner={true} />
            <main className={styles.main}>
                <div className="container">
                    <h1 className={styles.PageTitle}>Vagrants</h1>
                    <div className="content-wrap">
                        {data?.vagrants?.map((vagrant, index) => {
                            const { description, image, passive, passiveDescription, skills, playstyle } = vagrant;
                            return (
                                <div
                                    className={styles.Vagrant__Item}
                                    key={`scenario-${index}`}
                                >
                                    <Image className={styles.Vagrant__Image}
                                        src={`/vagrants/${image}`}
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
