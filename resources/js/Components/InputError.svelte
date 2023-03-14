<script>
    let className = "";
    export let message;
    export {className as class}

</script>

{#if message}
     <p class={`text-sm text-red-600 ${className}`}>
         { message }
     </p>
{/if}