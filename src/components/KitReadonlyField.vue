<script setup lang="ts">
defineProps<{
	icon?: string;
	value: string;
}>();
</script>

<template>
	<div class="smooth-readonly-field">
		<img
			v-if="icon"
			:src="icon"
			:alt="value"
			class="smooth-readonly-field__icon"
		/>
		<slot v-else name="icon" />

		<p class="smooth-readonly-field__value">
			{{ value }}
		</p>
	</div>
</template>

<style lang="scss">
.smooth-readonly-field {
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	&__icon {
		width: 24px;
		height: 24px;

		margin-right: 12px;

		object-fit: contain;
	}
	&__value {
		font-size: 14px;
		font-weight: 460;

		color: var(--color-light-text);
	}
}
</style>
