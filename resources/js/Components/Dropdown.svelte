<script setup>
    import { onDestroy, onMount } from "svelte";

    export let align = "right";
    export let width = "48";
    export let contentClasses = "py-1 bg-white";

    function closeOnEscape(e) {
        if (open.value && e.key === "Escape") {
            open.value = false;
        }
    }

    onMount(() => document.addEventListener("keydown", closeOnEscape));
    onDestroy(() => document.removeEventListener("keydown", closeOnEscape));
    let widthClass = "w-48";
    let alignmentClasses = "";
    // $: {
    //     widthClass = {
    //         "48": "w-48",
    //     };
    // }

    $: {
        if (align === "left") {
            alignmentClasses = "origin-top-left left-0";
        } else if (align === "right") {
            alignmentClasses = "origin-top-right right-0";
        } else {
            alignmentClasses = "origin-top";
        }
    }

    let open = false;
</script>

<div class="relative">
    <div on:click={(evt) => (open = !open)}>
        <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    {#if open}
        <div class="fixed inset-0 z-40" on:click={(evt) => (open = false)} />
        <div
            class="absolute z-50 mt-2 rounded-md shadow-lg {widthClass} {alignmentClasses}"
            on:click={(evt) => (open = false)}
        >
            <div
                class="rounded-md ring-1 ring-black ring-opacity-5 {contentClasses}"
            >
                <slot name="content" />
            </div>
        </div>
    {/if}
</div>
