<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	value: number;
	maxValue: number;
}>();

const percentValue = computed(() => (100 * props.value) / props.maxValue);
</script>

<template>
	<div
		class="smooth-circle-progress"
		:style="{ '--percent': `${percentValue}%` }"
	>
		<p v-if="$slots.title" class="smooth-circle-progress__title">
			<slot name="title" />
		</p>

		<p v-if="$slots.subtitle" class="smooth-circle-progress__subtitle">
			<slot name="subtitle" />
		</p>
	</div>
</template>

<style scoped lang="scss">
.smooth-circle-progress {
	--background-color: #282828;

	--progress-size: 120px;
	--progress-color: var(--color-primary);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-width: var(--progress-size);
	width: var(--progress-size);
	min-height: var(--progress-size);
	height: var(--progress-size);

	border-radius: 50%;
	background: linear-gradient(
		180deg,
		var(--background-color) 0%,
		var(--background-color) calc(100% - var(--percent)),
		var(--progress-color) calc(100% - var(--percent))
	);

	&__title,
	&__subtitle {
		font-family: var(--font-heading);
		color: var(--color-primary-text);
	}

	&__title {
		font-size: 16px;
	}
	&__subtitle {
		margin-top: 2px;

		font-size: 14px;
		opacity: 0.65;
	}
}
</style>
