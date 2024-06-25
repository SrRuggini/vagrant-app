/* eslint-disable react/prop-types */
'use client';
import React from 'react';
import Link from 'next/link';
import styles from './component.module.css';
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';
import { FaChevronRight } from 'react-icons/fa';
import data from '/src/app/data/navigation.json';

const Navigator = (props) => {
  const { navigatorOpen = false, setNavigatorOpen } = props;
  const { navigation = [] } = data;

  return (
    <nav
      className={clsx({
        [styles.Navigator]: true,
        [styles.Navigator__Active]: navigatorOpen,
      })}
    >
      <div className={styles.Navigator__Content}>
        <div>
          <IoMdClose className={styles.Navigator__Close} onClick={() => setNavigatorOpen(false)} />
        </div>
        <ul>
          {navigation.map((menu) => (
            <li key={menu.title}>
              <Link href={menu.url}>
                <span className={styles.Section__Title}>{menu.title}</span>
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navigator;
