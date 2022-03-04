<script>
    import BreezeButton from "@/Components/Button.svelte";
    import BreezeGuestLayout from "@/Layouts/Guest.svelte";
    import BreezeInput from "@/Components/Input.svelte";
    import BreezeLabel from "@/Components/Label.svelte";
    import BreezeValidationErrors from "@/Components/ValidationErrors.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";

    export let errors = {};
    export let email;
    export let token;

    let err = {};
    $: {
        err = errors;
    }

    const form = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const onSubmit = () => {
        $form.post(route("password.update"), {
            onFinish: () => $form.reset("password", "password_confirmation"),
        });
    };
</script>

<svelte:head>
    <title>Reset Password</title>
</svelte:head>

<BreezeGuestLayout>
    <BreezeValidationErrors class="mb-4" errors={err} />

    <form on:submit|preventDefault={onSubmit}>
        <div>
            <BreezeLabel for="email" value="Email" />
            <BreezeInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                value={form.email}
                required
                autofocus
                autocomplete="username"
                on:input={(evt) => ($form.email = evt.detail)}
            />
        </div>

        <div class="mt-4">
            <BreezeLabel for="password" value="Password" />
            <BreezeInput
                id="password"
                type="password"
                class="mt-1 block w-full"
                value={form.password}
                required
                autocomplete="new-password"
                on:input={(evt) => ($form.password = evt.detail)}
            />
        </div>

        <div class="mt-4">
            <BreezeLabel for="password_confirmation" value="Confirm Password" />
            <BreezeInput
                id="password_confirmation"
                type="password"
                class="mt-1 block w-full"
                value={form.password_confirmation}
                required
                autocomplete="new-password"
                on:input={(evt) => ($form.password_confirmation = evt.detail)}
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <BreezeButton
                xclass:opacity-25={form.processing}
                disabled={form.processing}
            >
                Reset Password
            </BreezeButton>
        </div>
    </form>
</BreezeGuestLayout>
