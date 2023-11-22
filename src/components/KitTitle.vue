<template>
	<div class="smooth-title">
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
