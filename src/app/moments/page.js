import React from 'react';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/moments.module.css';
import { importJsonByName } from '/src/app/utils/importJson';
import Collapsible from '/src/app/components/collapsible';

export default async function Moments() {
    const data = await importJsonByName('moments', '');

    return (
        <>
            <Header inner={true} />
            <main className={styles.Moments}>
                <div className="container">
                    <div className="content-wrap">
                        <div className={styles.Moments__Card}>
                            {data?.moments?.map((moment, index) => {
                                const { title, text } = moment;
                                return (
                                    <div
                                        className={styles.Vagrant__Item}
                                        key={`scenario-${index}`}
                                    >
                                        <Collapsible
                                            description={text}
                                            title={title}
                                            key={index}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
