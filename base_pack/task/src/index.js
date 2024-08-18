import store from './store';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';

store.dispatch(setLanguage('jp'));
store.dispatch(setUser({ id: 1, name: 'Tom' }));
store.dispatch(setUser({ id: 2, name: 'Ignat' }));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(addProduct({ id: 3, name: 'coffee' }));
store.dispatch(removeProduct(1));

console.log(store.getState());
