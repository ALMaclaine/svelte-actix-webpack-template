<script>
	import {onMount} from 'svelte';

	let data = {};

	onMount(async () => {
		const res = await fetch('/api');
		data = await res.json();
		console.log(data);
	});


</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello world!</h1>
<div>Data: {JSON.stringify(data)}</div>
