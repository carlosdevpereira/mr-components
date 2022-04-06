import 'remixicon/fonts/remixicon.css'
import Button from './src/components/Button/index.vue'
import Checkbox from './src/components/Checkbox/index.vue'
import Icon from './src/components/Icon/index.vue'
import Input from './src/components/Input/index.vue'
import Pagination from './src/components/Pagination/index.vue'
import Spinner from './src/components/Spinner/index.vue'
import Table from './src/components/Table/index.vue'
import Select from './src/components/Select/index.vue'

export default vueInstance => {
	vueInstance
		.component('Button', Button)
		.component('Checkbox', Checkbox)
		.component('Icon', Icon)
		.component('Input', Input)
		.component('Pagination', Pagination)
		.component('Spinner', Spinner)
		.component('Table', Table)
		.component('Select', Select)
}

export { Button, Checkbox, Icon, Input, Pagination, Spinner, Table, Select }
