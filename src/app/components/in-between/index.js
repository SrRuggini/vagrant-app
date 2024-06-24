'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './inBetween.module.css';
import { IoMdClose } from 'react-icons/io';

const InBetween = ({ data }) => {
    const { number, title, text, options = [] } = data;
    const [modalOpen, setModalOpen] = useState();

    const toggleModalOpen = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className={styles.InBetween__Item}>
            <button
                type="button"
                onClick={() => toggleModalOpen()}
                className={styles.InBetween__Button}
            >
                <span className={styles.InBetween__ButtonNumber}>{number}</span>
                <span className={styles.InBetween__ButtonTitle}>{title}</span>
            </button>
            {modalOpen && (
                <div className={styles.InBetween__Modal}>
                    <div className={styles.InBetween__ModalContent}>
                        <span className={styles.InBetween__Number}>{number}</span>
                        <h3 className={styles.InBetween__Title}>{title}</h3>
                        <button
                            onClick={() => toggleModalOpen()}
                            type="button"
                            className={styles.InBetween__ModalCloseIcon}
                        >
                            <IoMdClose />
                        </button>
                        <div className={styles.InBetween__Description}>
                            <div
                                
                                dangerouslySetInnerHTML={{
                                    __html: text,
                                }}
                            />
                            <br />
                            <br />
                            <ul>
                                {options.map((option, index) => (
                                    <li key={`option-${String.fromCharCode(65 + index)}`}>
                                        <span>{String.fromCharCode(65 + index)}</span>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

InBetween.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
};

export default InBetween;
