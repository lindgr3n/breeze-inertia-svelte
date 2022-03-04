<script>
    // Not sure if we need to use this component
    export let message;
</script>

<div v-show="message">
    <p class="text-sm text-red-600">
        {message}
    </p>
</div>
