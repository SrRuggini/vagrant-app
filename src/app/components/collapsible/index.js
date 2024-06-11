'use client';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './collapsible.module.css';

const Collapsible = ({ description, title }) => {
    return (
        <div className={styles.Event__Item}>
            <h3 className={styles.Event__Title}>{title}</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </div>
    );
};

Collapsible.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string
};

export default Collapsible;
