<template>
	<NuxtLink to="/foo">foo</NuxtLink>

	bar carte :
	<div
		id="guidosHighlight"
		route="https://apivs.guidos.fun/entities/0e0286ae-3d95-47f1-a10f-1e8d4be4ea63"
		key="xzPRHZkvc6puu9FOp3x8YKKDZICvLCHf"
		language="fr"
		class="bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 aspect-[9/16] xl:aspect-square rounded-xl overflow-hidden shadow-xl"
		primaryColor="#1F4465"
		secondaryColor="#051B45"
		backgroundColor="#F7F7F7"
		buttonTextColor="#1F4465"
		buttonBackgroundColor="#FFFFFF"
		elevationProfileColor="#9D8E71"
		dotMapColor="#051B45"
		radiusButton="true"
		lineMapSize="3"
		displayGpxButton="false"
		displayLanguageButton="false"
		displayInfoButton="false"
		displayFullscreenButton="true"
		displayGeoLocationButton="true"
		display3DRotateButton="true"
	></div>
</template>

<script setup>
useHead({
	script: [
		{
			src: '//libraries.guidos.fun/highlight-vs/static/js/main.js',
			type: 'text/javascript',
			defer: true,
			onload: () => {
				setLoaded()
			},
		},
	],
})
</script>
