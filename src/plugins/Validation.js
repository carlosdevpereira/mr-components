import isEmail from 'validator/es/lib/isEmail'
import isMobilePhone from 'validator/es/lib/isMobilePhone'
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
