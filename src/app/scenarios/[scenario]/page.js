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
        const data = await importJsonByName(name, 'scenarios');
        setScenarioData(data);
    };

    const adjustTitle = (input) => {
        let result = input.replace(/([A-Z])/g, ' $1').trim();
        result = result.charAt(0).toUpperCase() + result.slice(1);
        return result;
    };

    useEffect(() => {
        if (params.scenario) {
            fetchScenarioData(params.scenario);
        }
    }, [params.scenario]);

    return (
        <main className={styles.main}>
            <div className="container">
                <div className="Logo">
                    <Link href={'/scenarios'}>
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
                        <h1 className={styles.Scenario__Title}>{scenarioData?.title}</h1>

                        <div className={styles.Scenario__Card}>
                            <h2>{scenarioData?.storyName}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: scenarioData?.storyDescription,
                                }}
                            />

                            {scenarioData.haintImg && (
                                <Image
                                    className={styles.Scenario__Haint}
                                    src={`/${scenarioData.haintImg}`}
                                    width={370}
                                    height={530}
                                    alt="Vagrantsong"
                                />
                            )}

                            {scenarioData?.rules && scenarioData?.rules?.map((rule, index) => (
                                <div key={index}>
                                    <br/>
                                    {Object.keys(rule).map((key) => (
                                        <>
                                            <h4>{adjustTitle(key)}</h4>
                                            <div key={key} dangerouslySetInnerHTML={{ __html: rule[key] }} />
                                        </>
                                    ))}
                                    <br/>
                                </div> 
                            ))}

                            <br />
                            <br />

                            {scenarioData?.events?.map((event, index) => (
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
