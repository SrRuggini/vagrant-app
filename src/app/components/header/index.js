/* eslint-disable react/prop-types */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import clsx from 'clsx';

import Navigator from './components/navigator';
import PlayerAid from '/src/app/components/player-aid';
import { GiNotebook, GiHamburgerMenu } from 'react-icons/gi';

const Header = (props) => {
  const { inner } = props;

  const [hasScrolled, setHasScrolled] = useState(false);
  const [navigatorOpen, setNavigatorOpen] = useState(false);
  const [playerAidOpen, setPlayerAidOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx({
          [styles.Header]: true,
          [styles.Header__Fixed]: inner && hasScrolled,
        })}
      >
        <div className={styles.Header__Container}>
          {inner && (
            <GiHamburgerMenu 
              onClick={() => setNavigatorOpen(true)}
              className={styles.Header__MenuButton}
            />
          )}
          <Link href={'/'}>
            <Image
              src="/logotipo.svg"
              width={180}
              height={40}
              alt="Vagrantsong"
            />
          </Link>
          {inner && (
            <div className={styles.Header__BackButton}>
              <GiNotebook onClick={() => setPlayerAidOpen(true)} />
            </div>
          )}
        </div>
        <Navigator
          navigatorOpen={navigatorOpen}
          setNavigatorOpen={setNavigatorOpen}
        />
      </header>
      <PlayerAid
        playerAidOpen={playerAidOpen}
        setPlayerAidOpen={setPlayerAidOpen}
      />
    </>
  );
};
export default Header;
