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
        const data = await importJsonByName('scenario-' + name);
        setScenarioData(data);
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

                            {scenarioData.haintImg && (
                                <Image
                                    className={styles.Scenario__Haint}
                                    src={`/${scenarioData.haintImg}`}
                                    width={370}
                                    height={530}
                                    alt="Vagrantsong"
                                />
                            )}

                            {scenarioData?.specialRules && (
                                <>
                                    <br />
                                    <h4>Regras Especiais</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.specialRules,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

                            {scenarioData?.terrainEffects && (
                                <>
                                    <br />
                                    <h4>Efeitos de Terrenos</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.terrainEffects,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

                            {scenarioData?.haintEffects && (
                                <>
                                    <br />
                                    <h4>Efeitos dos Haints</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.haintEffects,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

                            {scenarioData?.breaks && (
                                <>
                                    <br />
                                    <h4>Breaks</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.breaks,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

                            {scenarioData?.seanse && (
                                <>
                                    <br />
                                    <h4>Seanse</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.seanse,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

                            {scenarioData?.victory && (
                                <>
                                    <br />
                                    <h4>Vitória</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: scenarioData.victory,
                                        }}
                                    />
                                    <br />
                                </>
                            )}

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
