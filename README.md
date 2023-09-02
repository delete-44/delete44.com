# Delete44 Website

This is a personal site - you can view it at [delete44.com](https://www.delete44.com).

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Local Development

Install dependencies with

```bash
$ npm install
```

To run the development server, use

```bash
$ npm run dev
 > ...
 > ready - started server on 0.0.0.0:3000, url: http://localhost:3000
 > info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
 > event - compiled successfully
```

Then you can visit [localhost:3000](localhost:3000) to view the development server. This will hot reload to reflect changes you make.

## SEO

Default SEO for the site is established in `next-seo.config.js` - this is imported into `pages/_app.js`. Any tags included here can be overwritten on individual pages as needed.

## Styling

This app is designed to be "mobile-first" and "light-theme-first"; ie the default styles for the site are designed to fit a mobile device with light theme. These are then overwritten in `styles/globals.scss` should the user be using a large screen or prefer dark themes.

Outside of the custom scss in `styles/globals.scss`, styling is completed using [Tachyons](https://tachyons.io/). This generates a huge amount of CSS micro-classes, and can be quite overwhelming if you're coming in blind. A helper website called [Tachyons TLDR](https://tachyons-tldr.vercel.app) is useful for finding the required syntax.

## Accessibility

Accessibility is a **fundamental** consideration when working on this website. Any changes **must** be made in accordance with [AA WCAG2.1](https://www.w3.org/TR/WCAG21/) at the bare minimum.

## Deployment

The app is hosted via [Netlify](https://www.netlify.com/), which runs helpful checks for dead links etc prior to deployment. It also spins up temporary instances for each pull request, which can be used to test changes in a live environment.
