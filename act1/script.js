let registration = null;

function register_service_worker() {
  if ("serviceWorker" in navigator) {
    window.navigator.serviceWorker
      .register("./sw.js", { scope: "./" })
      .then((res) => {
        registration = res;
        console.log("Service Worker successfully registered.");
      })
      .catch((err) => {
        console.log("Could not register service worker.");
      });
  }
}

window.addEventListener("click", () => {
  fetch("./obj.jpg").then((res) => console.log("From script.js: ", res));
});

register_service_worker();
// unregister_service_worker();
