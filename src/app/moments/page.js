import React from 'react';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/moments.module.css';
import { importJsonByName } from '/src/app/utils/importJson';
import Event from '/src/app/components/event';

export default async function Moments() {
  const data = await importJsonByName('moments', '');

  return (
    <>
      <Header inner={true} />
      <main className={styles.Moments}>
        <div className="container">
          <h1 className={styles.PageTitle}>Momentos</h1>
          <div className="content-wrap">
            <div className={styles.Moments__Card}>
              {data?.moments?.map((moment, index) => {
                const { title, text } = moment;
                return (
                  <div
                    className={styles.Moments__Item}
                    key={`scenario-${index}`}
                  >
                    <Event description={text} title={title} key={index} />
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

