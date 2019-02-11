/* jshint esversion:6 */
import * as types from './types';
export const mutations = {
  [types.MUTATE_FRECUENCIA]: (state, payload) => {
    state.contactos = payload;
  }
};
