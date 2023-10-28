<script setup lang="ts">
defineProps<{
	size?: 'sm' | 'md' | 'lg';
	format?: 'row' | 'column';
	status?: 'offline' | 'online' | 'none';

	name: string;
	text?: string;
	avatar?: string;
	rating?: number;
	clickable?: boolean;
}>();
</script>
<template>
	<div
		class="smooth-profile"
		:data-clickable="clickable === true"
		:data-size="size ?? 'sm'"
		:data-format="format ?? 'row'"
	>
		<div class="smooth-profile__avatar">
			<img
				:src="
					typeof avatar === 'string' && avatar.length > 5
						? avatar
						: `/img/avatar.png`
				"
			/>
			<div
				v-if="status !== 'none'"
				class="smooth-profile__status"
				:data-status="status ?? 'offline'"
			></div>
		</div>

		<div class="smooth-profile__column">
			<p class="smooth-profile__name">
				{{ name }}
			</p>
			<p v-if="text" class="smooth-profile__text">
				{{ text }}
			</p>
			<div v-if="rating" class="smooth-profile__rating">
				<svg
					class="smooth-profile__rating_icon"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 12 12"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.56169 0.885292C5.69014 0.795328 5.84317 0.74707 6 0.74707C6.15682 0.74707 6.30985 0.795328 6.43831 0.885292C6.56502 0.974036 6.66177 1.09912 6.71583 1.24397L7.7454 3.83661L7.74847 3.84462C7.74942 3.84718 7.7511 3.84941 7.7533 3.85104C7.75549 3.85266 7.75811 3.85361 7.76084 3.85377L7.76316 3.8539L10.5288 4.03204C11.2467 4.07866 11.4921 4.97734 10.9696 5.41169L8.85113 7.17862L8.8499 7.17964C8.84513 7.18358 8.84158 7.18878 8.83964 7.19466C8.83776 7.20037 8.83749 7.20649 8.83885 7.21235L9.5228 9.90132C9.68838 10.5549 8.98263 11.1435 8.36868 10.7562L8.36774 10.7557L6.00524 9.25565C6.00374 9.2547 6.00178 9.25405 6 9.25405C5.99822 9.25405 5.99647 9.25456 5.99497 9.25552L5.99438 9.25589L3.79664 10.6476C3.12314 11.0758 2.34491 10.425 2.52877 9.70439L3.16103 7.21283C3.16241 7.20696 3.16224 7.20039 3.16035 7.19466C3.15842 7.18878 3.15486 7.18358 3.1501 7.17964L3.14887 7.17862L1.03072 5.41193C0.508239 4.97758 0.753093 4.07867 1.47101 4.03205L4.23915 3.85376C4.24188 3.8536 4.2445 3.85266 4.2467 3.85104C4.2489 3.84941 4.25057 3.84718 4.25152 3.84462L4.2546 3.83661L5.28417 1.24397C5.33822 1.09912 5.43497 0.974037 5.56169 0.885292ZM6.40747 8.62263L8.76881 10.1219C8.77308 10.1246 8.77664 10.1258 8.77664 10.1258C8.77664 10.1258 8.78087 10.1247 8.78533 10.1214C8.79101 10.1171 8.79463 10.1117 8.79627 10.1073C8.79701 10.1053 8.79751 10.1032 8.79766 10.1005C8.7978 10.098 8.79773 10.0933 8.79587 10.0859L8.11103 7.39345C8.07551 7.25029 8.08116 7.1 8.12733 6.95991C8.1734 6.8201 8.25796 6.69612 8.37129 6.6022L8.37197 6.60164L10.4901 4.83497C10.4945 4.83132 10.4963 4.82871 10.4971 4.82746C10.498 4.82608 10.4987 4.82447 10.4993 4.82225C10.5007 4.81719 10.5011 4.80847 10.498 4.79839C10.4949 4.78835 10.4903 4.78346 10.4889 4.78231L10.4882 4.78181C10.4882 4.78181 10.486 4.78085 10.4805 4.78048L7.71728 4.6025L7.71594 4.60242C7.56823 4.59357 7.42625 4.54201 7.30727 4.454C7.18928 4.36671 7.09895 4.24731 7.04703 4.1101L6.0171 1.51654C6.01575 1.51315 6.01446 1.50975 6.01321 1.50633C6.01223 1.50361 6.01043 1.50127 6.00806 1.49961C6.0057 1.49796 6.00288 1.49707 6 1.49707C5.99711 1.49707 5.9943 1.49796 5.99193 1.49961C5.98957 1.50127 5.98777 1.50361 5.98678 1.50633C5.98554 1.50975 5.98424 1.51315 5.9829 1.51654L4.95296 4.1101C4.90105 4.24731 4.81072 4.36671 4.69273 4.454C4.57374 4.54201 4.43177 4.59357 4.28406 4.60242L1.51961 4.78047C1.51415 4.78084 1.51185 4.7818 1.51185 4.7818L1.51106 4.78231C1.5097 4.78346 1.50509 4.78835 1.50198 4.79839C1.49886 4.80847 1.49933 4.81719 1.50066 4.82225C1.50125 4.82447 1.50199 4.82608 1.50287 4.82746C1.50366 4.82871 1.50551 4.83132 1.5099 4.83497L1.51051 4.83547L3.62802 6.60164L3.62876 6.60224C3.74206 6.69616 3.8266 6.82013 3.87267 6.95991C3.91884 7.1 3.92448 7.25029 3.88896 7.39345L3.88848 7.39537L3.25551 9.88974C3.24196 9.94276 3.26065 9.98383 3.2949 10.0099C3.31243 10.0232 3.33014 10.0289 3.34414 10.0299C3.35571 10.0307 3.37173 10.029 3.39398 10.0149L5.59253 8.62263L5.59312 8.62226C5.71478 8.54505 5.8559 8.50405 6 8.50405C6.14424 8.50405 6.28572 8.54527 6.40747 8.62263Z"
						fill="currentColor"
					/>
					<path
						d="M8.76881 10.1219L6.40747 8.62263C6.28572 8.54527 6.14424 8.50405 6 8.50405C5.8559 8.50405 5.71478 8.54505 5.59312 8.62226L5.59253 8.62263L3.39398 10.0149C3.37173 10.029 3.35571 10.0307 3.34414 10.0299C3.33014 10.0289 3.31243 10.0232 3.2949 10.0099C3.26065 9.98383 3.24196 9.94276 3.25551 9.88974L3.88848 7.39537L3.88896 7.39345C3.92448 7.25029 3.91884 7.1 3.87267 6.95991C3.8266 6.82013 3.74206 6.69616 3.62876 6.60224L3.62802 6.60164L1.51051 4.83547L1.5099 4.83497C1.50551 4.83132 1.50366 4.82871 1.50287 4.82746C1.50199 4.82608 1.50125 4.82447 1.50066 4.82225C1.49933 4.81719 1.49886 4.80847 1.50198 4.79839C1.50509 4.78835 1.5097 4.78346 1.51106 4.78231L1.51185 4.7818C1.51185 4.7818 1.51415 4.78084 1.51961 4.78047L4.28406 4.60242C4.43177 4.59357 4.57374 4.54201 4.69273 4.454C4.81072 4.36671 4.90105 4.24731 4.95296 4.1101L5.9829 1.51654L5.98678 1.50633C5.98777 1.50361 5.98957 1.50127 5.99193 1.49961C5.9943 1.49796 5.99711 1.49707 6 1.49707C6.00288 1.49707 6.0057 1.49796 6.00806 1.49961C6.01043 1.50127 6.01223 1.50361 6.01321 1.50633L6.0171 1.51654L7.04703 4.1101C7.09895 4.24731 7.18928 4.36671 7.30727 4.454C7.42625 4.54201 7.56823 4.59357 7.71594 4.60242L7.71728 4.6025L10.4805 4.78048C10.486 4.78085 10.4882 4.78181 10.4882 4.78181L10.4889 4.78231C10.4903 4.78346 10.4949 4.78835 10.498 4.79839C10.5011 4.80847 10.5007 4.81719 10.4993 4.82225C10.4987 4.82447 10.498 4.82608 10.4971 4.82746C10.4963 4.82871 10.4945 4.83132 10.4901 4.83497L8.37197 6.60164L8.37129 6.6022C8.25796 6.69612 8.1734 6.8201 8.12733 6.95991C8.08116 7.1 8.07551 7.25029 8.11103 7.39345L8.79587 10.0859C8.79773 10.0933 8.7978 10.098 8.79766 10.1005C8.79751 10.1032 8.79701 10.1053 8.79627 10.1073C8.79463 10.1117 8.79101 10.1171 8.78533 10.1214C8.78087 10.1247 8.77664 10.1258 8.77664 10.1258C8.77664 10.1258 8.77308 10.1246 8.76881 10.1219Z"
						fill="currentColor"
					/>
				</svg>
				<p class="smooth-profile__rating_text">
					{{ rating }}
				</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.smooth-profile {
	--profile-margin: 8px;

	width: 100%;
	display: flex;
	align-items: center;

	position: relative;

	// Clickable
	&[data-clickable='true'] {
		cursor: pointer;

		transition: 0.2s ease-in-out;
		transition-property: opacity;

		&:hover {
			opacity: 0.6;
		}

		@media screen and (min-width: 768px) {
			padding: 6px;

			transition-property: background;

			border-radius: 8px;

			&:hover {
				background: var(--color-darker);
				opacity: 1;
			}
		}
	}

	// Size
	&[data-size='md'] {
		& .smooth-profile__avatar,
		& .smooth-profile__avatar > img {
			width: 52px;
			height: 52px;
		}
		& .smooth-profile__status {
			width: 16px;
			height: 16px;
			top: 34px;
			left: 34px;

			border-width: 3px;
		}
		& .smooth-profile__name {
			font-size: 16px;
		}
	}
	&[data-size='lg'] {
		--profile-margin: 12px;

		&[data-format='row'] {
			& .smooth-profile__avatar,
			& .smooth-profile__avatar > img {
				width: 46px;
				height: 46px;
			}
			& .smooth-profile__status {
				width: 18px;
				height: 18px;
				top: 30px;
				left: 30px;

				border-width: 3px;
			}
		}
		&[data-format='column'] {
			position: relative;
			top: -20px;
			margin-bottom: -20px;

			& .smooth-profile__avatar,
			& .smooth-profile__avatar > img {
				width: 64px;
				height: 64px;
			}
			& .smooth-profile__status {
				width: 20px;
				height: 20px;
				top: 44px;
				left: 44px;

				border-width: 3px;
			}
			& .smooth-profile__name {
				margin-bottom: 4px;
			}
			& .smooth-profile__text {
				margin-top: 0;
			}
		}
		& .smooth-profile__name {
			font-size: 18px;
		}
		& .smooth-profile__text {
			font-size: 15px;
		}
	}
	// Formats
	&[data-format='column'] {
		flex-direction: column;

		& .smooth-profile__avatar > img {
			box-shadow: 0 0 0 12px var(--color-basic);
		}

		& .smooth-profile__name,
		& .smooth-profile__text {
			text-align: center;
		}

		& .smooth-profile__column {
			margin: 0;
			margin-top: var(--profile-margin);
		}
	}

	&__column {
		margin-left: var(--profile-margin);

		display: flex;
		flex-direction: column;
	}

	&__avatar,
	&__avatar > img {
		width: 32px;
		height: 32px;
	}
	&__avatar {
		position: relative;

		& > img {
			border-radius: 50%;

			object-fit: cover;

			background: var(--color-darkest);
		}
	}
	&__status {
		width: 10px;
		height: 10px;

		position: absolute;
		top: 22px;
		left: 22px;

		background: #dedede;

		border: 2px solid white;
		border-radius: 50px;

		&[data-status='online'] {
			background: var(--color-success);
		}
	}
	&__name {
		font-size: 14px;
		font-weight: 590;
		color: var(--color-light-title);
	}
	&__text {
		margin-top: 2px;

		font-size: 13px;
		font-weight: 460;
		color: var(--color-light-secondary2);
	}
	&__rating {
		margin-top: 2px;

		width: max-content;

		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--color-light-secondary2);

		&_icon {
			margin-right: 4px;
			color: inherit;
		}
		&_text {
			font-size: 13px;
			color: inherit;
		}
	}
}
</style>
