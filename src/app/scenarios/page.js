import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/src/app/styles/scenarios.module.css';
import { importJsonByName } from '/src/app/utils/importJson';

export default async function Home() {
    // const {test} = await importJsonByName('scenarios');
    const { scenarios } = await importJsonByName('scenarios');

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
                        {scenarios.map((scenario, index) => {
                            const slug = scenario.name
                                .toLowerCase()
                                .replace(/['".,]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/['&,]/g, 'and');
                            return (
                                <div
                                    className={styles.Scenario__Item}
                                    key={`scenario-${index}`}
                                >
                                    <Link href={`/scenarios/${slug}`}>
                                        <span className={styles.Scenario__Subtitle}>pg. {scenario.key}</span>
                                        <span className={styles.Scenario__Title}>{scenario.name}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
