<script setup lang="ts">
import KitButton from './KitButton.vue';

defineProps<{
	oneField: boolean;
}>();
defineEmits<{
	(event: 'remove'): void;
}>();
</script>

<template>
	<div class="smooth-list-item" :data-one-field="oneField">
		<slot />

		<KitButton
			v-if="!oneField"
			class="smooth-list-item__remove"
			color="danger"
			size="sm"
			type="button"
			@click="$emit('remove')"
		>
			Удалить
		</KitButton>
		<button
			v-else
			class="smooth-list-item__remove"
			role="button"
			type="button"
			@click="$emit('remove')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
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
	</div>
</template>

<style scoped lang="scss">
.smooth-list-item {
	padding: 8px;

	display: flex;
	flex-wrap: wrap;

	border: 1px solid var(--color-border);
	border-radius: 8px;

	&[data-one-field='true'] {
		padding: 0;

		border: none;
		border-radius: 0;

		position: relative;

		&:deep(.smooth-field) {
			width: 100%;
		}

		& > .smooth-list-item__remove {
			width: 28px;
			height: 28px;

			margin-top: 0;

			display: flex;
			align-items: center;
			justify-content: center;

			position: absolute;
			top: 50%;
			right: 8px;
			transform: translateY(-50%);

			cursor: pointer;

			background: transparent;

			outline: none;
			border: none;
			border-radius: 6px;

			transition: 0.2s ease-in-out;
			transition-property: background, color;

			&:hover {
				background-color: var(--color-danger);
				color: var(--color-danger-text);
			}
		}
	}

	&[data-one-field='false'] {
		&:deep(.smooth-field) {
			width: calc(50% - 2px);
			margin-right: 4px;

			&:last-of-type {
				margin-right: 0;
			}
		}
	}

	& + .smooth-list-item {
		margin-top: 8px;
	}

	& > .smooth-button {
		width: 100%;
		margin-top: 8px;
	}
}
</style>
