// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Raj's Notes",
  description: "A personal space for thoughts, favorite films, and ideas.",
  editThisNote: {
    // Optional: edit notes via GitHub link
    url: "https://github.com/rajdevworks/notes/edit/main/{{file}}",
  },
  staticAssets: {
    paths: { "public/": "/" },
  },
  ignores: ["README.md"],
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    // Optional top links
    links: [
      {
        url: "https://github.com/rajdevworks/notes",
        label: "GitHub",
        icon: "github",
      },
    ],

    // Main sections
    sections: [
      {
        label: "Thoughts",
        groups: [
          {
            label: "All Thoughts",
            query: createNotesQuery({
              pattern: "^/Thoughts/",
              tree: true,      // shows notes hierarchically
              expanded: 2,     // expand first 2 levels by default
            }),
          },
        ],
      },
      {
        label: "Films",
        groups: [
          {
            label: "All Films",
            query: createNotesQuery({
              pattern: "^/Films/",
              tree: false,     // flat list, usually fewer notes
              expanded: true,
            }),
          },
        ],
      },
      {
        label: "Pages",
        groups: [
          {
            label: "All Pages",
            query: createNotesQuery({
              pattern: "^/Pages/",
              tree: false,
              expanded: false, // collapsed by default
            }),
          },
        ],
      },
    ],
  },

  tags: {
    map: {
      thoughts: "Thoughts",
      films: "Films",
      pages: "Pages",
    },
  },
});
