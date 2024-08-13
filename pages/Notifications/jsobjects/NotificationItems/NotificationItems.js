export default {
	myVar1: [],
	myVar2: {},
	list () {
		const notifications = NotificationsModule.fetchAllNotifications.data
		const identities = NotificationsModule.getAllCustomersAndAgents.data

		return (notifications.data || []).map((n) => {
			const identity = identities.all.find((i) => i.email === n.recipient)
			return {
				...n,
				name: identity?.name
			}
		})
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 (a, b, c) {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}