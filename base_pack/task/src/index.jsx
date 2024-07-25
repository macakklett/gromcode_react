import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const showSeconds = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const el = (
    <>
      <div className="seconds" style={styles}>
        {seconds}
      </div>
    </>
  );
  ReactDOM.render(el, rootElement);
};

const intervalId = setInterval(() => {
  showSeconds(new Date());
}, 1000);
