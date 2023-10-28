<script setup lang="ts">
defineProps<{
	size: 'sm' | 'md' | 'lg';
	inside?: 'none' | 'button' | 'view';
}>();
</script>

<template>
	<div
		class="smooth-suspense-loader__container"
		:data-size="size"
		:data-inside="inside"
	>
		<div
			class="smooth-suspense-loader"
			:data-size="size"
			:data-inside="inside"
		></div>
		<p class="smooth-suspense-loader__text">
			<slot />
		</p>
	</div>
</template>

<style lang="scss">
.smooth-suspense-loader {
	display: inline-block;

	position: relative;

	color: currentColor;

	border: 5px solid;
	border-radius: 50%;
	border-top-color: transparent;

	animation: rotate 1s linear infinite;

	&__container {
		display: flex;
		align-items: center;
		justify-content: center;

		// Inside
		&[data-inside='view'] {
			margin: auto;
			color: var(--color-primary);

			& > .smooth-suspense-loader__text {
				color: var(--theme-title);
			}
		}
		&[data-inside='button'] {
			margin-right: 12px;
		}

		// Sizes
		&[data-size='sm'] .smooth-suspense-loader {
			height: 16px;
			width: 16px;

			border-width: 2px;
		}
		&[data-size='md'] .smooth-suspense-loader {
			height: 24px;
			width: 24px;

			border-width: 3px;
		}
		&[data-size='lg'] .smooth-suspense-loader {
			height: 40px;
			width: 40px;
		}
	}
	&__text {
		margin-left: 16px;

		font-size: 15px;

		color: var(--color-light-secondary);
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
