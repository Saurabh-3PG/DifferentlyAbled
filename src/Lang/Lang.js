export const Lang = {
    "default": {
        "WebView": "Web View",
        "CodeExample": "Code example",
        "RenderedHTML": "Rendered HTML",
        "GitLink": "Git link",
        "AccessiblityTips": "Accessiblity tips"
    },
    "dropdown": {
        "heading": "Dropdown",
        "subheading": "Grouping items in select elements",
        "maindiscription": "For select elements with groups of options, the optgroup element can be used to indicate such groups. The label attribute of the optgroup element is used to provide a label for the group. This is especially useful for lists with many related options. In the example below, users can choose from lectures in one of three courses.",
        "GitLink": "https://github.com/saurabhanand3390/differentlyabled/blob/master/src/components/Dropdown.js",
        "AccessiblityTips": [
            {
                "tip": "Every form field should be connected to label properly"
            },
            {
                "tip": "Avoid creating drop-down using '<div>' tag."
            },
            {
                "tip": "If using '<div>' provide all the necessary aria[Ex: aria-label or aria-labelledby, role='listbox', tabindex='0', aria-activedescendant] attribute and options should have aria attributes [role='option', aria-selected='true/false']"
            },
            {
                "tip": "Use Axe or any other html validator for WCGA Standard "
            }
        ]
    },
    "slider": {
        "heading": "Slider",
        "subheading": "Grouping items in select elements",
        "maindiscription": "For select elements with groups of options, the optgroup element can be used to indicate such groups. The label attribute of the optgroup element is used to provide a label for the group. This is especially useful for lists with many related options. In the example below, users can choose from lectures in one of three courses.",
        "GitLink": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles",
        "AccessiblityTips": [
            {
                "tip": "Every form field should be connected to label properly"
            },
            {
                "tip": "Avoid creating drop-down using '<div>' tag."
            },
            {
                "tip": "If using '<div>' provide all the necessary aria[Ex: aria-label='Name of the select' or aria-labelledby, role='listbox', tabindex='0', aria-activedescendant] attribute and options should have aria attributes [role='option', aria-selected='true/false']"
            },
            {
                "tip": "Use Axe or any other html validator for WCGA Standard "
            }
        ]
    }
};