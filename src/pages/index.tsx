import React, { useRef } from 'react';
import styles from './index.less';
import Com1 from './dynamic';
import Com2 from './component1';

export default () => {
  const ref1 = useRef();
  const ref2 = useRef();

  const onClick = () => {
    console.log(ref1, ref2);
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Com1 ref={ref1}></Com1>
      <Com2 ref={ref2}></Com2>
      <button onClick={onClick}>确定</button>
    </div>
  );
};
