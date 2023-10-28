<script setup lang="ts">
import { Ref, ref } from 'vue';

type SelectValue = string | number;
type SelectOption = {
	icon?: string;
	text: string;
	value: SelectValue;
};

const props = defineProps<{
	options?: SelectOption[];
	modelValue?: SelectValue;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', val: SelectValue): void;
}>();

const currentValue: Ref<SelectValue> = ref(
	props.modelValue ? props.modelValue : props.options?.[0]?.value ?? ''
);

function setValue(val: SelectOption) {
	currentValue.value = val.value;
	emit('update:modelValue', val.value);
}
</script>
<template>
	<div class="smooth-select-group">
		<div
			v-for="option in options"
			:key="option.value"
			class="smooth-select-group__value"
			:data-active="currentValue === option.value"
			@click="setValue(option)"
		>
			<img
				v-if="option.icon"
				:src="option.icon"
				:alt="option.text"
				class="smooth-select-group__value_icon"
			/>
			<p class="smooth-select-group__value_text">
				{{ option.text }}
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.smooth-select-group {
	--select-group-padding: 4px;
	--select-group-border-radius: 8px;

	padding: var(--select-group-padding);

	display: flex;
	gap: 2px;

	background: var(--color-darker);

	border-radius: var(--select-group-border-radius);

	&__value {
		width: 100%;

		padding: 6px 12px;

		background: transparent;

		font-size: 16px;
		font-weight: 450;
		text-align: center;
		color: var(--color-light-secondary);

		border-radius: calc(
			var(--select-group-border-radius) - var(--select-group-padding) / 2
		);

		cursor: pointer;

		transition: 0.2s ease-in-out;
		transition-property: background, color;

		&:hover {
			color: var(--color-light-text);
		}
		&[data-active='true'] {
			background: var(--color-basic);
			color: var(--color-light-text);
		}

		&_text {
			color: inherit;
			font-weight: inherit;
		}
	}
}
</style>
