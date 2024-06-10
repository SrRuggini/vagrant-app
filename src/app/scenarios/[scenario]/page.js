import React from 'react';
import styles from '/src/app/styles/page.module.css';
import PropTypes from 'prop-types';

export default function Scenarios({ params }) {
    console.log(params.scenario);

    console.log();

    // const getResources = (scenario) => {
    //     const url = '/api/get_scenario';

    //     fetch(url).then(response => {
    //         if(response.ok){
    //             response.json().then(data => {
    //                 setOpenedDices(data);
    //                 setCookie(null, 'DICES_COOKIES', JSON.stringify(data), {
    //                     path: '/',
    //                     maxAge: 3600
    //                 });
    //             });
    //         }
    //     });
    // };

    return (
        <main className={styles.main}>
            {params.scenario}
        </main>
    );
}



Scenarios.propTypes = {
    params: PropTypes.object,
};

