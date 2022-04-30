<template>
	<Button
		label="Open modal"
		@click="$refs.modal.open()"
	/>

	<Modal
		ref="modal"
		v-bind="$attrs"
	>
		This modal can open another modal on top of it

		<Modal
			ref="innerModal"
			v-bind="$attrs"
		>
			This is the first inner modal. Try opening another one :P

			<Modal
				ref="innerModal2"
				v-bind="$attrs"
			>
				This is the second inner modal. Try opening another one :P

				<Modal
					ref="innerModal3"
					v-bind="$attrs"
				>
					This is the third inner modal. Try opening another one :P

					<Modal
						ref="innerModal4"
						title="Inner modal"
					>
						This is the forth inner modal. I'm tired. Bye :D
					</Modal>

					<template #footer>
						<Button
							label="Open modal"
							@click="$refs.innerModal4.open()"
						/>
					</template>
				</Modal>

				<template #footer>
					<Button
						label="Open modal"
						@click="$refs.innerModal3.open()"
					/>
				</template>
			</Modal>

			<template #footer>
				<Button
					label="Open modal"
					@click="$refs.innerModal2.open()"
				/>
			</template>
		</Modal>

		<template #footer>
			<Button
				label="Open modal"
				@click="$refs.innerModal.open()"
			/>
		</template>
	</Modal>
</template>