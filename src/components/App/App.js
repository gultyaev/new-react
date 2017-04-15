import React, { Component } from 'react';
import {Header} from '../UI';
import '../../libs/sass/materialize.scss';

class App extends Component {
  render() {
    return (
		<div>
			<Header/>
			<div className="container">
				{this.props.children}
			</div>
		</div>
    );
  }
}

export default App;
