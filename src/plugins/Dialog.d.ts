declare interface Dialog {
    id?: Number
    type?: String
    icon?: String
    title: String
    message: String
    cancelButtonLabel?: String
    confirmButtonLabel?: String
    onCancel?: Function
    onConfirm?: Function
}

declare const Dialog = {
    dialogs: Array<Dialog>,
    new(options: Dialog): void { },
    success(options: Dialog): void { },
    warning(options: Dialog): void { },
    danger(options: Dialog): void { },
    info(options: Dialog): void { },
}

export { Dialog }