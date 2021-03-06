const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#343BFF",
      "@white": "#ffffff",
      "@light-blue": "#A3CDFD",
      "@blue-color2": "#DFDFFA",
      "@gray": "#dcdce2",
      "@text-color2": "#737389",
      "@font-family": ' "Open Sans", sans-serif !important',
      "@font-size-base": "14px",
      "@font-size-sm": "0.928em",
      "@text-color": "#555555",
      "@border-radius-base": "4px",
      "@border-color-base": "#A2A2A2",
      "@layout-body-background": "#EBEEF3",
      "@layout-header-background": "#Ffffff",

      "@menu-dark-selected-item-icon-color": "@text-color",
      "@menu-dark-selected-item-text-color": "@text-color",
      "@menu-item-color": "@text-color",
      "@menu-highlight-color": "@primary-color",
      "@menu-item-active-bg": "@blue-color2",
      "@menu-icon-size": "20px",

      "@input-height-base": "40px",
      "@breadcrumb-base-color": "@text-color2",
      "@breadcrumb-last-item-color": "@text-color",
      "@breadcrumb-font-size": "0.858em",
      "@btn-default-color": "@primary-color",
      "@btn-default-border": "@primary-color",
      "@tabs-highlight-color": "@text-color",
      "@tabs-horizontal-padding": "10px 16px",
      "@tabs-title-font-size": "1.2857rem",
      "@table-header-bg": "@gray",
      "@table-header-color": "@text-color",
      "@table-padding-vertical": "10px",
      "@table-border-radius-base": "5px",
    },
  })
);
