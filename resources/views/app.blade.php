<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="https://www.villahermosa.gob.mx/wp-content/uploads/2021/09/cropped-ico-centro-512x512px-192x192.png" sizes="192x192">
        <link rel="icon" href="https://www.villahermosa.gob.mx/wp-content/uploads/2021/09/cropped-ico-centro-512x512px-32x32.png" sizes="32x32">
        <link rel="apple-touch-icon" href="https://www.villahermosa.gob.mx/wp-content/uploads/2021/09/cropped-ico-centro-512x512px-180x180.png">
        <meta name="msapplication-TileImage" content="https://www.villahermosa.gob.mx/wp-content/uploads/2021/09/cropped-ico-centro-512x512px-270x270.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/css/alert.css', 'resources/css/drawer.css','resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
