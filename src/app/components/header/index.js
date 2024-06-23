/* eslint-disable react/prop-types */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './collapsible.module.css';
import clsx from 'clsx';

import { TbArrowBackUp, TbMenu2 } from 'react-icons/tb';

const Header = (props) => {
    const { inner, backTo = '/' } = props;

    const [hasScrolled, setHasScrolled] = useState(false);

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
        <header
            className={clsx({
                [styles.Header]: true,
                [styles.Header__Fixed]: inner && hasScrolled,
            })}
        >
            <div className={styles.Header__Container}>
                {inner && (
                    <Link className={styles.Header__MenuButton} href={backTo}>
                        <TbMenu2 />
                    </Link>
                )}
                <Link href={'/'}>
                    <Image
                        src="/logotipo.png"
                        width={265}
                        height={45}
                        alt="Vagrantsong"
                    />
                </Link>
                {inner && (
                    <Link className={styles.Header__BackButton} href={backTo}>
                        <TbArrowBackUp />
                    </Link>
                )}
            </div>
        </header>
    );
};
export default Header;
