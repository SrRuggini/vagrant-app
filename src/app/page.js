import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/src/app/styles/home.module.css';
import data from '/src/app/data/navigation.json';

export default function Home() {
  const { navigation = [] } = data;

  return (
    <>
      <main>
        <div className="container">
          <div className={styles.Home}>
            <div className="Logo">
              <Link href={'/'}>
                <Image
                  src="/logotipo.svg"
                  width={300}
                  height={66}
                  alt="Vagrantsong"
                />
              </Link>
            </div>
            <Image
              className={styles.Home__Cat}
              src="/cat.png"
              width={320}
              height={190}
              alt="Vagrantsong"
            />
            <ul className={styles.Home__Card}>
              {navigation.map((menu) => (
                <li key={menu.title}>
                  <Link href={menu.url}>
                    <span>{menu.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
