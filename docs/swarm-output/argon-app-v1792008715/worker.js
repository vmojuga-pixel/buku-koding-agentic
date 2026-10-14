export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'OK' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Status API</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100">
          <div class="container mx-auto p-4 pt-6 mt-10">
            <h1 class="text-3xl text-gray-900">Status API</h1>
            <p class="text-lg text-gray-600">Simple Status API</p>
            <a href="/health" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Check Status</a>
          </div>
        </body>
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
  },
};