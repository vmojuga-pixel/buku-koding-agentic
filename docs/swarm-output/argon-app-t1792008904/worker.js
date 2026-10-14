export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return new Response('OK', { status: 200 });
    } else if (url.pathname === '/') {
      return new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cloudflare Worker</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100">
          <div class="container mx-auto p-4 pt-6 mt-10">
            <h1 class="text-3xl text-gray-900">Cloudflare Worker</h1>
            <p class="text-lg text-gray-600">Welcome to your Cloudflare Worker!</p>
          </div>
        </body>
        </html>
      `, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
        },
      });
    } else {
      return new Response('Not Found', { status: 404 });
    }
  },
};