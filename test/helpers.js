const randomString = length => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: " Kale-ab Tessera",
    heading: "ABOUT THIS SITE"
  },
  {
    route: "/about",
    title: "About |  Kale-ab Tessera",
    heading: "ABOUT ME"
  },
  {
    route: "/projects",
    title: "Projects |  Kale-ab Tessera",
    heading: "PROJECTS"
  },
  {
    route: "/stats",
    title: "Stats |  Kale-ab Tessera",
    heading: "STATS"
  },
  {
    route: "/contact",
    title: "Contact |  Kale-ab Tessera",
    heading: "CONTACT"
  },
  {
    route: "/music",
    title: "Music |  Kale-ab Tessera",
    heading: "SOME BANDS THAT I LIKE"
  }
];

export { pages, randomString };
