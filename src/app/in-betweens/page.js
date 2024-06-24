import React from 'react';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/inBetweens.module.css';
import InBetween from '/src/app/components/in-between';
import { importJsonByName } from '/src/app/utils/importJson';

export default async function Moments() {
    const data = await importJsonByName('in-betweens', '');

    return (
        <>
            <Header inner={true} />
            <main className={styles.Moments}>
                <div className="container">
                    <h1 className={styles.PageTitle}>In-Betweens</h1>
                    <div className={styles.InBetweens__Card}>
                        {data?.inBetweens?.map((data, index) => {
                            return (
                                <div
                                    className={styles.InBetweens__Item}
                                    key={`inBetween-${index}`}
                                >
                                    <InBetween data={data} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
