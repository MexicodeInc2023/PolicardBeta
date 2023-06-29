<script>
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	export let codeValue;
	export let squareSize;

	onMount(() => {
		QRCode.toDataURL(codeValue)
			.then((url) => {
				document.getElementById('qrcode').innerHTML =
					'<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><img src="' +
					url +
					'" style="width: 200px" loading="lazy" decoding="async"></div>';
			})
			.catch((err) => {
				console.error(err);
			});
	});
</script>

<div id="qrcode" />

<style>
	#qrcode {
		position: relative;
		width: 200px;
		height: 200px;
	}
</style>
