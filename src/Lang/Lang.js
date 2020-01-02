export const Lang = {
    "default": {
        "heading": "Accessiblity Components",
        "WebView": "Web View",
        "CodeExample": "Code example",
        "RenderedHTML": "Rendered HTML",
        "GitLink": "Git link",
        "AccessiblityTips": "Accessiblity tips",
        "Home": {
            "heading": "What is accessibility?",
            "subheading": "Accessibility means the person with a disability must be able to obtain the information as fully, equally and independently as a person without a disability. Accessibility is the practice of making websites usable by as many people as possible. We might also think of accessibility as treating everyone the same and giving them equal opportunities, no matter what their ability or circumstances.",
            "discription": "Web accessibility encompasses all disabilities that affect access to the web:",
            "GitLink": "",
            "typeOfDisabilities": [
                {
                    "item": "Visual."
                },
                {
                    "item": "Auditory."
                },
                {
                    "item": "Physical."
                },
                {
                    "item": "Speech."
                },
                {
                    "item": "Cognitive."
                },
                {
                    "item": "Neurological."
                }
            ],
            "guideline": {
                "heading": "What are the Web Accessibility Guidelines?",
                "subheading": "Web accessibility guidelines define how to make web content accessible to people with disabilities so that web content is available to all individuals. <br> WCAG Web Content Accessibility Guidelines (WCAG)- It is developed through the World Wide Web Consortium (W3C) process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.",
                "discription": "Web Content Accessibility Guidelines 2.0- Web Content Accessibility Guidelines (WCAG) 2.0 defines how to make Web content more accessible to people with disabilities. There are four principles that provide the foundation for Web accessibility.",
                "principle": [
                    {
                        "item": "Perceivable- Information and user interface components must be presentable to users in ways they can perceive. <br> This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)."
                    },
                    {
                        "item": "Operable- User interface components and navigation must be operable. <br> This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)."
                    },
                    {
                        "item": "Understandable- Information and the operation of user interface must be understandable. <br> This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding).                    "
                    },
                    {
                        "item": "Robust- Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies."
                    }
                ],
            },
            "levelsOfConformance": {
                "heading": "The Web Content Accessibility Guidelines 2.0 are organised into three levels of conformance:",
                "subheading": "",
                "discription": "",
                "principle": [
                    {
                        "item": "Level A- the most basic web accessibility features."
                    },
                    {
                        "item": "Level B- deals with the biggest and most common barriers for disabled users."
                    },
                    {
                        "item": "Level C- the highest (and most complex) level of web accessibility."
                    },
                ],
            },
            "bestPractices": {
                "heading": "Some Best Practices for Accessible Content:",
                "subheading": "",
                "discription": "",
                "principle": [
                    {
                        "item": "Do not rely on color as a navigational tool or as the sole way to differentiate items."
                    },
                    {
                        "item": "Images should include Alt text in the markup/code; complex images should have more extensive descriptions near the image (perhaps as a caption or descriptive summaries built right into a neighboring paragraph)."
                    },
                    {
                        "item": "Functionality should be accessible through mouse and keyboard and be tagged to work with voice-control systems."
                    },
                    {
                        "item": "Provide transcripts for podcasts."
                    },
                    {
                        "item": "If you have a video on your site, you must provide visual access to the audio information through in-sync captioning."
                    },
                    {
                        "item": "Sites should have a skip navigation feature."
                    }
                ],
            },
            "manualAccessibility": {
                "heading": "Some Best Practices for Accessible Content:",
                "subheading": "",
                "discription": "",
                "waysToTest": [
                    {
                        "item": "Try to use the keyboard: If you are a gamer or excel expert, then this test must be easier for you. Try not to touch the mouse and access the website with the help of a keyboard. You can use the “Tab” key to switch between links, buttons and other actionable items. <br> “Tab”+”Shift” will take you where you were before."
                    },
                    {
                        "item": "Skip navigation: This may be useful for people with motor disabilities. By clicking Ctrl + Home you can move your focus to the top of the page."
                    },
                    {
                        "item": "Checking for captions: Check if a caption is available and make sure it is pretty much descriptive. Many times we come across links on the facebook page where the images or videos may take a long time to display but the captions will help us a lot."
                    },
                    {
                        "item": "Use field label: It is useful while filling a form, field label is what you will see while viewing a template. By using this, one can fill out the necessary information while signing up or ordering something online."
                    },
                    {
                        "item": "Changing the font size to large: Use large font size and continuer accessibility checking."
                    },
                    {
                        "item": "By turning off the cascading style sheet (CSS): CSS is basically used to describe the presentation of the document. By turning this off we can check for the background color, text style, and text presentation style."
                    }
                ],
            },
            "standards": {
                "heading": "",
                "subheading": "",
                "discription": "",
                levelA: {
                    heading: "WCAG 2.0 checklist Level A (Beginner)",
                    table: [
                        {
                            "class": "tableHeading",
                            "guideline": "Guideline",
                            "summary": "Summary"
                        },
                        {
                            "guideline": "1.1.1 – Non-text Content",
                            "summary": "Provide text alternatives for non-text content"
                        },
                        {
                            "guideline": "1.2.1 – Audio-only and Video-only (Pre-recorded)",
                            "summary": "Provide an alternative to video-only and audio-only content"
                        },
                        {
                            "guideline": "1.2.2 – Captions (Pre-recorded)",
                            "summary": "Provide captions for videos with audio"
                        },
                        {
                            "guideline": "1.2.3 – Audio Description or Media Alternative (Pre-recorded)",
                            "summary": "Video with audio has a second alternative"
                        },
                        {
                            "guideline": "1.3.1 – Info and Relationships",
                            "summary": "Logical structure"
                        },
                        {
                            "guideline": "1.3.2 – Meaningful Sequence",
                            "summary": "Present content in a meaningful order"
                        },
                        {
                            "guideline": "1.4.1 – Use of Colour",
                            "summary": "Don’t use presentation that relies solely on color"
                        },
                        {
                            "guideline": "1.4.2 – Audio Control",
                            "summary": "Don’t play audio automatically"
                        },
                        {
                            "guideline": "2.1.1 – Keyboard",
                            "summary": "Accessible by keyboard only"
                        },
                        {
                            "guideline": "2.1.2 – No Keyboard Trap",
                            "summary": "Don’t trap keyboard users"
                        },
                        {
                            "guideline": "2.2.1 – Timing Adjustable",
                            "summary": "Time limits have user controls"
                        },
                        {
                            "guideline": "2.2.2 – Pause, Stop, Hide",
                            "summary": "Provide user controls for moving content"
                        },
                        {
                            "guideline": "2.4.1 – Bypass Blocks",
                            "summary": "Provide a ‘Skip to Content’ link"
                        },
                        {
                            "guideline": "2.4.2 – Page Titled",
                            "summary": "Use helpful and clear page titles"
                        },
                        {
                            "guideline": "2.4.3 – Focus Order",
                            "summary": "Logical order"
                        },
                        {
                            "guideline": "2.4.4 – Link Purpose (In Context)",
                            "summary": "Every link’s purpose is clear from its context"
                        },
                        {
                            "guideline": "3.2.1 – On Focus",
                            "summary": "Elements do not change when they receive focus"
                        },
                        {
                            "guideline": "3.2.2 – On Input",
                            "summary": "Elements do not change when they receive input"
                        },
                        {
                            "guideline": "3.3.1 – Error Identification",
                            "summary": "Clearly identify input errors"
                        },
                        {
                            "guideline": "3.3.2 – Labels or Instructions",
                            "summary": "Label elements and give instructions"
                        },
                        {
                            "guideline": "4.1.1 – Parsing",
                            "summary": "No major code errors"
                        },
                        {
                            "guideline": "4.1.2 – Name, Role, Value",
                            "summary": "Build all elements for accessibility"
                        }
                    ]
                },
                "levelAA": {
                    heading: "WCAG 2.0 checklist Level AA (Intermediate)",
                    table: [
                        {
                            "class": "tableHeading",
                            "guideline": "Guideline",
                            "summary": "Summary"
                        },
                        {
                            "guideline": "1.2.4 – Captions (Live)",
                            "summary": "Live videos have captions"
                        },
                        {
                            "guideline": "1.2.5 – Audio Description (Pre-recorded)",
                            "summary": "Users have access to audio description for video content"
                        },
                        {
                            "guideline": "1.4.3 – Contrast (Minimum)",
                            "summary": "Contrast ratio between text and background is at least 4.5:1"
                        },
                        {
                            "guideline": "1.4.4 – Resize Text",
                            "summary": "Text can be resized to 200% without loss of content or function"
                        },
                        {
                            "guideline": "1.4.5 – Images of Text",
                            "summary": "Logical structureDon’t use images of text"
                        },
                        {
                            "guideline": "2.4.6 – Headings and Labels",
                            "summary": "Use clear headings and labels"
                        },
                        {
                            "guideline": "2.4.7 – Focus Visible",
                            "summary": "Ensure keyboard focus is visible and clear"
                        },
                        {
                            "guideline": "3.1.2 – Language of Parts",
                            "summary": "Tell users when the language on a page changes"
                        },
                        {
                            "guideline": "3.2.3 – Consistent Navigation",
                            "summary": "Use menus consistently"
                        },
                        {
                            "guideline": "3.2.4 – Consistent Identification",
                            "summary": "Use icons and buttons consistently"
                        }
                    ]
                }
            }
        }
    },
    modules: {
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
        },
        "checkbox": {
            "heading": "Checkbox",
            "subheading": "sub heading",
            "maindiscription": "main discription",
            "GitLink": "GitLink",
            "AccessiblityTips": [
                {
                    "tip": "Every form field should be connected to label properly"
                }
            ]
        },
        "inputText": {
            "heading": "Input type[text]",
            "subheading": "subheading",
            "maindiscription": "maindiscription",
            "GitLink": "GitLink",
            "AccessiblityTips": [
                {
                    "tip": "Every form field should be connected to label properly"
                }
            ]
        },
        "textarea": {
            "heading": "Textarea",
            "subheading": "subheading",
            "maindiscription": "maindiscription",
            "GitLink": "GitLink",
            "AccessiblityTips": [
                {
                    "tip": "Every form field should be connected to label properly"
                }
            ]
        },
    },
    components: {

    }
};