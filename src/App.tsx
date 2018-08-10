import * as React from 'react'
import State from './AppState'
import { observer } from 'mobx-react'

@observer
export default class App extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div>

			</div>
		)
	}
}