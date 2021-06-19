export const navLinks = {
  Home: {
    name: "Home",
    link: "/",
    type: "normal",
    sublinks: false,
  },
  Products: {
    name: "Products",
    link: "/products",
    type: "normal",
    sublinks: true,
    dpLinks: {
      Auticare: {
        name: "Auticare ›",
        link: "https://www.myauticare.com/",
      },
      Eduoskus: {
        name: "Edusokus ›",
        link: "https://www.eduoskus.com/",
      },
      XREvent: {
        name: "XR Event ›",
        link: "http://www.xr-event.com/",
      },
    },
  },
  Services: {
    name: "Services",
    link: "/services",
    type: "normal",
    sublinks: false,
  },
  Events: {
    name: "Events",
    link: "/events",
    type: "normal",
    sublinks: false,
  },
  Blogs: {
    name: "Blogs",
    link: "/blogs",
    type: "normal",
    sublinks: false,
  },
  Contact: {
    name: "Contact Us",
    link: "/contact",
    type: "rounded",
    sublinks: false,
  },
};
