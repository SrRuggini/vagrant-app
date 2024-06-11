'use client';

import React, { useState, useEffect } from 'react';
import styles from '/src/app/styles/scenario.module.css';
import { importJsonByName } from '/src/app/utils/importJson';
import Collapsible from '/src/app/components/collapsible';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Scenarios({ params }) {
    const [scenarioData, setScenarioData] = useState(null);

    const fetchScenarioData = async (name) => {
        const data = await importJsonByName(name);
        setScenarioData(data);
    };

    useEffect(() => {
        if (params.scenario) {
            console.log('test');
            fetchScenarioData(params.scenario);
        }
    }, [params.scenario]);

    return (
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
                {scenarioData && (
                    <>
                        <h5 className={styles.Scenario__SubTitle}>
              cenário {scenarioData?.key}
                        </h5>
                        <h1 className={styles.Scenario__Title}>{scenarioData?.title}</h1>

                        <div className={styles.Scenario__Card}>
                            <h2>{scenarioData?.storyName}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: scenarioData?.storyDescription,
                                }}
                            />

                            <Image className={styles.Scenario__Haint}
                                src={`/${scenarioData.haintImg}`}
                                width={370}
                                height={530}
                                alt="Vagrantsong"
                            />
                            <br />
                            <br />
                            {scenarioData?.events.map((event, index) => (
                                <Collapsible
                                    description={event?.description}
                                    title={event?.title}
                                    key={index}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

Scenarios.propTypes = {
    params: PropTypes.object,
};
