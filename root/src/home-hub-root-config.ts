import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome@2.4.3/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@home-hub/navbar",
//   app: () => System.import("@home-hub/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
