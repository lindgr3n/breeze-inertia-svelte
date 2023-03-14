<script>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.svelte";
import DeleteUserForm from './Partials/DeleteUserForm.svelte';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.svelte';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.svelte';

export let mustVerifyEmail;
export let status;
    // Remove linting warning coming from HandleInertiaRequests
    // https://inertiajs.com/shared-data
    /* svelte-ignore unused-export-let */
    export let ziggy;
    /* svelte-ignore unused-export-let */
    export let errors = {};
    /* svelte-ignore unused-export-let */
    export let auth = {};
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<slot />    <!-- Unsure why removing this gives warning-->
<BreezeAuthenticatedLayout>
    <h2 class="font-semibold text-xl text-gray-800 leading-tight" slot="header">
        Profile!!!
    </h2>
    
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    class="max-w-xl"
                />
            </div>

            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <UpdatePasswordForm class="max-w-xl" />
            </div>

            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <DeleteUserForm class="max-w-xl" />
            </div>
        </div>
    </div>
</BreezeAuthenticatedLayout>
