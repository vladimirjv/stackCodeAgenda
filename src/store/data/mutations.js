/* jshint esversion:6 */
import * as types from './types';
export const mutations = {
  [types.MUTATE_CONTACTOS]: (state, payload) => {
    state.contactos = payload;
  }
};
