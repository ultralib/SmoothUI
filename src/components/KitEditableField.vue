<script setup lang="ts">
import KitModal from './KitModal.vue';
import { Ref, ref } from 'vue';
import KitTitle from './KitTitle.vue';
import KitFieldGroup from './KitFieldGroup.vue';
import KitField from './KitField.vue';
import KitButton from './KitButton.vue';

const props = defineProps<{
	label: string;
	value: string;
	look?: 'default' | 'important';
	disabled?: boolean;
}>();

defineEmits<{
	(event: 'save', value: string): void;
}>();

const currentValue: Ref<string> = ref(props.value);
const openEdit: Ref<boolean> = ref(false);
function copyValue() {
	if (props.disabled === true) {
		navigator.clipboard.writeText(props.value);
	}
}
</script>

<template>
	<div
		class="smooth-editable-field"
		:data-look="look ?? 'important'"
		:data-disabled="disabled === true"
		@click="copyValue"
	>
		<p class="smooth-editable-field__label">
			{{ label }}
		</p>
		<p class="smooth-editable-field__value">
			{{ value }}
		</p>

		<button
			v-if="disabled == false"
			class="smooth-editable-field__button"
			@click="openEdit = true"
		>
			<svg
				class="smooth-editable-field__icon"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 25 25"
				fill="none"
			>
				<path
					d="M17.5962 3.73468C17.8588 3.47203 18.1706 3.26369 18.5138 3.12155C18.857 2.97941 19.2248 2.90625 19.5962 2.90625C19.9676 2.90625 20.3354 2.97941 20.6786 3.12155C21.0217 3.26369 21.3335 3.47203 21.5962 3.73468C21.8588 3.99732 22.0672 4.30912 22.2093 4.65228C22.3515 4.99545 22.4246 5.36324 22.4246 5.73468C22.4246 6.10611 22.3515 6.47391 22.2093 6.81707C22.0672 7.16023 21.8588 7.47203 21.5962 7.73468L8.09619 21.2347L2.59619 22.7347L4.09619 17.2347L17.5962 3.73468Z"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>

		<KitModal
			v-if="openEdit"
			@close="openEdit = false"
			@submit="$emit('save', currentValue)"
		>
			<KitTitle>
				<p>Редактировать</p>
			</KitTitle>

			<KitFieldGroup name="value" label="Значение">
				<KitField
					v-model="currentValue"
					name="value"
					v-bind="$attrs"
					type="text"
					:required="true"
					placeholder="Введите значение"
				/>
			</KitFieldGroup>

			<KitButton type="submit" color="primary" size="lg">
				Сохранить
			</KitButton>
		</KitModal>
	</div>
</template>

<style scoped lang="scss">
.smooth-editable-field {
	display: flex;
	flex-direction: column;

	padding-right: 48px !important;

	position: relative;

	@media screen and (min-width: 768px) {
		padding: 0 8px;
	}

	&[data-look='default'] {
		--action-bg: var(--color-darker);
		--action-bg-hover: var(--color-darkest);
		--action-fg: var(--color-light-title);
		--action-fg-hover: var(--color-light-title);
	}
	&[data-look='important'] {
		--action-bg: var(--color-primary-alpha2);
		--action-bg-hover: var(--color-primary);
		--action-fg: var(--color-primary);
		--action-fg-hover: var(--color-primary-text);
	}
	&[data-disabled='true'] {
		cursor: pointer;

		transition: 0.2s ease-in-out;
		transition-property: opacity;

		&:hover {
			opacity: 0.7;
		}

		@media screen and (min-width: 768px) {
			padding: 8px;

			border-radius: 8px;

			transition-property: background;

			&:hover {
				opacity: 1;
				background-color: var(--color-darker);
			}
		}
	}

	&__label {
		margin-bottom: 2px;

		font-size: 14px;

		color: var(--color-light-secondary2);
	}
	&__value {
		font-size: 16px;
		font-weight: 460;

		color: var(--color-light-text);
	}
	&__button {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);

		padding: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		outline: none;
		border: none;
		border-radius: 8px;

		cursor: pointer;

		background-color: var(--action-bg);
		color: var(--action-fg);

		transition: 0.2s ease-in-out;
		transition-property: background, color;

		@media screen and (min-width: 768px) {
			right: 8px;
		}
		&:hover {
			background-color: var(--action-bg-hover);
			color: var(--action-fg-hover);
		}
	}
}
</style>
