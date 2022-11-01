// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "aCLQYrzlSySeAAqRiqsv4Att",
        // If Server Location === US then:
        apiOptions: { region: "us" },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
});
