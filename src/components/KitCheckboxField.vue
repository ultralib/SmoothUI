<script setup lang="ts">
defineProps<{
	label: string;
	name: string;
	required?: boolean;
}>();
</script>
<template>
	<label class="smooth-checkbox__container" :for="name">
		<input
			v-bind="$attrs"
			type="checkbox"
			:name="name"
			:required="required"
			class="smooth-checkbox"
		/>
		<span class="smooth-checkbox__text">
			{{ label }}
		</span>
	</label>
</template>

<style lang="scss">
.smooth-checkbox {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	cursor: pointer;
	pointer-events: all;
	appearance: none;
	z-index: 50;

	&__container {
		display: flex;
		align-items: center;

		font-size: 14px;

		color: var(--color-light-title);

		cursor: pointer;
		user-select: none;

		position: relative;

		.smooth-checkbox {
			margin-right: 12px;
		}
	}
	&__text {
		padding-left: 28px;

		line-height: 1.1;

		z-index: 25;
	}

	&::after {
		content: '';

		width: 18px;
		height: 18px;

		position: absolute;
		top: 0;
		left: 0;

		visibility: visible;

		display: block;

		background: var(--color-basic);

		border: 2px solid var(--color-border);

		border-radius: 4px;

		transition: 0.25s ease-in-out background;
	}
	&:checked::after {
		background: var(--color-primary);
		border-color: var(--color-primary);

		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: center;
	}
}
</style>
