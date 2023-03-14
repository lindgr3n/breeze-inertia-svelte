<script setup>
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    let className;

    export let ref;
    export let value = "";
    export { className as class };

    function onInput() {
        dispatch("input", value);
    }

    onMount(() => {
        if (ref.hasAttribute("autofocus")) {
            ref.focus();
        }
    });
</script>

<svelte:options accessors={true}/>
<input
    class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm {className}"
    bind:value
    on:input={onInput}
    on:keyup={(e) => dispatch('keyup', e)}
    bind:this={ref}
    {...$$restProps}
/>
