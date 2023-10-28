<script setup lang="ts">
withDefaults(
	defineProps<{
		size?: 'sm' | 'md' | 'lg';
		color?: 'basic' | 'light' | 'outline' | 'dark' | 'primary' | 'danger';
		loading?: boolean;
	}>(),
	{
		size: 'md',
		color: 'outline',
		loading: false
	}
);
</script>
<template>
	<button
		:class="`smooth-button smooth-button-${size} smooth-button-${color}`"
		v-bind="$attrs"
		:data-loading="loading"
	>
		<slot />
	</button>
</template>

<style lang="scss">
.smooth-button {
	--button-border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	border-radius: var(--button-border-radius);

	font-size: 15px;

	cursor: pointer;

	transition: 0.2s ease-in-out background;

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	&[data-loading='true'] {
		cursor: progress;
	}

	&-sm {
		padding: 8px 12px;

		border-radius: 7px;

		img {
			width: 16px;
			height: 16px;

			margin-right: 4px;
		}
	}
	&-md {
		padding: 8px 16px;

		border-radius: 8px;
	}
	&-lg {
		padding: 14px 16px;

		font-size: 16px;

		border-radius: 10px;
	}

	&-basic {
		background: var(--color-basic);

		color: var(--color-light-title);

		&:hover {
			background: var(--color-light-hover);
		}
	}
	&-light {
		background: var(--color-light);

		color: var(--color-light-title);

		&:hover {
			background: var(--color-light-hover);
		}
	}
	&-outline {
		background: transparent;

		color: var(--color-light-title);

		border: 2px solid var(--color-border);

		box-shadow: var(--shadow-soft);

		&:hover {
			background: var(--color-light);
		}
	}
	&-dark {
		background: var(--color-dark);

		color: var(--color-dark-text);

		&:hover {
			background: var(--color-dark-hover);
		}
	}
	&-primary {
		background: var(--color-primary);

		color: var(--color-primary-text);

		&:hover {
			background: var(--color-primary-hover);
		}
	}
	&-danger {
		background: var(--color-danger);

		color: var(--color-danger-text);

		&:hover {
			background: var(--color-danger-hover);
		}
	}

	&:deep(svg) {
		margin-right: 8px;
	}
}
</style>
