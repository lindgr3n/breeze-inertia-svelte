<script>
    let forName;
    let className = "";

    export let value;
    export { forName as for };
    export {className as class}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={`block font-medium text-sm text-gray-700 ${className}`} for={forName}>
    {#if value}
        <span>{value}</span>
    {:else}
        <span><slot /></span>
    {/if}
</label>
