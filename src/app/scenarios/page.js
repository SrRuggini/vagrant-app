import React from 'react';
import Link from 'next/link';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/scenarios.module.css';
import { importJsonByName } from '/src/app/utils/importJson';

export default async function Scenario() {
  const { scenarios } = await importJsonByName('scenarios', '');

  return (
    <>
      <Header inner={true} />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.PageTitle}>Cenários</h1>

          <div className="content-wrap">
            {scenarios.map((scenario, index) => {
              const { name, page } = scenario;

              const slug = name
                .toLowerCase()
                .replace(/['".,]/g, '')
                .replace(/\s+/g, '-')
                .replace(/['&,]/g, 'and')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
              return (
                <div
                  className={styles.Scenario__Item}
                  key={`scenario-${index}`}
                >
                  <Link
                    className={styles.Scenario__Link}
                    href={`/scenarios/${slug}`}
                  >
                    <span className={styles.Scenario__Title}>{name}</span>
                    <span className={styles.Scenario__Subtitle}>{page}</span>
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
