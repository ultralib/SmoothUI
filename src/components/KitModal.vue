<script setup lang="ts">
defineEmits<{
	(event: 'close'): void;
	(event: 'submit'): void;
}>();
</script>

<template>
	<div class="smooth-modal__container" @click.self="$emit('close')">
		<form
			class="smooth-modal"
			role="dialog"
			@submit.prevent="$emit('submit')"
		>
			<button
				class="smooth-modal__close"
				role="button"
				type="button"
				@click="$emit('close')"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 25 25"
					fill="none"
				>
					<path
						d="M18.1138 6.98877L6.11377 18.9888"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.11377 6.98877L18.1138 18.9888"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<slot />
		</form>
	</div>
</template>

<style lang="scss">
.smooth-modal {
	width: 100%;
	max-width: 580px;
	min-height: 180px;
	height: max-content;

	padding: 40px 32px;

	display: flex;
	flex-direction: column;

	overflow: hidden;

	position: relative;

	background: var(--color-basic);

	border: 1px solid var(--color-border);
	border-radius: 24px;

	@media screen and (min-width: 768px) {
		padding: 60px 80px;

		border-radius: 16px;
	}

	&__close {
		width: 42px;
		height: 42px;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: 12px;
		right: 16px;

		background: transparent;

		cursor: pointer;

		outline: none;
		border: none;
		border-radius: 8px;

		color: var(--color-light-title);

		transition: 0.2s ease-in-out background;

		&:hover {
			background: var(--color-darker);
		}

		@media screen and (min-width: 768px) {
			top: 20px;
			right: 24px;
		}
	}

	& > .smooth-title {
		/* To avoid overlap of title with close button */
		padding-right: 40px;

		color: var(--color-light-title);
		font-size: 20px;
		font-weight: 460;
	}

	&__container {
		padding: 12px;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		overflow: scroll;

		background-color: var(--color-basic-popover);
		backdrop-filter: blur(3px);

		z-index: 1000;
	}
}
</style>
