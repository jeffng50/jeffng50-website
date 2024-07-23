# jeffng50

Portfolio and blog site of mine. Check it out at [jeffng50.xyz](https://jeffng50.xyz)!

Built with [SvelteKit](https://kit.svelte.dev/) and followed this [tutorial](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) (thanks Josh!) to make a markdown-based blog.

## Developing

Install dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

Publish `/build`, for me I published it on [Cloudflare Pages](https://pages.cloudflare.com/).

I installed an [static site generation adapter](https://kit.svelte.dev/docs/adapter-static) to deploy my site statically.
