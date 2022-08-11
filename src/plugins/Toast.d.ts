declare interface Toast {
	id?: Number
	type?: String
	title?: String
	message: String
	closeable?: Boolean
	timer?: Number
}

declare const Toast = {
	notifications: array<Toast>,
	notify(options: Toast): void {},
	success(options: Toast): void {},
	warn(options: Toast): void {},
	alert(options: Toast): void {},
	info(options: Toast): void {},
}

export { Toast }
