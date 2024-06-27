import React from 'react';
import Header from '/src/app/components/header';
import styles from '/src/app/styles/faq.module.css';
import faq from '/src/app/data/faq.json';

export default async function FAQ() {
  return (
    <>
      <Header inner={true} />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.PageTitle}>FAQ</h1>

          <div className="content-wrap">
            <div className={styles.Faq}>
              {Object.keys(faq).map((group) => (
                <div key={group} className={styles.Faq__Group}>
                  <h2>{group}</h2>
                  <div className={styles.Faq__GroupDescription}>
                    {faq[group].map((item) => (
                      <>
                        <p>
                          <b>{item.question}</b>
                        </p>
                        <p>{item.answer}</p>
                        <br />
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
