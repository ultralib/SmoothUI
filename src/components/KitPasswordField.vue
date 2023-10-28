<script setup lang="ts">
import { Ref, ref } from 'vue';

defineProps<{
	modelValue?: string;
	name: string;
	placeholder: string;
	required?: boolean;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void;
}>();

const isVisible: Ref<boolean> = ref(false);

function onChangeValue(e: Event) {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>
<template>
	<div class="smooth-password-field">
		<input
			class="smooth-field smooth-password-field__el"
			v-bind="$attrs"
			:value="modelValue"
			:type="isVisible ? 'text' : 'password'"
			:required="required"
			:name="name"
			:placeholder="placeholder"
			@input="onChangeValue"
		/>

		<div
			class="smooth-password-field__toggle"
			@click="isVisible = !isVisible"
		>
			<svg
				v-if="isVisible"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.54289 10.7929C6.92672 8.40907 10.6674 6 16 6C21.3326 6 25.0733 8.40907 27.4571 10.7929C28.6461 11.9819 29.5035 13.1692 30.065 14.0609C30.3462 14.5076 30.5546 14.8823 30.6944 15.1493C30.7644 15.2828 30.8173 15.3896 30.8536 15.4651C30.8718 15.5029 30.8859 15.5329 30.8959 15.5545L30.9079 15.5806L30.9116 15.5889L30.9129 15.5918L30.9134 15.5929C30.9134 15.5929 30.9138 15.5939 30 16C30.9138 16.4061 30.9134 16.4071 30.9134 16.4071L30.9129 16.4082L30.9116 16.4111L30.9079 16.4194L30.8959 16.4455C30.8859 16.4671 30.8718 16.4971 30.8536 16.5349C30.8173 16.6104 30.7644 16.7172 30.6944 16.8507C30.5546 17.1177 30.3462 17.4924 30.065 17.9391C29.5035 18.8308 28.6461 20.0181 27.4571 21.2071C25.0733 23.5909 21.3326 26 16 26C10.6674 26 6.92672 23.5909 4.54289 21.2071C3.35387 20.0181 2.49647 18.8308 1.93502 17.9391C1.6538 17.4924 1.4454 17.1177 1.30557 16.8507C1.23563 16.7172 1.18273 16.6104 1.14636 16.5349C1.12817 16.4971 1.11411 16.4671 1.10411 16.4455L1.09213 16.4194L1.08841 16.4111L1.08711 16.4082L1.0866 16.4071C1.0866 16.4071 1.08619 16.4061 2 16C1.08619 15.5939 1.0866 15.5929 1.0866 15.5929L1.08711 15.5918L1.08841 15.5889L1.09213 15.5806L1.10411 15.5545C1.11411 15.5329 1.12817 15.5029 1.14636 15.4651C1.18273 15.3896 1.23563 15.2828 1.30557 15.1493C1.4454 14.8823 1.6538 14.5076 1.93502 14.0609C2.49647 13.1692 3.35387 11.9819 4.54289 10.7929ZM2 16L1.08619 15.5939C0.971271 15.8524 0.971271 16.1476 1.08619 16.4061L2 16ZM3.11811 16C3.23576 16.2204 3.4047 16.5196 3.62748 16.8734C4.12853 17.6692 4.89613 18.7319 5.95711 19.7929C8.07328 21.9091 11.3326 24 16 24C20.6674 24 23.9267 21.9091 26.0429 19.7929C27.1039 18.7319 27.8715 17.6692 28.3725 16.8734C28.5953 16.5196 28.7642 16.2204 28.8819 16C28.7642 15.7796 28.5953 15.4804 28.3725 15.1266C27.8715 14.3308 27.1039 13.2681 26.0429 12.2071C23.9267 10.0909 20.6674 8 16 8C11.3326 8 8.07328 10.0909 5.95711 12.2071C4.89613 13.2681 4.12853 14.3308 3.62748 15.1266C3.4047 15.4804 3.23576 15.7796 3.11811 16ZM30 16L30.9138 16.4061C31.0287 16.1476 31.0287 15.8524 30.9138 15.5939L30 16Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z"
					fill="currentColor"
				/>
			</svg>
			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.6361 15.0474C25.1139 14.7704 25.7257 14.9332 26.0027 15.411L28.8652 20.3485C29.1422 20.8263 28.9795 21.4381 28.5017 21.7151C28.0239 21.9921 27.412 21.8294 27.135 21.3516L24.2725 16.4141C23.9955 15.9363 24.1583 15.3244 24.6361 15.0474Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19.1016 17.6777C19.6455 17.5819 20.1641 17.9451 20.2599 18.489L21.1474 23.5265C21.2432 24.0704 20.88 24.589 20.3361 24.6849C19.7922 24.7807 19.2736 24.4174 19.1777 23.8735L18.2902 18.836C18.1944 18.2921 18.5577 17.7735 19.1016 17.6777Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12.8857 17.665C13.4297 17.7606 13.7931 18.2791 13.6975 18.823L12.81 23.873C12.7144 24.417 12.196 24.7804 11.652 24.6849C11.1081 24.5893 10.7446 24.0708 10.8402 23.5269L11.7277 18.4769C11.8233 17.9329 12.3418 17.5694 12.8857 17.665Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.34963 15.0463C7.82803 15.3223 7.99215 15.9338 7.71619 16.4122L4.85369 21.3747C4.57774 21.8531 3.96621 22.0172 3.48781 21.7412C3.00941 21.4653 2.8453 20.8538 3.12125 20.3754L5.98375 15.4129C6.2597 14.9345 6.87123 14.7703 7.34963 15.0463Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.3717 12.3345C3.80134 11.9875 4.43095 12.0545 4.77798 12.4841C6.76751 14.9474 10.3592 18 16 18C21.6409 18 25.2326 14.9474 27.2221 12.4841C27.5691 12.0545 28.1987 11.9875 28.6284 12.3345C29.058 12.6815 29.125 13.3112 28.778 13.7408C26.5675 16.4776 22.4592 20 16 20C9.54087 20 5.43256 16.4776 3.22209 13.7408C2.87507 13.3112 2.94205 12.6815 3.3717 12.3345Z"
					fill="currentColor"
				/>
			</svg>
		</div>
	</div>
</template>

<style lang="scss">
.smooth-password-field {
	--password-field-border-radius: 8px;
	--password-toggle-border-radius: 6px;

	width: 100%;

	position: relative;

	&__el {
		width: 100%;

		&:-webkit-autofill {
			& + .smooth-password-field__toggle > svg {
				color: var(--color-autocomplete-fg);
			}
			& + .smooth-password-field__toggle:hover {
				background-color: var(--color-autocomplete-bg-hover);
			}
		}
	}
	&__toggle {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 4px;

		position: absolute;
		top: 50%;
		right: 6px;

		transform: translateY(-50%);

		cursor: pointer;

		border-radius: var(--password-toggle-border-radius);

		transition: 0.2s ease-in-out background;

		& > svg {
			width: 22px;
			height: 22px;

			opacity: 0.7;

			color: var(--color-light-title);
		}

		&:hover {
			background-color: var(--color-darkest);
		}
	}
}
</style>
