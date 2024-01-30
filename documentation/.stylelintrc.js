module.exports = {
    extends: "stylelint-config-recommended",
    plugins: ["stylelint-order"],
    rules: {
        // Define the overall order of property types
        "order/order": [
            "custom-properties",
            "dollar-variables",
            "declarations",
            "at-variables",
            "rules",
            "at-rules",
        ],
        // Define the order of specific properties within declarations
        "order/properties-order": [
            // Box Model
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "display",
            "float",
            "clear",
            // Flexbox
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-flow",
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-content",
            "align-items",
            // Grid
            "grid",
            "grid-area",
            "grid-template",
            "grid-template-areas",
            "grid-template-rows",
            "grid-template-columns",
            "grid-row",
            "grid-row-start",
            "grid-row-end",
            "grid-column",
            "grid-column-start",
            "grid-column-end",
            "grid-auto-rows",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-gap",
            "gap",
            // Dimensions
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            // Typography
            "font",
            "font-family",
            "font-size",
            "font-weight",
            "line-height",
            "text-align",
            "text-transform",
            // Other Visual Styles
            "color",
            "background",
            "border",
            "border-radius",
            "box-shadow",
            // Margins and Padding
            "margin",
            "padding",
            // Positioning
            "overflow",
            "overflow-x",
            "overflow-y",
            // Animations and Transitions
            "transition",
            "animation",
            // Other
            "content",
            // Pseudo-elements and Pseudo-classes
            "::before",
            "::after",
            ":hover",
            ":focus",
            // Media Queries
            "@media",
        ],
    },
    "ignoreFiles": ["**/build/**"]
};
