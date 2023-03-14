<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let className = "";

    export let type = "submit";
    export { className as class };
</script>

<button
    {type}
    class="{className} inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
    {...$$restProps}
    on:click={() => dispatch('click')}
>
    <slot />
</button>
