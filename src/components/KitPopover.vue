<script setup lang="ts">
defineProps<{
	text: string;
}>();
</script>
<template>
	<div class="smooth-popover">
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

	&__panel {
		width: max-content;
		max-width: 360px;
		visibility: hidden;

		padding: var(--popover-padding);

		position: absolute;
		bottom: calc(100% + var(--popover-spacing));
		left: 50%;
		transform: translate(-50%, 0);

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
