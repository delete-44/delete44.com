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
    description: "Personal site of software developer delete44(*OG version)",
    images: [
      {
        url: `${process.env.gravatarLink}?s=600`,
        width: 600,
        height: 600,
        alt: "A picture of the site author, Anthony",
      },
    ],
  },
};
