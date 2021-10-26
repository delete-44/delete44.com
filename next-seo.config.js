export default {
  defaultTitle: "Delete44",
  description: "Personal site of software developer delete44",
  canonical: "https://www.delete44.com",
  twitter: {
    cardType: "summary",
    handle: "@_delete44",
  },
  openGraph: {
    type: "website",
    url: "https://www.delete44.com",
    title: "Delete44",
    description:
      "Hi, and welcome to my site - I'm a software developer who sepcialises in Ruby on Rails, and am learning as much as I can about accessible design. Have a look...",
    images: [
      {
        url: `${process.env.gravatarLink}?s=600`,
        width: 600,
        height: 600,
        alt: "A picture of the site author, delete44",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: `${process.env.gravatarLink}?s=16`,
    },
  ],
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }
  ]
};
