<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';

type SelectValue = string | number | null;
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

const isActive: Ref<boolean> = ref(false);
const currentValue: Ref<SelectValue> = ref(
	props.modelValue ? props.modelValue : props.options?.[0]?.value ?? ''
);
const currentOption: Ref<SelectOption | undefined> = computed(
	() => props.options?.find((option) => option.value === currentValue.value)
);

const searchValue: Ref<string> = ref(currentOption.value?.text ?? '');
const visibleOptions: Ref<SelectOption[]> = ref(props.options ?? []);
watch(searchValue, (newSearchValue) => {
	const currentQuery = newSearchValue.toLocaleLowerCase();
	const currentOptions = props.options ?? [];

	if (
		newSearchValue.trim() === '' ||
		newSearchValue === currentOption?.value?.text
	) {
		visibleOptions.value = currentOptions;
	} else {
		visibleOptions.value = currentOptions.filter((opt) =>
			opt.text.toLocaleLowerCase().includes(currentQuery)
		);
	}
});

function setValue(val: SelectOption) {
	isActive.value = false;
	currentValue.value = val.value;
	searchValue.value = val.text;
	emit('update:modelValue', val.value);
}
</script>
<template>
	<div class="smooth-select" :data-active="isActive">
		<div class="smooth-select__field">
			<img
				v-if="currentOption?.icon"
				:src="currentOption.icon"
				:alt="currentOption.value?.toString()"
				class="smooth-select__field_icon"
			/>

			<input
				v-model="searchValue"
				class="smooth-select__field_el"
				@focusin="isActive = true"
			/>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 25 25"
				fill="none"
				@click="isActive = !isActive"
			>
				<path
					d="M6.70312 9.71631L12.7031 15.7163L18.7031 9.71631"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div class="smooth-select__dropdown_container">
			<div class="smooth-select__dropdown">
				<div
					v-for="(option, idx) of visibleOptions"
					:key="option.value ?? idx"
					:class="`smooth-select__item ${
						currentValue === option.value ? 'active' : ''
					}`"
					@click="setValue(option)"
				>
					<img
						v-if="option.icon"
						:src="option.icon"
						:alt="option.value?.toString()"
						class="smooth-select__item_icon"
					/>

					<p class="smooth-select__item_text">
						{{ option.text }}
					</p>
				</div>

				<p
					v-if="visibleOptions.length < 1"
					class="smooth-select__small"
				>
					Ничего не нашлось
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.smooth-select {
	--select-border-width: 1px;
	--select-border-radius: 8px;
	--select-padding: 10px 14px;
	--dropdown-border-radius: 8px;

	width: 100%;

	display: flex;

	position: relative;

	&__field {
		height: 40px;
		width: 100%;

		display: flex;
		align-items: center;

		padding: var(--select-padding);

		position: relative;

		border-radius: var(--select-border-radius);

		cursor: pointer;

		transition:
			0.2s ease-in-out box-shadow,
			border-color;

		&_icon {
			width: 18px;
			height: 18px;

			opacity: 0.4;
		}
		&_el {
			margin-right: auto;

			padding: var(--select-padding);

			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			font-size: 14px;

			background: var(--color-darker);
			color: var(--color-light-text);

			border: none;
			border-radius: var(--select-border-radius);
			outline: none;
			appearance: none;

			+ svg {
				position: absolute;
				top: 10px;
				right: 14px;
				color: var(--color-light-title);
			}
		}
	}

	&[data-active='true'] {
		& .smooth-select__field {
			border-color: var(--color-primary);
			box-shadow: var(--shadow-active);
		}
		& .smooth-select__dropdown_container {
			display: block;
		}
	}

	&__dropdown {
		max-height: 178px;

		overflow: scroll;

		padding: 4px;

		display: flex;
		flex-direction: column;

		background: var(--color-basic);

		box-shadow: var(--shadow-dropdown);

		border: 1px solid var(--color-light-border);
		border-radius: var(--dropdown-border-radius);

		&_container {
			width: 100%;
			height: auto;

			display: none;

			padding-top: 6px;

			position: absolute;
			top: 100%;
			left: 0;
			right: 0;

			z-index: var(--z-dropdown);

			user-select: none;
		}
	}

	&__item {
		width: 100%;

		padding: 8px 10px;
		margin-bottom: 2px;

		display: flex;

		border-radius: 6px;

		cursor: pointer;

		transition: 0.25s ease-in-out background;

		&_icon {
			width: 18px;
			height: 18px;

			margin-right: 8px;

			opacity: 0.4;
		}
		&_text {
			font-size: 14px;
			color: var(--color-light-title);
		}

		&:last-child {
			margin-bottom: 0;
		}
		&:hover {
			background: var(--color-basic-hover);
		}

		&.active {
			background: var(--color-primary-alpha2);
		}
	}

	&__small {
		width: 100%;
		padding: 8px 10px;

		font-size: 14px;
		color: var(--color-light-secondary);
	}
}
</style>
