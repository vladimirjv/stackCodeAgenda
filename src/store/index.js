/*jshint esversion:6 */
import Vue from 'vue';
import Vuex from 'vuex';

import example from './module-example';
import data from './data/index';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      example,
      data
    }
  });

  return Store;
}
