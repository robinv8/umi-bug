import { dynamic } from 'umi';
export default dynamic({
  loader: async function() {
    const { default: Index } = await import('./component1');
    return Index;
  },
});
