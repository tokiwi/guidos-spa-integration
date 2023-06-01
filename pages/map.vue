<template>
	<Nav />
	<div
		id="guidosHighlight"
		renderAtLoad="false"
		:route="route"
		key="xzPRHZkvc6puu9FOp3x8YKKDZICvLCHf"
		language="fr"
		style="width: 400px; height: 400px"
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
	/>
	<h2>Load maps</h2>
	<ul>
		<li><button @click="loadMap1">Map1</button></li>
		<li><button @click="loadMap2">Map2</button></li>
	</ul>
</template>

<script setup>
const route = ref('https://apivs.guidos.fun/entities/0e0286ae-3d95-47f1-a10f-1e8d4be4ea63')

onMounted(() => {
	if (process.client) {
		window.renderGuidosMap()
	}
})

const loadMap1 = () => {
	route.value = 'https://apivs.guidos.fun/entities/0e0286ae-3d95-47f1-a10f-1e8d4be4ea63'
	window.renderGuidosMap()
}

const loadMap2 = () => {
	route.value = 'https://apivs.guidos.fun/entities/cbdce309-0fe1-40e4-beae-a2ff39513b56'
	window.renderGuidosMap()
}
</script>
