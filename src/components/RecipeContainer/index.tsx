import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface FlexContainerProps {
  children: ReactNode;
}

const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <div className={styles.flexWrap}>{children}</div>;
};

export default FlexContainer;
