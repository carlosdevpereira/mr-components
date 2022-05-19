import 'uno.css'
import './src/assets/scss/global.scss'
// Exportable plugins
import { Toast as ToastPlugin } from './src/plugins/Toast'
import { Dialog as DialogPlugin } from './src/plugins/Dialog'
import { Validation as ValidationPlugin } from './src/plugins/Validation'
// Exportable component
import Autocomplete from './src/components/Autocomplete/index.vue'
import Button from './src/components/Button/index.vue'
import Checkbox from './src/components/Checkbox/index.vue'
import Dialog from './src/components/Dialog/index.vue'
import Dropdown from './src/components/Dropdown/index.vue'
import Icon from './src/components/Icon/index.vue'
import Input from './src/components/Input/index.vue'
import Message from './src/components/Message/index.vue'
import Modal from './src/components/Modal/index.vue'
import Pagination from './src/components/Pagination/index.vue'
import RadioButton from './src/components/RadioButton/index.vue'
import Select from './src/components/Select/index.vue'
import Spinner from './src/components/Spinner/index.vue'
import Table from './src/components/Table/index.vue'
import Textarea from './src/components/Textarea/index.vue'
import Toast from './src/components/Toast/index.vue'
// Exportable layouts
import HeaderLayout from './src/layouts/HeaderLayout.vue'
import HeaderLayoutWithSidebar from './src/layouts/HeaderLayoutWithSidebar.vue'
import LoginLayout from './src/layouts/LoginLayout.vue'
import MaintenanceLayout from './src/layouts/MaintenanceLayout.vue'
import NotFoundLayout from './src/layouts/NotFoundLayout.vue'
import PasswordRecoveryLayout from './src/layouts/PasswordRecoveryLayout.vue'
import PasswordResetLayout from './src/layouts/PasswordResetLayout.vue'
import RegistrationLayout from './src/layouts/RegistrationLayout.vue'
import SidebarLayout from './src/layouts/SidebarLayout.vue'
import SidebarLayoutWithHeader from './src/layouts/SidebarLayoutWithHeader.vue'
import SplitLayout from './src/layouts/SplitLayout.vue'

export default Vue => {
	Vue.config.globalProperties.$toast = ToastPlugin
	Vue.config.globalProperties.$dialog = DialogPlugin
	Vue.config.globalProperties.$validation = ValidationPlugin

	Vue.component('Autocomplete', Autocomplete)
		.component('Button', Button)
		.component('Checkbox', Checkbox)
		.component('Dialog', Dialog)
		.component('Dropdown', Dropdown)
		.component('Icon', Icon)
		.component('Input', Input)
		.component('Message', Message)
		.component('Modal', Modal)
		.component('Pagination', Pagination)
		.component('RadioButton', RadioButton)
		.component('Select', Select)
		.component('Spinner', Spinner)
		.component('Table', Table)
		.component('Textarea', Textarea)
		.component('Toast', Toast)
}

export {
	// Plugins
	ToastPlugin,
	DialogPlugin,
	ValidationPlugin,
	// Components
	Autocomplete,
	Button,
	Checkbox,
	Dropdown,
	Icon,
	Input,
	Message,
	Modal,
	Pagination,
	RadioButton,
	Select,
	Spinner,
	Table,
	Textarea,
	Toast,
	// Layouts
	HeaderLayout,
	HeaderLayoutWithSidebar,
	LoginLayout,
	MaintenanceLayout,
	NotFoundLayout,
	PasswordRecoveryLayout,
	PasswordResetLayout,
	RegistrationLayout,
	SidebarLayout,
	SidebarLayoutWithHeader,
	SplitLayout,
}
