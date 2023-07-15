<script>
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	export let codeValue;
	/* export let squareSize; */

	onMount(() => {
		QRCode.toDataURL(codeValue)
			.then((url) => {
				document.getElementById('qrcode').innerHTML =
					'<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><img src="' +
					url +
					'" style="width: 160px" loading="lazy" decoding="async"></div>';
			})
			.catch((err) => {
				console.error(err);
			});
	});
</script>

<div id="qrcode" />

<style>
	#qrcode{position:relative;width:200px;height:200px;position:relative;width:200px;height:200px}@media screen and (max-width: 450px){#qrcode{left:-16rem}}@media screen and (max-width: 540px) and (min-width: 451px){#qrcode{left:-7.7rem}}
</style>