'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './collapsible.module.css';
import { IoMdClose } from 'react-icons/io';

const Collapsible = ({ description, title }) => {
    const [modalOpen, setModalOpen] = useState();

    const toggleModalOpen = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className={styles.Event__Item}>
            <button
                type='button'
                onClick={() => toggleModalOpen()}
                className={styles.Event__Button}
            >
                {title}
            </button>
            {modalOpen && (
                <div className={styles.Event__Modal}>
                    <div className={styles.Event__ModalContent}>
                        <h3 className={styles.Event__Title}>{title}</h3>
                        <button
                            onClick={() => toggleModalOpen()}
                            type="button"
                            className={styles.Event__ModalCloseIcon}
                        >
                            <IoMdClose />
                        </button>
                        <div
                            className={styles.Event__Description}
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        />
                        <button
                            onClick={() => toggleModalOpen()}
                            type="button"
                            className={styles.Event__ModalCloseButton}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Collapsible.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export default Collapsible;
