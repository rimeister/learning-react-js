import React from 'react'
import Board from './Board'

class Container extends React.Component {
	render() {
		return (<div id="react-container">
			<Board count={5} />
		</div>)
	}

}

export default Container
