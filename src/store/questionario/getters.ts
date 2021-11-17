import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionarioStateInterface } from './state';

const getters: GetterTree<QuestionarioStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
