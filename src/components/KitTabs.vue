<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps<{
	topSpacing?: 'xs' | 'sm' | 'md' | 'lg';
	size?: 'default' | 'lg';
	tabs: {
		name: string;
		title: string;
		text?: string;
	}[];
}>();

const theme = localStorage.getItem('smooth-theme') ?? 'light';
const activeTab: Ref<string> = ref(props.tabs[0]?.name ?? '');
</script>

<template>
	<div
		class="smooth-tabs"
		:data-size="size ?? 'default'"
		:data-solid="theme === 'light' || theme === 'dark'"
	>
		<div class="smooth-tabs__tabs">
			<div
				v-for="tab in tabs"
				:key="tab.name"
				:data-active="activeTab === tab.name"
				class="smooth-tabs__tab"
				@click="activeTab = tab.name"
			>
				<p class="smooth-tabs__tab_title">
					{{ tab.title }}
				</p>
				<p v-if="tab.text" class="smooth-tabs__tab_text">
					{{ tab.text }}
				</p>
			</div>
		</div>
		<div class="smooth-tabs__view" :data-top-spacing="topSpacing ?? 'md'">
			<slot :name="activeTab" />
		</div>
	</div>
</template>

<style lang="scss">
.smooth-tabs {
	width: 100%;
	height: max-content;

	display: flex;
	flex-direction: column;

	&[data-size='lg'] {
		.smooth-tabs__tab {
			flex-direction: column;
			align-items: flex-start;

			&_title {
				font-size: 20px;
				@media screen and (min-width: 768px) {
					font-size: 18px;
				}
			}
			&_text {
				margin: 0;
			}
		}
	}

	&[data-solid='true'] &__tab {
		&[data-active='true'] .smooth-tabs__tab_title {
			color: var(--color-primary) !important;
		}

		@media screen and (min-width: 768px) {
			&[data-active='true'] {
				background-color: var(--color-primary-alpha2) !important;
			}

			&:hover {
				background-color: var(--theme-bg-hover);
			}
		}
	}

	&__tabs {
		display: flex;

		overflow: visible;
	}
	&__tab {
		margin-right: 20px;

		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;

		@media screen and (min-width: 768px) {
			padding: 6px 12px;

			margin-right: 8px;

			transition: 0.2s ease-in-out background;

			border-radius: 8px;

			&[data-active='true'] {
				background-color: var(--theme-bg-hover);
			}

			&:hover {
				background-color: var(--theme-bg-hover);
			}
		}

		&_title {
			color: var(--theme-secondary2);

			font-size: 16px;
			font-weight: 590;

			transition: 0.2s ease-in-out color;
		}
		&_text {
			margin-left: 4px;
			color: var(--theme-muted);

			font-size: 14px;
			font-weight: 460;
		}

		&[data-active='true'] &_title,
		&:hover &_title {
			color: var(--theme-title);
		}

		&:last-child {
			margin-right: 0;
		}
	}
	&__view {
		display: flex;
		flex-direction: column;

		&[data-top-spacing='xs'] {
			padding-top: 4px;
		}
		&[data-top-spacing='sm'] {
			padding-top: 8px;
		}
		&[data-top-spacing='md'] {
			padding-top: 16px;
		}
		&[data-top-spacing='lg'] {
			padding-top: 24px;
		}
	}
}
</style>
