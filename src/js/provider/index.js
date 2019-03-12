import UserProvider from './src/user.js'
import UtilsProvider from './src/utils.js'

let instance = null
export default class Provider {
	constructor () {
		if (!instance) {
            Vue.use(new UserProvider())
            Vue.use(new UtilsProvider())
			instance = this
		}
        return instance
	}
}
