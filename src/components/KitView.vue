<template>
	<div class="smooth-view" :data-header="'header' in $slots">
		<div v-if="$slots.header" class="smooth-view__header">
			<slot name="header" />
		</div>
		<div class="smooth-view__body" v-bind="$attrs">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.smooth-view {
	overflow: hidden;
	overflow-y: scroll;

	touch-action: pan-y;

	&[data-header='true'],
	&[data-header='true'] &__body {
		height: 100%;
	}

	&__header {
		min-height: 120px;

		background-color: var(--color-basic);
		color: var(--color-light-title);

		z-index: 10;

		&:deep(.smooth-title) {
			color: var(--color-light-title);
		}
	}
	&__body {
		padding-bottom: 100px !important;
	}
	&__header + &__body {
		padding-top: 32px;
		position: relative;
		top: -40px;

		background: var(--theme-bg);

		border-top-left-radius: 32px;
		border-top-right-radius: 32px;

		z-index: 20;
	}

	&__header,
	&__body {
		padding: 20px 16px;
	}

	@media screen and (min-width: 768px) {
		padding-top: 80px;
	}
}

.smooth-view,
.smooth-view__body {
	/* Hide scrollbar for Chrome, Safari and Opera */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
