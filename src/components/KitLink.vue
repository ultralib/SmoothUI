<script setup lang="ts">
defineProps<{
	to: string;

	look?: 'accent' | 'secondary';
}>();
</script>
<template>
	<RouterLink :to="to" class="smooth-link" :data-look="look ?? 'accent'">
		<slot />
	</RouterLink>
</template>

<style lang="scss">
.smooth-link {
	width: max-content;

	padding: 4px 8px;

	font-size: 15px;

	text-decoration: underline;

	transition: 0.2s ease-in-out;
	transition-property: color, text-decoration-color, background;

	border-radius: 4px;

	&[data-look='accent'] {
		color: var(--color-link-text);

		text-underline-offset: 3px;
		text-decoration-color: var(--color-link-underline);

		&:hover {
			background-color: var(--color-link-hover);
		}
	}
	&[data-look='secondary'] {
		padding: 0;

		color: var(--color-light-secondary);

		text-decoration-color: var(--color-light-muted);
		text-decoration-style: dashed;
		text-underline-offset: 3px;

		@media screen and (min-width: 768px) {
			padding: 6px 8px;

			&:hover {
				background-color: var(--color-link-hover);
			}
		}

		&:hover {
			color: var(--color-link-text);
			text-decoration-color: var(--color-link-underline);
		}
	}
}
</style>
