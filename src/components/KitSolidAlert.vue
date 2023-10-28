<script setup lang="ts">
import KitAlert from './KitAlert.vue';
import KitCard from './KitCard.vue';

const theme = localStorage.getItem('smooth-theme') ?? 'light';

defineProps<{
	title?: string;
	type: 'important' | 'info' | 'warn' | 'error' | 'success';
	transparent?: boolean;
}>();
</script>

<template>
	<KitAlert
		v-if="theme === 'light' || theme === 'dark'"
		:type="type"
		:transparent="true"
		class="smooth-solid-alert"
	>
		<slot />
	</KitAlert>
	<KitCard v-else :title="title" title-size="sm" class="smooth-solid-alert">
		<KitAlert :type="type">
			<slot />
		</KitAlert>
	</KitCard>
</template>

<style scoped lang="scss">
.smooth-solid-alert {
	margin-bottom: 12px;
}
</style>
