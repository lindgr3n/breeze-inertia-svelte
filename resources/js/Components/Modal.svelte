<script setup>
    import { createEventDispatcher, onDestroy, onMount } from "svelte/internal";
    
    export let show = false
    export let maxWidth = '2xl'
    export let closeable = true

    const dispatch = createEventDispatcher();

    // const emit = defineEmits(['close']);
    
    
    $: {        
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
        
    }
    
    function close() {
        if (props.closeable) {
            dispatch('close');
        }
    };
    
    function closeOnEscape(e) {
        if (e.key === 'Escape' && show) {
            close();
        }
    };
    
    onMount(() => document.addEventListener('keydown', closeOnEscape));
    
    onDestroy(() => {
        document.removeEventListener('keydown', closeOnEscape);
        document.body.style.overflow = null;
    });
    
    const maxWidthClass = {
        
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl'
    };
    </script>
    
    <teleport to="body">
        <transition leave-active-class="duration-200">
            {#if show}
                 <div class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region>
                     <transition
                         enter-active-class="ease-out duration-300"
                         enter-from-class="opacity-0"
                         enter-to-class="opacity-100"
                         leave-active-class="ease-in duration-200"
                         leave-from-class="opacity-100"
                         leave-to-class="opacity-0"
                     >
                     {#if show}
                         <div class="fixed inset-0 transform transition-all" on:keyup={() => close()} on:click={() => close()}>
                             <div class="absolute inset-0 bg-gray-500 opacity-75" />
                         </div>
                     {/if}
                     </transition>
     
                     <transition
                         enter-active-class="ease-out duration-300"
                         enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                         leave-active-class="ease-in duration-200"
                         leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                         leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     >
                     {#if show}
                     <div
                         v-show="show"
                         class={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass[maxWidth]}`}
                     >

                         <slot />
                     </div>
                     {/if}
                     </transition>
                 </div>
            {/if}
        </transition>
    </teleport>
    