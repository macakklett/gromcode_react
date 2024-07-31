import React, { Component } from 'react';

export class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('online', this.setStatusOnline);
    window.addEventListener('offline', this.setStatusOffline);
  };

  componentWillUnmount = () => {
    window.removeEventListener('online', this.setStatusOnline);
    window.removeEventListener('offline', this.setStatusOffline);
  };

  setStatusOnline = () => this.setState({ online: true });
  setStatusOffline = () => this.setState({ online: false });

  render() {
    const classList = this.state.online ? 'status' : 'status status_offline';
    return <div className={classList}>{this.state.online ? 'Online' : 'Offline'}</div>;
  }
}

export default ConnectionStatus;
