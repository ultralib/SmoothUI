<script setup lang="ts">
defineProps<{
	name: string;
	label?: string;
	required?: boolean;
}>();
</script>
<template>
	<label v-if="label" :for="name" class="smooth-label">
		{{ label }}
		<span v-if="required">*</span>
	</label>
	<slot />
</template>

<style scoped lang="scss">
.smooth-label {
	margin-bottom: 6px;

	display: inline-block;

	color: var(--color-light-muted);
	font-size: 14px;

	> span {
		margin-left: 2px;

		color: var(--color-danger);
		font-size: inherit;
	}
}
</style>
