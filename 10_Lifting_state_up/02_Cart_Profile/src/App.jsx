import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

export class App extends Component {
  state = {
    firstName: 'Tom',
    lastName: 'Crouse',
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="page">
        <h1 className="title">
          Hello, {firstName} {lastName}
        </h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}

export default App;
