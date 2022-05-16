import { isEmail, isMobilePhone } from 'validator'
import {
	test,
	create,
	each,
	only,
	skip,
	warn,
	group,
	optional,
	skipWhen,
	omitWhen,
	enforce,
	context,
	include,
	eager,
} from 'vest'

enforce.extend({ isEmail, isMobilePhone })

export const Validation = {
	test,
	create,
	each,
	only,
	skip,
	warn,
	group,
	optional,
	skipWhen,
	omitWhen,
	enforce,
	context,
	include,
	eager,
}

export {
	test,
	create,
	each,
	only,
	skip,
	warn,
	group,
	optional,
	skipWhen,
	omitWhen,
	enforce,
	context,
	include,
	eager,
}
