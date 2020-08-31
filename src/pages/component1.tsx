import React, { useImperativeHandle } from 'react';

const Index = (_1, ref) => {
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return 'umi';
    },
  }));
  return <div>组件</div>;
};

export default React.forwardRef(Index);
