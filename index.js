import Button from './src/components/Button/index.vue'
import Checkbox from './src/components/Checkbox/index.vue'
import Icon from './src/components/Icon/index.vue'
import Pagination from './src/components/Pagination/index.vue'
import Spinner from './src/components/Spinner/index.vue'
import Table from './src/components/Table/index.vue'
import Select from './src/components/Select/index.vue'

export const RegisterComponents = vueInstance => {
	vueInstance
		.component('Button', Button)
		.component('Checkbox', Checkbox)
		.component('Icon', Icon)
		.component('Pagination', Pagination)
		.component('Spinner', Spinner)
		.component('Table', Table)
		.component('Select', Select)
}

export { Button, Checkbox, Icon, Pagination, Spinner, Table, Select }
