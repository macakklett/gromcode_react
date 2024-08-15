import { store, decrement, increment, reset } from './store';
import './index.scss';

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const resetButton = document.querySelector('[data-action="reset"]');
const counterResult = document.querySelector('.counter__result');

const onDecrement = () => store.dispatch(decrement());
const onIncrement = () => store.dispatch(increment());
const onReset = () => store.dispatch(reset());

decrementButton.addEventListener('click', onDecrement);
incrementButton.addEventListener('click', onIncrement);
resetButton.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const history = state.join('');
  const result = state.reduce((acc, el) => acc + Number(el), 0);
  counterResult.textContent = state.length > 0 ? `${history} = ${result}` : '';
});
