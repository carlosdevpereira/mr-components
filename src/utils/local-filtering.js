export default {
	filter(rows, filters) {
		if (filters.length > 0) {
			// filter results
			return rows.filter(row => {
				let isValid = true

				for (let index = 0; index < filters.length; index++) {
					const filter = filters[index]

					if (!filter.value) continue

					if (filter.operator.key === 'eq') {
						isValid = row[filter.column.key] === filter.value
					} else if (filter.operator.key === 'df') {
						isValid = row[filter.column.key] !== filter.value
					} else if (filter.operator.key === 'ut') {
						isValid = row[filter.column.key] > filter.value
					} else if (filter.operator.key === 'lt') {
						isValid = row[filter.column.key] < filter.value
					} else if (filter.operator.key === 'uet') {
						isValid = row[filter.column.key] >= filter.value
					} else if (filter.operator.key === 'let') {
						isValid = row[filter.column.key] <= filter.value
					} else if (filter.operator.key === 'contains') {
						isValid = row[filter.column.key].includes(filter.value)
					} else if (filter.operator.key === 'icontains') {
						isValid = row[filter.column.key]
							.toUpperCase()
							.includes(filter.value.toUpperCase())
					} else if (filter.operator.key === 'starts') {
						isValid = row[filter.column.key].startsWith(filter.value)
					} else if (filter.operator.key === 'istarts') {
						isValid = row[filter.column.key]
							.toUpperCase()
							.startsWith(filter.value.toUpperCase())
					} else if (filter.operator.key === 'ends') {
						isValid = row[filter.column.key].endsWith(filter.value)
					} else if (filter.operator.key === 'iends') {
						isValid = row[filter.column.key]
							.toUpperCase()
							.endsWith(filter.value.toUpperCase())
					}

					if (isValid === false) break
				}

				return isValid
			})
		}

		return rows
	},
}
