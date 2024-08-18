import { store, decrement, increment } from './store';
import './index.scss';

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const resetButton = document.querySelector('[data-action="reset"]');
const counterResult = document.querySelector('.counter__result');

const onDecrement = () => store.dispatch(decrement());
const onIncrement = () => store.dispatch(increment());

decrementButton.addEventListener('click', onDecrement);
incrementButton.addEventListener('click', onIncrement);

store.subscribe(() => {
  const state = store.getState();
  counterResult.textContent = state;
});
