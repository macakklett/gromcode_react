import { store } from './store';
import { addUser, deleteUser } from './users.actions';
import './index.scss';

const input = document.querySelector('.input');
const addButton = document.querySelector('.add');
const list = document.querySelector('.users-list');

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
  list.innerHTML = '';
  state.usersList.forEach(user => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    listItem.setAttribute('data-id', user.id);
    listItem.innerHTML = `${user.name} <button>Delete</button>`;
    list.appendChild(listItem);
  });
});
