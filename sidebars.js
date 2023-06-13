/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Overview",
      collapsible: false,
      items: [
        "overview/market-context",
        "overview/cogito-in-a-nutshell",
        "overview/overview-of-stablecoins",
        "overview/price-stabilization-mechanisms",
      ],
    },
    {
      type: "category",
      label: "Cogito Fundamentals",
      collapsible: false,
      items: [
        "fundamentals/origins",
        "fundamentals/design",
        "fundamentals/the-index",
      ],
    },
    {
      type: "category",
      label: "Cogito Equations",
      collapsible: false,
      items: [
        "equations/capital-adequacy-ratio",
        "equations/adp-and-reserve-management",
        "equations/asp-and-open-market-operations",
      ],
    },
    {
      type: "doc",
      label: "Conclusion",
      id: "conclusion/conclusion",
    },
  ],
};

module.exports = sidebars;
