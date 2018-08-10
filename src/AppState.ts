import { observable } from 'mobx';

class AppState {
	constructor () {
		
	}
}
let state = new AppState();

(window as any).state = state;
export default state;