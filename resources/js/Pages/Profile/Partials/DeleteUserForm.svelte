<script setup>
    import DangerButton from "@/Components/DangerButton.svelte";
    import InputError from '@/Components/InputError.svelte';
    import InputLabel from '@/Components/InputLabel.svelte';
    import Modal from '@/Components/Modal.svelte';
    import SecondaryButton from '@/Components/SecondaryButton.svelte';
    import BreezeInput from '@/Components/Input.svelte';
    import { useForm } from "@inertiajs/svelte";
    import { tick } from "svelte/internal";

    let className = "";
    let confirmingUserDeletion = false;
    let passwordInput = null;
    
    export {className as class}
    
    const form = useForm({
        password: '',
    });

    async function confirmUserDeletion() {
        confirmingUserDeletion = true;
        await tick()
        passwordInput.focus();
    };

    function deleteUser() {
        $form.delete(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.focus(),
            onFinish: () => $form.reset(),
        });
    };

    function closeModal() {
        confirmingUserDeletion = false;
        $form.reset();
    };
</script>

<section class={`space-y-6 ${className}`}>
    <header>
        <h2 class="text-lg font-medium text-gray-900 ">Delete Account</h2>

        <p class="mt-1 text-sm text-gray-600 ">
            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
            your account, please download any data or information that you wish to retain.
        </p>
    </header>

    <DangerButton on:click={() => confirmUserDeletion()}>Delete Account</DangerButton>

    <Modal show={confirmingUserDeletion} on:close={closeModal}>
        <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900 ">
                Are you sure you want to delete your account?
            </h2>

            <p class="mt-1 text-sm text-gray-600 ">
                Once your account is deleted, all of its resources and data will be permanently deleted. Please
                enter your password to confirm you would like to permanently delete your account.
            </p>

            <div class="mt-6">
                <InputLabel for="password" value="Password" class="sr-only" />

                <BreezeInput
                    id="password"
                    bind:ref={passwordInput}
                    bind:value={$form.password}
                    type="password"
                    class="mt-1 block w-3/4"
                    placeholder="Password"
                    on:keyup={(e) => e.detail.key==='Enter' && deleteUser()}
                />

                <InputError message={$form.errors?.password} class="mt-2" />
            </div>

            <div class="mt-6 flex justify-end">
                <SecondaryButton on:click={() => closeModal()}> Cancel </SecondaryButton>

                <DangerButton
                    class={`ml-3 ${form.processing ? 'opacity-25': ''}`}
                    disabled={form.processing}
                    on:click={() => deleteUser()}
                >
                    Delete Account
                </DangerButton>
            </div>
        </div>
    </Modal>
</section>
