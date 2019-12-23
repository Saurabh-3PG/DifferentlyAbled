export const Lang = {
    "default": {
        "heading": "Accessiblity Components",
        "WebView": "Web View",
        "CodeExample": "Code example",
        "RenderedHTML": "Rendered HTML",
        "GitLink": "Git link",
        "AccessiblityTips": "Accessiblity tips",
        "Home": {
            "heading": "Accessibility - Make the web usable by everyone",
            "subheading": "By default, HTML is accessible, if used correctly.",
            "discription": "When someone describes a site as \"accessible\", they mean that any user can use all its features and content, regardless of how the user accesses the web — even and especially users with physical or mental impairments.",
            "GitLink": "https://github.com/saurabhanand3390/differentlyabled/blob/master/src/components/Dropdown.js"
        }
    },
    modules: {
        "IntroPage": {
            "heading": "What is accessibility?",
            "maindiscription": "Accessibility means the person with a disability must be able to obtain the information as fully, equally and independently as a person without a disability. Accessibility is the practice of making websites usable by as many people as possible. We might also think of accessibility as treating everyone the same and giving them equal opportunities, no matter what their ability or circumstances.",
            "typeOfdisabilities": "Web accessibility encompasses all disabilities that affect access to the web:",
            "typeOfdisabilitiesList":[
                {
                    "type": "Visual."
                },
                {
                    "type": "Auditory."
                },
                {
                    "type": "Physical."
                },
                {
                    "type": "Speech."
                },
                {
                    "type": "Cognitive."
                },
                {
                    "type": "Neurological."
                }
            ],
            "guideline": "What are the Web Accessibility Guidelines?",
            "guidelineDescription": "Web accessibility guidelines define how to make web content accessible to people with disabilities so that web content is available to all individuals. <br> WCAG Web Content Accessibility Guidelines (WCAG)- It is developed through the World Wide Web Consortium (W3C) process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.",
            "guidedlineSubheading": "Web Content Accessibility Guidelines 2.0- Web Content Accessibility Guidelines (WCAG) 2.0 defines how to make Web content more accessible to people with disabilities. There are four principles that provide the foundation for Web accessibility.",
            "principle":[
                {
                    "principle1": "Perceivable- Information and user interface components must be presentable to users in ways they can perceive. <br> This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)."
                },
                {
                    "principle2": "Operable- User interface components and navigation must be operable. <br> This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)."
                },
                {
                    "principle3": "Understandable- Information and the operation of user interface must be understandable. <br> This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding).                    "
                },
                {
                    "principle4": "Robust- Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies."
                }
            ],
            "threeLevel": "The Web Content Accessibility Guidelines 2.0 are organised into three levels of conformance:",
            "principle":[
                {
                    "levelA": "Level A- the most basic web accessibility features."
                },
                {
                    "levelB": "Level B- deals with the biggest and most common barriers for disabled users."
                },
                {
                    "levelC": "Level C- the highest (and most complex) level of web accessibility."
                },
            ],
            "bestPractices": "Some Best Practices for Accessible Content:",
            "principle":[
                {
                    "point1": "Do not rely on color as a navigational tool or as the sole way to differentiate items."
                },
                {
                    "point2": "Images should include Alt text in the markup/code; complex images should have more extensive descriptions near the image (perhaps as a caption or descriptive summaries built right into a neighboring paragraph)."
                },
                {
                    "point3": "Functionality should be accessible through mouse and keyboard and be tagged to work with voice-control systems."
                },
                {
                    "point4": "Provide transcripts for podcasts."
                },
                {
                    "point5": "If you have a video on your site, you must provide visual access to the audio information through in-sync captioning."
                },
                {
                    "point6": "Sites should have a skip navigation feature."
                },
            ],
            "manualAccessibility": "Some Best Practices for Accessible Content:",
            "waysToTest":[
                {
                    "way1": "Try to use the keyboard: If you are a gamer or excel expert, then this test must be easier for you. Try not to touch the mouse and access the website with the help of a keyboard. You can use the “Tab” key to switch between links, buttons and other actionable items. <br> “Tab”+”Shift” will take you where you were before."
                },
                {
                    "way2": "Skip navigation: This may be useful for people with motor disabilities. By clicking Ctrl + Home you can move your focus to the top of the page."
                },
                {
                    "way3": "Checking for captions: Check if a caption is available and make sure it is pretty much descriptive. Many times we come across links on the facebook page where the images or videos may take a long time to display but the captions will help us a lot."
                },
                {
                    "way4": "Use field label: It is useful while filling a form, field label is what you will see while viewing a template. By using this, one can fill out the necessary information while signing up or ordering something online."
                },
                {
                    "way5": "Changing the font size to large: Use large font size and continuer accessibility checking."
                },
                {
                    "way6": "By turning off the cascading style sheet (CSS): CSS is basically used to describe the presentation of the document. By turning this off we can check for the background color, text style, and text presentation style."
                },
            ],
            "tableHeading1": "WCAG 2.0 checklist Level A (Beginner)",
            "table": [
                {
                    "guideline": "Guideline",
                    "summary": "Summary"
                },
                {
                    "heading": "1.1.1 – Non-text Content",
                    "disc": "Provide text alternatives for non-text content"
                },
                {
                    "heading": "1.2.1 – Audio-only and Video-only (Pre-recorded)",
                    "disc": "Provide an alternative to video-only and audio-only content"
                },
                {
                    "heading": "1.2.2 – Captions (Pre-recorded)",
                    "disc": "Provide captions for videos with audio"
                },
                {
                    "heading": "1.2.3 – Audio Description or Media Alternative (Pre-recorded)",
                    "disc": "Video with audio has a second alternative"
                },
                {
                    "heading": "1.3.1 – Info and Relationships",
                    "disc": "Logical structure"
                },
                {
                    "heading": "1.3.2 – Meaningful Sequence",
                    "disc": "Present content in a meaningful order"
                },
                {
                    "heading": "1.4.1 – Use of Colour",
                    "disc": "Don’t use presentation that relies solely on color"
                },
                {
                    "heading": "1.4.2 – Audio Control",
                    "disc": "Don’t play audio automatically"
                },
                {
                    "heading": "2.1.1 – Keyboard",
                    "disc": "Accessible by keyboard only"
                },
                {
                    "heading": "2.1.2 – No Keyboard Trap",
                    "disc": "Don’t trap keyboard users"
                },
                {
                    "heading": "2.2.1 – Timing Adjustable",
                    "disc": "Time limits have user controls"
                },
                {
                    "heading": "2.2.2 – Pause, Stop, Hide",
                    "disc": "Provide user controls for moving content"
                },
                {
                    "heading": "2.4.1 – Bypass Blocks",
                    "disc": "Provide a ‘Skip to Content’ link"
                },
                {
                    "heading": "2.4.2 – Page Titled",
                    "disc": "Use helpful and clear page titles"
                },
                {
                    "heading": "2.4.3 – Focus Order",
                    "disc": "Logical order"
                },
                {
                    "heading": "2.4.4 – Link Purpose (In Context)",
                    "disc": "Every link’s purpose is clear from its context"
                },
                {
                    "heading": "3.2.1 – On Focus",
                    "disc": "Elements do not change when they receive focus"
                },
                {
                    "heading": "3.2.2 – On Input",
                    "disc": "Elements do not change when they receive input"
                },
                {
                    "heading": "3.3.1 – Error Identification",
                    "disc": "Clearly identify input errors"
                },
                {
                    "heading": "3.3.2 – Labels or Instructions",
                    "disc": "Label elements and give instructions"
                },
                {
                    "heading": "4.1.1 – Parsing",
                    "disc": "No major code errors"
                },
                {
                    "heading": "4.1.2 – Name, Role, Value",
                    "disc": "Build all elements for accessibility"
                },

            ],
            "tableHeading2": "WCAG 2.0 checklist Level AA (Intermediate)",
            "table": [
                {
                    "guideline": "Guideline",
                    "summary": "Summary"
                },
                {
                    "heading": "1.2.4 – Captions (Live)",
                    "disc": "Live videos have captions"
                },
                {
                    "heading": "1.2.5 – Audio Description (Pre-recorded)",
                    "disc": "Users have access to audio description for video content"
                },
                {
                    "heading": "1.4.3 – Contrast (Minimum)",
                    "disc": "Contrast ratio between text and background is at least 4.5:1"
                },
                {
                    "heading": "1.4.4 – Resize Text",
                    "disc": "Text can be resized to 200% without loss of content or function"
                },
                {
                    "heading": "1.4.5 – Images of Text",
                    "disc": "Logical structureDon’t use images of text"
                },
                {
                    "heading": "2.4.6 – Headings and Labels",
                    "disc": "Use clear headings and labels"
                },
                {
                    "heading": "2.4.7 – Focus Visible",
                    "disc": "Ensure keyboard focus is visible and clear"
                },
                {
                    "heading": "3.1.2 – Language of Parts",
                    "disc": "Tell users when the language on a page changes"
                },
                {
                    "heading": "3.2.3 – Consistent Navigation",
                    "disc": "Use menus consistently"
                },
                {
                    "heading": "3.2.4 – Consistent Identification",
                    "disc": "Use icons and buttons consistently"
                },
            ]
        },
    
        "InputPage": {
            "heading": "Input type[text]",
            "subheading": "",
            "maindiscription": "",
            "GitLink": "",
            "AccessiblityTips": [
                {
                    "tip": "Every form field should be connected to label properly"
                }
            ]
        },
        "Textarea": {
            "heading": "Textarea",
            "subheading": "",
            "maindiscription": "",
            "GitLink": "",
            "AccessiblityTips": [
                {
                    "tip": "Every form field should be connected to label properly"
                }
            ]
        }
    },
    "components": {

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

    }
};