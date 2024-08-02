import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  onToggleText = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const iconClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.onToggleText}>
            <i className={iconClass}></i>
          </button>
        </div>
        {isOpen && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
