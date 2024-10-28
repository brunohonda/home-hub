import { LifeCycles, registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome@2.4.3/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@home-hub/hello-world",
  app: () => System.import<LifeCycles>("@home-hub/hello-world"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
