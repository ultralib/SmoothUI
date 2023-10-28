<script setup lang="ts">
const textTypes = ['text', 'bigtext', 'number', 'email', 'tel', 'url'] as const;
type TextTypes = (typeof textTypes)[number];

type ModelValue = string | number | null;

defineProps<{
	modelValue?: ModelValue;
	type: TextTypes;
	name: string;
	label?: string;
	placeholder: string;
	required?: boolean;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', val: ModelValue): void;
}>();

function onChangeValue(e: Event) {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>
<template>
	<input
		v-if="type !== 'bigtext'"
		v-bind="$attrs"
		:required="required"
		:name="name"
		:type="type"
		:placeholder="placeholder"
		class="smooth-field"
		:value="modelValue"
		@input="onChangeValue"
	/>
	<!-- Textarea -->
	<textarea
		v-else
		v-bind="$attrs"
		:required="required"
		:name="name"
		:placeholder="placeholder"
		class="smooth-field"
		:value="modelValue ?? ''"
		@input="onChangeValue"
	/>
</template>
