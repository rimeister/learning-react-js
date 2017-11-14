import React from 'react'
import Board from './Board'

class Container extends React.Component {
	render() {
		return (
			<Container id="react-container">
				<Board count={50} />
			</Container>
		)
	}

}

export default Container
