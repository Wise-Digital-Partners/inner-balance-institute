export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d0e653cd12ea042a3f6b19",
                  title: "Sanity Studio",
                  name: "inner-balance-institute-studio",
                  apiId: "914f58d7-9cd7-4736-8d90-28a0db173a89",
                },
                {
                  buildHookId: "60d0e653ebc545d5fbb6eb2a",
                  title: "Blog Website",
                  name: "inner-balance-institute",
                  apiId: "46a739c0-23ce-463b-9917-cc035804d70d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/inner-balance-institute",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://inner-balance-institute.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
