<script setup lang="ts">
defineProps<{
	title?: string;
	titleSize?: 'sm' | 'md';
}>();
</script>
<template>
	<div class="smooth-card">
		<p
			v-if="title"
			class="smooth-card__title"
			:data-size="titleSize ?? 'md'"
		>
			{{ title }}
		</p>

		<slot />
	</div>
</template>

<style lang="scss">
.smooth-card {
	padding: 16px;

	margin-bottom: 8px;

	display: flex;
	flex-direction: column;

	color: var(--color-light-title);
	background: var(--color-basic);

	border-radius: 16px;

	--theme-title: var(--color-light-title);
	--theme-text: var(--color-light-text);
	--theme-secondary: var(--color-light-secondary);
	--theme-secondary2: var(--color-light-secondary2);
	--theme-muted: var(--color-light-muted);

	&__title {
		color: var(--color-light-title);

		font-family: var(--font-heading);

		&[data-size='sm'] {
			margin-bottom: 8px;

			font-size: 16px;
			font-weight: 460;
		}
		&[data-size='md'] {
			margin-bottom: 16px;

			font-size: 18px;
			font-weight: 460;
		}
	}
}
</style>
