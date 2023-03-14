<script setup>
    import InputError from '@/Components/InputError.svelte';
    import InputLabel from '@/Components/InputLabel.svelte';
    import PrimaryButton from '@/Components/Button.svelte';
    import BreezeInput from '@/Components/Input.svelte';
    import { useForm } from '@inertiajs/svelte';

    let className = "";
    let passwordInput = null;
    let currentPasswordInput = null;

    export {className as class}

    const form = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    function updatePassword() {
        $form.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => $form.reset(),
            onError: () => {
                console.log($form.errors);
                if ($form.errors.password) {
                    $form.reset('password', 'password_confirmation');
                    passwordInput.focus();
                }
                if ($form.errors.current_password) {
                    $form.reset('current_password');
                    currentPasswordInput.focus();
                }
            },
        });
    };
</script>

<section class={className}>
    <header>
        <h2 class="text-lg font-medium text-gray-900">Update Password</h2>

        <p class="mt-1 text-sm text-gray-600">
            Ensure your account is using a long, random password to stay secure.
        </p>
    </header>
    <form on:submit|preventDefault={() => updatePassword()}  class="mt-6 space-y-6">
        <div>
            <InputLabel for="current_password" value="Current Password" />

            <BreezeInput
                id="current_password"
                bind:ref={currentPasswordInput}
                bind:value={$form.current_password}
                type="password"
                class="mt-1 block w-full"
                autocomplete="current-password"
            />

            <InputError message={$form.errors?.current_password} class="mt-2" />
        </div>

        <div>
            <InputLabel for="password" value="New Password" />

            <BreezeInput
                id="password"
                bind:ref={passwordInput}
                bind:value={$form.password}
                type="password"
                class="mt-1 block w-full"
                autocomplete="new-password"
            />

            <InputError message={$form.errors?.password} class="mt-2" />
        </div>

        <div>
            <InputLabel for="password_confirmation" value="Confirm Password" />

            <BreezeInput
                id="password_confirmation"
                bind:value={$form.password_confirmation}
                type="password"
                class="mt-1 block w-full"
                autocomplete="new-password"
            />

            <InputError message={$form.errors?.password_confirmation} class="mt-2" />
        </div>

        <div class="flex items-center gap-4">
            <PrimaryButton :disabled="form.processing">Save</PrimaryButton>
            {#if $form.recentlySuccessful}
                    <p class="text-sm text-gray-600">Saved.</p>
            {/if}
            <!-- <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out"> -->
            <!-- </Transition> -->
        </div>
    </form>
</section>
