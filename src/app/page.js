import React from 'react';
import Link from 'next/link';
import styles from '/src/app/styles/page.module.css';

export default function Home() {
    const scenarios = [
        'Shelter from the Storm',
        'Under My Skin',
        'Paradise by the Marco Light',
    ];
    return (
        <>
            <main className={styles.main}>
                <div className="container">
                    <div className="content-wrap">
                        {scenarios.map((scenario, index) => {
                            const slug = scenario.toLowerCase().replace(/ /g, '-');
                            return (
                                <div className={styles.Scenario__Item} key={`scenario-${index}`}>
                                    <Link href={`/scenarios/${slug}`}>
                                        <span className={styles.Scenario__Subtitle}>Cenário {index}</span>
                                        <span className={styles.Scenario__Title}>{scenario}</span>
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
