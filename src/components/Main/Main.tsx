import * as React from 'react';
import styles from './Main.module.scss';

interface IMainProps {
  /**
   * Prop Description
   */
  message?: string;
}

/**
 * Component Description
 */
function Main(props: IMainProps) {
  return (
    <div className={styles.root}>
      <h1>Main</h1>
    </div>
  );
}

export default Main;
