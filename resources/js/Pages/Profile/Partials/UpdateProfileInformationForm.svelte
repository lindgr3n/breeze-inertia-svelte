<script setup>
    import InputError from '@/Components/InputError.svelte';
    import InputLabel from '@/Components/InputLabel.svelte';
    import PrimaryButton from '@/Components/Button.svelte';
    import BreezeInput from '@/Components/Input.svelte';
    import { Link, useForm, page } from '@inertiajs/svelte';
    import { fade } from 'svelte/transition';

    const user = $page.props.auth.user
    let className = "";

    export let mustVerifyEmail;
    export let status;
    export {className as class}   

    const form = useForm({
        name: user.name,
        email: user.email,
    });
</script>

<section class={className}>
    <header>
        <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>

        <p class="mt-1 text-sm text-gray-600">
            Update your account's profile information and email address.
        </p>
    </header>
    
    <form on:submit|preventDefault={$form.patch(route('profile.update'))} class="mt-6 space-y-6">
        <div>
            <InputLabel for="name" value="Name" />

            <BreezeInput
                id="name"
                type="text"
                class="mt-1 block w-full"
                bind:value={$form.name}
                required
                autofocus
                autocomplete="name"
            />

            <InputError class="mt-2" message={$form.errors?.name} />
        </div>

        <div>
            <InputLabel for="email" value="Email" />

            <BreezeInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                required
                autocomplete="username"
            />

            <InputError class="mt-2" message={$form.errors?.email} />
        </div>

        {#if mustVerifyEmail && user.email_verified_at === null}
                <div>
                    <p class="text-sm mt-2 text-gray-800 ">
                        Your email address is unverified.
                        <Link
                            href={route('verification.send')}
                            method="post"
                            as="button"
                            class="underline text-sm text-gray-600  hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                        >
                            Click here to re-send the verification email.
                        </Link>
                    </p>
    
                    {#if status === 'verification-link-sent'}
                        <div
                            
                            class="mt-2 font-medium text-sm text-green-600 "
                        >
                            A new verification link has been sent to your email address.
                        </div>
                    {/if}
                </div>
        {/if}

        <div class="flex items-center gap-4">
            <PrimaryButton disabled={$form.processing}>Save</PrimaryButton>

            {#if $form.recentlySuccessful}
                    <p class="text-sm text-gray-600 " transition:fade>Saved.</p>
            {/if}
            <!-- <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out"> -->
            <!-- </Transition> -->
        </div>
    </form>
</section>
