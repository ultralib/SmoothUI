<script setup lang="ts">
withDefaults(
	defineProps<{
		text: string;

		position?: 'top-left' | 'top-center' | 'top-right';
	}>(),
	{
		position: 'top-left'
	}
);
</script>
<template>
	<div class="smooth-popover" :data-position="position">
		<slot />

		<div class="smooth-popover__panel">
			<p class="smooth-popover__panel_text">
				{{ text }}
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.smooth-popover {
	--popover-spacing: 4px;
	--popover-padding: 4px 8px;
	--popover-border-radius: 6px;

	width: auto;

	position: relative;

	display: flex;

	&:hover > &__panel {
		visibility: visible;
	}

	&[data-position='top-left'] &__panel {
		bottom: calc(100% + var(--popover-spacing));
		left: 0;
	}
	&[data-position='top-center'] &__panel {
		bottom: calc(100% + var(--popover-spacing));
		left: 50%;
		transform: translate(-50%, 0);
	}
	&[data-position='top-right'] &__panel {
		bottom: calc(100% + var(--popover-spacing));
		right: 0;
	}

	&__panel {
		width: max-content;
		max-width: 360px;
		visibility: hidden;

		padding: var(--popover-padding);

		position: absolute;

		background: var(--color-darkest);
		color: var(--color-light-secondary);

		border-radius: var(--popover-border-radius);

		pointer-events: none;

		&_text {
			color: inherit;
			text-align: center;
			line-height: 1.15;
			font-size: 14px;
			font-weight: 460;
		}
	}
}
</style>
