/* jshint esversion:6 */
import * as types from './types';
export const getters = {
  [types.CONTACTOS]: (state) => {
    return state.contactos;
  }
};
