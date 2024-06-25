/* eslint-disable react/prop-types */
'use client';
import React, { useState } from 'react';
import styles from './component.module.css';
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';
import data from '/src/app/data/player-aid.json';

const PlayerAid = (props) => {
  const { playerAidOpen = false, setPlayerAidOpen } = props;
  const { playerAid } = data;

  const [activeAid, setActiveAid] = useState(playerAid[0].title);

  return (
    playerAidOpen && (
      <div className={styles.PlayerAid}>
        <div className={styles.PlayerAid__ModalContent}>
          <div className={styles.PlayerAid__ModalHeader}>
            <h2>Player Aid</h2>
          </div>
          <div className={styles.PlayerAid__SelectorContainer}>
            <IoMdClose
              className={styles.PlayerAid__Close}
              onClick={() => setPlayerAidOpen(false)}
            />
            {playerAid &&
              playerAid.map((aid, key) => (
                <button
                  type="button"
                  key={'aidButton-' + key}
                  className={clsx({
                    [styles.PlayerAid__Selector]: true,
                    [styles.PlayerAid__SelectorActive]: aid.title === activeAid,
                  })}
                  onClick={() => setActiveAid(aid.title)}
                >
                  {aid.title}
                </button>
              ))}
          </div>
          <div className={styles.PlayerAid__Content}>
            {playerAid &&
              playerAid.map((aid, key) => {
                return (
                  activeAid === aid.title && (
                    <ol key={'aidSteps-' + key}>
                      {aid.steps.map((step, key) => {
                        const { step: text, substeps } = step;
                        return (
                          <li key={'aidStep-' + key}>
                            <b>{text}</b>
                            {substeps && (
                              <ul>
                                {substeps?.map((substep, key) => (
                                  <li key={'substep-' + key}>{substep}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  )
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};
export default PlayerAid;
