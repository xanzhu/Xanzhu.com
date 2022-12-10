export default defineNuxtRouteMiddleware((req, res) => {
  if (req.path == "/") {
    return navigateTo("/en", { redirectCode: 301 });
  }
});
