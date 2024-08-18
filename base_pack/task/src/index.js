import store from './store';
import { addUser, deleteUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';
import './index.scss';

const input = document.querySelector('.input');
const addButton = document.querySelector('.add');
const list = document.querySelector('.users-list');

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

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const onAddButton = e => {
  if (input.value === '') return null;

  const user = {
    id: generateId(),
    name: input.value.trim(),
  };

  store.dispatch(addUser(user));
  input.value = '';
};

const handleUsersList = e => {
  const id = e.target.closest('.list__item').dataset.id;
  store.dispatch(deleteUser(id));
};

addButton.addEventListener('click', onAddButton);
list.addEventListener('click', handleUsersList);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  list.innerHTML = '';
  state.users.usersList.forEach(user => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    listItem.setAttribute('data-id', user.id);
    listItem.innerHTML = `${user.name} <button>Delete</button>`;
    list.appendChild(listItem);
  });

  const history = state.counter.join('');
  const result = state.counter.reduce((acc, el) => acc + Number(el), 0);
  counterResult.textContent = state.counter.length > 0 ? `${history} = ${result}` : '';
});
