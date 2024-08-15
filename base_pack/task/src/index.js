import { store, decrement, increment, reset } from './store';
import './index.scss';

const counterActions = document.querySelector('.counter__actions');
const counterResult = document.querySelector('.counter__result');

const handleActions = e => {
  switch (e.target.closest('.counter__button').dataset.action) {
    case 'decrement':
      store.dispatch(decrement());
      return;

    case 'increment':
      store.dispatch(increment());
      return;

    case 'reset':
      store.dispatch(reset());
      return;

    default:
      return null;
  }
};

store.subscribe(() => {
  const state = store.getState();
  const history = state.join('');
  const result = state.reduce((acc, el) => acc + Number(el), 0);
  counterResult.textContent = state.length > 0 ? `${history} = ${result}` : '';
});

counterActions.addEventListener('click', handleActions);
