<script setup lang="ts">
defineProps<{
	type: 'important' | 'info' | 'warn' | 'error' | 'success';
}>();
</script>

<template>
	<svg
		v-if="type === 'important' || type === 'info' || type === 'success'"
		xmlns="http://www.w3.org/2000/svg"
		width="26"
		height="26"
		viewBox="0 0 25 24"
		fill="none"
	>
		<path
			d="M12.2847 22C17.8075 22 22.2847 17.5228 22.2847 12C22.2847 6.47715 17.8075 2 12.2847 2C6.76182 2 2.28467 6.47715 2.28467 12C2.28467 17.5228 6.76182 22 12.2847 22Z"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.2847 8V12"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.2847 16H12.2947"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<svg
		v-else-if="type === 'error'"
		xmlns="http://www.w3.org/2000/svg"
		width="26"
		height="26"
		viewBox="0 0 25 24"
		fill="none"
	>
		<path
			d="M8.14467 2H16.4247L22.2847 7.86V16.14L16.4247 22H8.14467L2.28467 16.14V7.86L8.14467 2Z"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.2847 8V12"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.2847 16H12.2947"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<svg
		v-else-if="type === 'warn'"
		xmlns="http://www.w3.org/2000/svg"
		width="26"
		height="26"
		viewBox="0 0 25 24"
		fill="none"
	>
		<g clip-path="url(#clip0_729_45)">
			<path
				d="M10.5747 3.85996L2.10469 18C1.93006 18.3024 1.83766 18.6453 1.83668 18.9945C1.8357 19.3437 1.92618 19.6871 2.09912 19.9905C2.27205 20.2939 2.52141 20.5467 2.8224 20.7238C3.12338 20.9009 3.46549 20.9961 3.81469 21H20.7547C21.1039 20.9961 21.446 20.9009 21.747 20.7238C22.048 20.5467 22.2973 20.2939 22.4703 19.9905C22.6432 19.6871 22.7337 19.3437 22.7327 18.9945C22.7317 18.6453 22.6393 18.3024 22.4647 18L13.9947 3.85996C13.8164 3.56607 13.5654 3.32308 13.2659 3.15444C12.9664 2.98581 12.6284 2.89722 12.2847 2.89722C11.941 2.89722 11.603 2.98581 11.3035 3.15444C11.004 3.32308 10.753 3.56607 10.5747 3.85996Z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.2847 9V13"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.2847 17H12.2947"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_729_45">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="translate(0.284668)"
				/>
			</clipPath>
		</defs>
	</svg>
</template>
