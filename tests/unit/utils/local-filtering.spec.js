import localFiltering from '../../../src/utils/local-filtering'

let testRowsArray = [
	{ id: 1, name: 'Test01' },
	{ id: 2, name: 'Test02' },
	{ id: 3, name: 'Test03' },
]

describe('Local Filtering', () => {
	it('exports the filter function', () => {
		expect(localFiltering.filter).toBeTruthy()
		expect(typeof localFiltering.filter).toBe('function')
	})

	describe('when function receives empty, invalid or unset `rows` argument', () => {
		it('returns the initial rows array when function receives empty filters argument', () => {
			let result = localFiltering.filter([])
			expect(result).toStrictEqual([])
		})

		it('returns the initial rows array when function receives null filters argument', () => {
			let result = localFiltering.filter(null)
			expect(result).toStrictEqual(null)
		})

		it('returns the initial rows array when function does not receive filters argument', () => {
			let result = localFiltering.filter()
			expect(result).toStrictEqual([])
		})
	})

	describe('when function receives empty, invalid or unset `filters` argument', () => {
		it('returns the initial rows array when function receives empty filters argument', () => {
			let result = localFiltering.filter(testRowsArray, [])
			expect(result).toBe(testRowsArray)
		})

		it('returns the initial rows array when function receives null filters argument', () => {
			let result = localFiltering.filter(testRowsArray, null)
			expect(result).toBe(testRowsArray)
		})

		it('returns the initial rows array when function does not receive filters argument', () => {
			let result = localFiltering.filter(testRowsArray)
			expect(result).toBe(testRowsArray)
		})
	})

	describe('when function receives valid `rows` and `filters` arguments', () => {
		it('filters results with `eq` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'eq' },
					value: 'Test01',
				},
			])

			expect(results.length).toBe(1)
			expect(results[0]).toBe(testRowsArray[0])
		})

		it('filters results with `df` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'df' },
					value: 'Test01',
				},
			])

			expect(results.length).toBe(2)
			expect(results[0]).toBe(testRowsArray[1])
			expect(results[1]).toBe(testRowsArray[2])
		})

		it('filters results with `ut` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'id' },
					operator: { key: 'ut' },
					value: 1,
				},
			])

			expect(results.length).toBe(2)
			expect(results[0]).toBe(testRowsArray[1])
			expect(results[1]).toBe(testRowsArray[2])
		})

		it('filters results with `lt` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'id' },
					operator: { key: 'lt' },
					value: 3,
				},
			])

			expect(results.length).toBe(2)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
		})

		it('filters results with `uet` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'id' },
					operator: { key: 'uet' },
					value: 1,
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `let` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'id' },
					operator: { key: 'let' },
					value: 3,
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `contains` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'contains' },
					value: 'Test',
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `icontains` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'icontains' },
					value: 'test',
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `starts` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'starts' },
					value: 'Test',
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `istarts` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'istarts' },
					value: 'test',
				},
			])

			expect(results.length).toBe(3)
			expect(results[0]).toBe(testRowsArray[0])
			expect(results[1]).toBe(testRowsArray[1])
			expect(results[2]).toBe(testRowsArray[2])
		})

		it('filters results with `ends` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'ends' },
					value: 'Test03',
				},
			])

			expect(results.length).toBe(1)
			expect(results[0]).toBe(testRowsArray[2])
		})

		it('filters results with `iends` operator', () => {
			let results = localFiltering.filter(testRowsArray, [
				{
					column: { key: 'name' },
					operator: { key: 'iends' },
					value: 'test03',
				},
			])

			expect(results.length).toBe(1)
			expect(results[0]).toBe(testRowsArray[2])
		})
	})
})
