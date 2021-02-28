<script>
    import {onMount} from 'svelte';
    import './App.css';
    let data = {};

    onMount(async () => {
        const res = await fetch('/api');
        data = await res.json();
    });
</script>

<style>
    $column: 200px;

    .menu {
        width: calc(4 * $column);
    }
</style>

<h1 class="menu bg-gray-100 rounded-xl p-8">Hello world!</h1>
<div>Data: {JSON.stringify(data)}</div>
