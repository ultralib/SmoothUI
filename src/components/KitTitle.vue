<template>
	<div class="smooth-title">
		<slot />
	</div>
</template>
<style scoped lang="scss">
.smooth-title {
	width: 100%;
	margin-bottom: 28px;

	font-size: 26px;
	font-weight: 760;

	color: var(--theme-title);

	&:deep(p) {
		font-size: inherit;
		font-weight: inherit;

		color: inherit;
	}
	&:deep(small) {
		font-size: 16px;
		font-weight: 460;

		color: var(--theme-secondary);
	}
}
</style>
