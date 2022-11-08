# Laravel breeze-inertia-svelte

Base install of [breeze-inertia](https://laravel.com/docs/8.x/starter-kits#breeze-and-inertia) re-written to Svelte.

Beginner boilerplate to get up and running with svelte and inertia.

## Getting started

```bash
git clone git@github.com:lindgr3n/breeze-inertia-svelte.git
composer install
npm install
```

Create a MySql database or use an already existing.

Copy the `.env.example` and update the values to match your database name and authentication

```env
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Run the migrations

```bash
php artisan migrate
```

Generate the [application key](https://laravel.com/docs/9.x/encryption#configuration)

```
php artisan key:generate
```

This will update the `APP_KEY` variable in the env file.

## Starting

To run the application run `npm run watch` to build the client code. Then `php artisan serve` to start the backend.
Now you can go to `http://localhost:8000` to start the application.

## Other

The code could be refactored to be more optimized
