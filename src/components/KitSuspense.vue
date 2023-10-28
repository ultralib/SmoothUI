<script setup lang="ts">
import KitSuspenseLoader from './KitSuspenseLoader.vue';
import KitSuspenseSkeleton from './KitSuspenseSkeleton.vue';

defineProps<{
	visible: boolean;
	look: 'skeleton-field' | 'skeleton-card' | 'skeleton-circle' | 'loader';
}>();
</script>

<template>
	<div class="smooth-suspense">
		<div v-if="visible" class="smooth-suspense__slot">
			<slot />
		</div>
		<div v-else class="smooth-suspense__preview">
			<KitSuspenseSkeleton
				v-if="look === 'skeleton-field'"
				look="field"
			/>
			<KitSuspenseSkeleton
				v-else-if="look === 'skeleton-card'"
				look="card"
			/>
			<KitSuspenseSkeleton
				v-else-if="look === 'skeleton-circle'"
				look="circle"
			/>
			<KitSuspenseLoader
				v-else-if="look === 'loader'"
				size="md"
				inside="view"
			>
				Загрузка...
			</KitSuspenseLoader>
		</div>
	</div>
</template>

<style lang="scss">
.smooth-suspense {
	width: 100%;
}
</style>
