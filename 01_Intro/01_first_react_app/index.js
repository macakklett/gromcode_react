const rootElement = document.querySelector('#root');

const el = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(el, rootElement);
