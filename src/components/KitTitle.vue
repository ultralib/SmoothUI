<script setup lang="ts">
withDefaults(
	defineProps<{
		direction?: 'vertical' | 'horizontal';
	}>(),
	{
		direction: 'vertical'
	}
);
</script>
<template>
	<div class="smooth-title" :data-direction="direction">
		<slot />
	</div>
</template>
<style lang="scss">
.smooth-title {
	width: 100%;
	margin-bottom: 28px;

	font-size: 26px;
	font-weight: 760;

	color: var(--theme-title);

	&[data-direction='horizontal'] {
		display: flex;
		align-items: center;

		& > svg {
			width: 24px;
			height: 24px;

			margin-right: 8px;
		}
	}

	& > p {
		font-family: var(--font-heading);
		font-size: inherit;
		font-weight: inherit;

		color: inherit;
	}
	& > small {
		font-size: 16px;
		font-weight: 460;

		color: var(--theme-secondary);
	}
}
</style>
