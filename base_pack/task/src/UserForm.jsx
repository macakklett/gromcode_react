import React, { Component } from 'react';

export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    };
  }

  onChangeHandler = e => {
    const { name, value, checked, type } = e.target;
    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };

  render() {
    const { name, student, occupation, about } = this.state;

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            onChange={this.onChangeHandler}
            type="text"
            id="name"
            name="name"
            value={name}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            onChange={this.onChangeHandler}
            checked={student}
            type="checkbox"
            id="student"
            name="student"
          />
        </div>

        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            onChange={this.onChangeHandler}
            value={occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            onChange={this.onChangeHandler}
            value={about}
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
