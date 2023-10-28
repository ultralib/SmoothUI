<template>
	<form class="smooth-form" v-bind="$attrs">
		<div class="smooth-form__header">
			<slot name="header" />
		</div>
		<slot name="body" />
	</form>
</template>

<style scoped lang="scss">
.smooth-form {
	--form-border-radius: 12px;
	--form-padding: 28px;
	--form-padding-desktop: 32px;

	width: 360px;
	height: max-content;

	margin: auto;

	padding: var(--form-padding);

	display: flex;
	flex-direction: column;

	background: var(--color-basic);
	box-shadow: var(--shadow-hard);

	border-radius: var(--form-border-radius);

	&__header {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;

		&:deep(p) {
			width: 100%;

			margin-top: 12px;

			font-size: 22px;
			font-weight: 560;
			font-stretch: wider;
			text-align: center;

			color: var(--color-light-title);
		}
	}

	@media screen and (min-width: 768px) {
		width: 380px;
		padding: var(--form-padding-desktop);
	}

	&:deep(.smooth-button + .smooth-link) {
		margin: 0 auto;
		margin-top: 12px;
	}
}
</style>
