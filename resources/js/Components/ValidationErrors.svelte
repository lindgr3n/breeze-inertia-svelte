<script>
    // import { page } from "@inertiajs/inertia-svelte";
    // import { error } from "laravel-mix/src/Log";

    // const errors = computed(() => usePage().props.value.errors);
    let className;
    export { className as class };
    export let errors = {};
    let hasErrors = false;
    $: {
        hasErrors = Object.keys(errors).length > 0;
    }
</script>

{#if hasErrors}
    <div class={className}>
        <div class="font-medium text-red-600">
            Whoops! Something went wrong.
        </div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            {#each Object.keys(errors) as key, index}
                <!-- content here -->
                <li key={index}>{errors[key]}</li>
            {/each}
        </ul>
    </div>
{/if}
