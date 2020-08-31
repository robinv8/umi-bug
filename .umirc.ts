/*
 * @Description:
 * @Date: 2020-08-31 14:01:20
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-08-31 14:19:02
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  dynamicImport: {
    loading: '@/Loading',
  },
});
