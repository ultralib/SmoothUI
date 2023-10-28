<script setup lang="ts">
import KitButton from './KitButton.vue';

defineEmits<{
	(event: 'add'): void;
}>();
</script>

<template>
	<div class="smooth-list">
		<slot />

		<KitButton
			class="smooth-list__add"
			size="sm"
			color="light"
			type="button"
			@click="$emit('add')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 24 25"
				fill="none"
			>
				<path
					d="M11.9927 5.98877V19.9888"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M4.99268 12.9888H18.9927"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Добавить
		</KitButton>
	</div>
</template>

<style scoped lang="scss">
.smooth-list {
	width: 100%;
	display: flex;
	flex-direction: column;

	&:deep(.smooth-list-item + .smooth-button) {
		margin-top: 8px;
	}
}
</style>
