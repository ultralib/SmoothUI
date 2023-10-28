<script setup lang="ts">
import KitAlertIcon from './KitAlertIcon.vue';

defineProps<{
	type: 'important' | 'info' | 'warn' | 'error' | 'success';
	transparent?: boolean;
}>();
</script>

<template>
	<div
		class="smooth-alert"
		:data-type="type"
		:data-transparent="transparent ?? false"
	>
		<KitAlertIcon :type="type" class="smooth-alert__icon" />
		<p class="smooth-alert__text">
			<slot />
		</p>
	</div>
</template>

<style scoped lang="scss">
.smooth-alert {
	width: 100%;

	padding: 12px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: var(--alert-bg);
	color: var(--alert-fg);

	border-radius: 10px;

	&[data-type='important'] {
		--alert-bg: var(--color-primary);
		--alert-fg: var(--color-primary-text);

		&[data-transparent='true'] {
			--alert-bg: var(--color-primary-alpha2);
			--alert-fg: var(--color-primary);
		}
	}
	&[data-type='info'] {
		--alert-bg: var(--color-info);
		--alert-fg: var(--color-info-text);

		&[data-transparent='true'] {
			--alert-bg: var(--color-info-alpha);
			--alert-fg: var(--color-info);
		}
	}
	&[data-type='warn'] {
		--alert-bg: var(--color-warn);
		--alert-fg: var(--color-warn-text);

		&[data-transparent='true'] {
			--alert-bg: var(--color-warn-alpha);
			--alert-fg: var(--color-warn);
		}
	}
	&[data-type='error'] {
		--alert-bg: var(--color-danger);
		--alert-fg: var(--color-danger-text);

		&[data-transparent='true'] {
			--alert-bg: var(--color-danger-alpha);
			--alert-fg: var(--color-danger);
		}
	}
	&[data-type='success'] {
		--alert-bg: var(--color-success);
		--alert-fg: var(--color-success-text);

		&[data-transparent='true'] {
			--alert-bg: var(--color-success-alpha);
			--alert-fg: var(--color-success);
		}
	}

	&__icon {
		margin-right: 12px;

		color: inherit;
	}
	&__text {
		width: 100%;

		font-size: 15px;
		font-weight: 460;

		color: inherit;
	}
}
</style>
