/*jshint esversion:6*/
import * as types from './types';
export const actions = {
  [types.UPDATE_CONTACTOS]: ({ commit }, payload) => {
    commit(types.MUTATE_CONTACTOS, payload);
  },
};
