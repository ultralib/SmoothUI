<script setup lang="ts">
defineProps<{
	look: 'field' | 'card' | 'circle';
}>();
</script>

<template>
	<div class="smooth-suspense-skeleton" :data-look="look">Загрузка...</div>
</template>

<style scoped lang="scss">
$base-color: var(--skeleton-base);
$shine-color: var(--skeleton-shine);
$animation-duration: 6s;

@mixin background-gradient {
	background: linear-gradient(90deg, $shine-color, $base-color, $shine-color)
		0 0 / 100vh 100% fixed;
	animation: bgslide $animation-duration infinite linear;
}

.smooth-suspense-skeleton {
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 14px;
	color: var(--color-light-muted);

	user-select: none;

	cursor: progress;

	&[data-look='circle'] {
		width: 50px;
		height: 50px;

		border-radius: 250px;

		@include background-gradient;
	}
	&[data-look='field'] {
		width: 100%;
		height: 38px;

		border-radius: 8px;

		@include background-gradient;
	}
	&[data-look='card'] {
		width: 100%;
		height: 125px;

		border-radius: 20px;

		@include background-gradient;
	}
}

@keyframes bgslide {
	to {
		background-position: 100vw 0;
	}
}
</style>
