'use client';

import React, { useState, useEffect } from 'react';
import { importJsonByName } from '/src/app/utils/importJson';
import Collapsible from '/src/app/components/collapsible';
import Header from '/src/app/components/header';
import Image from 'next/image';

import PropTypes from 'prop-types';
import styles from '/src/app/styles/scenario.module.css';

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
        <>
            <Header inner={true} backTo={'/scenarios'} />
            <main className={styles.main}>
                <div className="container">
                    {scenarioData && (
                        <>
                            <h4 className={styles.Scenario__SubTitle}>pag. {scenarioData.key}</h4>
                            <h1 className={styles.Scenario__Title}>{scenarioData.title}</h1>

                            <div className={styles.Scenario__Card}>
                                {scenarioData?.story && (
                                    <>
                                        <h2>{scenarioData.story.title}</h2>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: scenarioData.story.description,
                                            }}
                                        />
                                        {scenarioData.story?.image && (
                                            <Image
                                                className={styles.Scenario__Haint}
                                                src={`/haints/${scenarioData.story.image}`}
                                                width={450}
                                                height={645}
                                                alt="Vagrantsong"
                                            />
                                        )}
                                    </>
                                )}                             

                                {scenarioData?.rules &&
                                    scenarioData?.rules?.map((rule, index) => (
                                        <div key={index}>
                                            <br />
                                            {Object.keys(rule).map((key) => (
                                                <>
                                                    <h4>{adjustTitle(key)}</h4>
                                                    <div
                                                        key={key}
                                                        dangerouslySetInnerHTML={{ __html: rule[key] }}
                                                    />
                                                </>
                                            ))}
                                            <br />
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
        </>
    );
}

Scenarios.propTypes = {
    params: PropTypes.object,
};
