export const Lang = {
    default: {
        "heading": "Accessiblity Components",
        "WebView": "Web View",
        "CodeExample": "Code example",
        "RenderedHTML": "Rendered HTML",
        "GitLink": "Git link",
        "AccessiblityTips": "Accessiblity tips"
    },
    modules: {
        home: {
            name: "Introduction",
            heading: "What is accessibility?",
            subheading: "Accessibility means the person with a disability must be able to obtain the information as fully, equally and independently as a person without a disability. Accessibility is the practice of making websites usable by as many people as possible. We might also think of accessibility as treating everyone the same and giving them equal opportunities, no matter what their ability or circumstances.",
            discription: "Web accessibility encompasses all disabilities that affect access to the web:",
            GitLink: "",
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
                "subheading": "Web accessibility guidelines define how to make web content accessible to people with disabilities so that web content is available to all individuals. \n WCAG Web Content Accessibility Guidelines (WCAG)- It is developed through the World Wide Web Consortium (W3C) process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.",
                "discription": "<b>Web Content Accessibility Guidelines 2.0-</b> Web Content Accessibility Guidelines (WCAG) 2.0 defines how to make Web content more accessible to people with disabilities. There are four principles that provide the foundation for Web accessibility.",
                "principle": [
                    {
                        "item": "<b>Perceivable-</b> Information and user interface components must be presentable to users in ways they can perceive. \n This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)."
                    },
                    {
                        "item": "<b>Operable-</b> User interface components and navigation must be operable. \n This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)."
                    },
                    {
                        "item": "<b>Understandable-</b> Information and the operation of user interface must be understandable. \n This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding).                    "
                    },
                    {
                        "item": "<b>Robust-</b> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies."
                    }
                ],
            },
            "levelsOfConformance": {
                "heading": "The Web Content Accessibility Guidelines 2.0 are organised into three levels of conformance:",
                "subheading": "",
                "discription": "",
                "principle": [
                    {
                        "item": "<b>Level A-</b> the most basic web accessibility features."
                    },
                    {
                        "item": "<b>Level B-</b> deals with the biggest and most common barriers for disabled users."
                    },
                    {
                        "item": "<b>Level C-</b> the highest (and most complex) level of web accessibility."
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
                "heading": "Below are a few ways to test website accessibility manually:",
                "subheading": "",
                "discription": "",
                "waysToTest": [
                    {
                        "item": "<b>Try to use the keyboard:</b> If you are a gamer or excel expert, then this test must be easier for you. Try not to touch the mouse and access the website with the help of a keyboard. You can use the “Tab” key to switch between links, buttons and other actionable items. \n “Tab”+”Shift” will take you where you were before."
                    },
                    {
                        "item": "<b>Skip navigation:</b> This may be useful for people with motor disabilities. By clicking Ctrl + Home you can move your focus to the top of the page."
                    },
                    {
                        "item": "<b>Checking for captions:</b> Check if a caption is available and make sure it is pretty much descriptive. Many times we come across links on the facebook page where the images or videos may take a long time to display but the captions will help us a lot."
                    },
                    {
                        "item": "<b>Use field label:</b> It is useful while filling a form, field label is what you will see while viewing a template. By using this, one can fill out the necessary information while signing up or ordering something online."
                    },
                    {
                        "item": "<b>Changing the font size to large:</b> Use large font size and continuer accessibility checking."
                    },
                    {
                        "item": "<b>By turning off the cascading style sheet (CSS):</b> CSS is basically used to describe the presentation of the document. By turning this off we can check for the background color, text style, and text presentation style."
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
        },
        "dropdown": {
            name: "Dropdown",
            heading: "Dropdown",
            subheading: "",
            maindiscription: "A drop-down list (abbreviated drop-down; also known as a drop-down menu, drop menu, pull-down list, picklist) is a graphical control element similar to a list box that allows the user to choose one value from a list. When a drop-down list is inactive, it displays a single value. When activated, it displays (drops down) a list of values, from which the user may select one ",
            gitLink: "https://github.com/saurabhanand3390/differentlyabled/blob/master/src/components/Dropdown.js",
            accessiblity:
            {
                heading: "How to test dropdown in different browser / devices with screenreader",
                discription: "",
                tips: [
                    {
                        for: "NVDA + Chrome and IE + JAWS",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the dropdown."
                            },
                            {
                                step: "Press ‘Enter’ key to open the dropdown list."
                            },
                            {
                                step: "Press ‘Up arrow’, ‘Down arrow’ keys to navigate the different menu items."
                            },
                            {
                                step: "Press ‘Enter’ key to select the item from the list."
                            },
                            {
                                step: "Press ‘Esc’ key to close the dropdown list."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + Safari",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the dropdown."
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to open the dropdown list."
                            },
                            {
                                step: "Press ‘Up arrow’, ‘Down arrow’ keys to navigate the different menu items."
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to select the item from the list."
                            },
                            {
                                step: "Press ‘Esc’ key to close the dropdown list."
                            }
                        ]
                    },
                    {
                        for: "Talkback + Android",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the dropdown."
                            },
                            {
                                step: "Press ‘Alt’ + ‘Enter’ keys to open the dropdown list."
                            },
                            {
                                step: "Press ‘Up arrow’, ‘Down arrow’ keys to navigate the different menu items."
                            },
                            {
                                step: "Press ‘Alt’ + ‘Enter’ keys to select the item from the list."
                            },
                            {
                                step: "Press ‘Esc’ key to close the dropdown list."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + iPhone",
                        steps: [
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Right arrow’ keys to until focus reaches to dropdown."
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to open the dropdown list."
                            },
                            {
                                step: "Press ‘Up arrow’, ‘Down arrow’ keys to navigate the different menu items"
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to select the item from the list."
                            },
                            {
                                step: "Press ‘Esc’ key to close the dropdown list."
                            }
                        ]
                    }
                ]
            }
        },
        "slider": {
            name: "Slider",
            heading: "Slider",
            subheading: "",
            maindiscription: "A slider is a user interface pattern that allows users to select a value between a continuous scale (or at least the appearance of a continuous scale) between a minimum and maximum value. The user moves the slider horizontally or vertically to select a value. The design of this control is highly visual in the way it is portrayed on the screen, inviting the user to literally slide the control along the slider axis, but it works with the arrow keys on the keyboard as well.",
            gitLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles",
            accessiblity:
            {
                heading: "How to test slider in different browser / devices with screenreader",
                discription: "",
                tips: [
                    {
                        for: "NVDA + Chrome and IE + JAWS",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the slider."
                            },
                            {
                                step: "Press ‘Right/ Up arrow’ keys to move the slider in forward direction and press ‘Left/ Down arrow’ keys to move the slider in backward direction."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + Safari",
                        steps: [
                            {
                                step: "Press the ‘Tab’ key until the focus reaches the slider."
                            },
                            {
                                step: "Press ‘Shift’ + ‘Control’ + ‘Option’ + ‘Down arrow’ keys to interact with the slider."
                            },
                            {
                                step: "To move the slider in forward direction press ‘Control’ + ‘Option’ + ‘Right arrow’ keys and to move in a backward direction  press ‘Control’ + ‘Option’ + Left arrow’ key."
                            },
                            {
                                step: "To move away the focus from the slider press ‘Shift’ + ‘Control’ + ‘Option’ + Up arrow’ keys."
                            }
                        ]
                    },
                    {
                        for: "Talkback + Android",
                        steps: [
                            {
                                step: "Press the ‘Tab’ key until the focus reaches the slider."
                            },
                            {
                                step: "Press the volume key to move the slider."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + iPhone",
                        steps: [
                            {
                                step: "Press ‘Control’ + ‘Option’ + right arrow’ keys to until focus reaches to the slider."
                            },
                            {
                                step: "Press ‘Shift’ + ‘Control’ + ‘Option’ + ‘Down arrow’ keys to interact with the slider."
                            },
                            {
                                step: "To move the slider in forward direction press ‘Control’ + ‘Option’ + ‘Right arrow’ keys and to move in a backward direction  press ‘Control’ + ‘Option’ + Left arrow’ key."
                            }
                        ]
                    }
                ]
            }
        },
        "checkbox": {
            name: "Checkbox",
            heading: "Checkbox",
            subheading: "",
            maindiscription: "A checkbox (check box, tickbox, tick box) is a GUI widget that permits the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. For example, the user may have to answer 'yes' (checked) or 'no' (not checked) on a simple yes/no question. Check boxes are shown checked (depending on the GUI). A caption describing the meaning of the checkbox is normally shown adjacent to the checkbox. Inverting the state of a checkbox is done by clicking the mouse on the box, or the caption, or by using a keyboard shortcut, such as the space bar.",
            gitLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles",
            accessiblity:
            {
                heading: "How to test checkbox in different browser / devices with screenreader",
                discription: "",
                tips: [
                    {
                        for: "NVDA + Chrome and IE + JAWS",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the checkbox."
                            },
                            {
                                step: "Press ‘Space’ key to toggles checkbox between checked and unchecked states."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + Safari",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the checkbox."
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to  toggles checkbox between checked and unchecked states."
                            }
                        ]
                    },
                    {
                        for: "Talkback + Android",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the checkbox."
                            },
                            {
                                step: "Press ‘Alt’ + ‘Space’ keys to toggles checkbox between checked and unchecked states."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + iPhone",
                        steps: [
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Right arrow’ keys to until focus reaches the checkbox."
                            },
                            {
                                step: "Press ‘Control’ + ‘Option’ + ‘Space’ keys to interact with the checkbox."
                            }
                        ]
                    }
                ]
            }
        },
        "inputText": {
            name: "Input Text",
            heading: "Input Text",
            subheading: "",
            maindiscription: "",
            gitLink: "GitLink",
            accessiblity:
            {
                heading: "How to test text input in different browser / devices with screenreader",
                discription: "",
                tips: [
                    {
                        for: "NVDA + Chrome, IE + JAWS and Voiceover + Safari",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the input/ text area."
                            },
                            {
                                step: "Type into the textbox."
                            }
                        ]
                    },
                    {
                        for: "Talkback + Android",
                        steps: [
                            {
                                step: "Press ‘Tab’ key until focus reaches the input/ text area."
                            },
                            {
                                step: "Type into the textbox."
                            }
                        ]
                    },
                    {
                        for: "Voiceover + iPhone",
                        steps: [
                            {
                                step: "‘Control’ + ‘Option’ + ‘Right arrow’ keys to until focus reaches the input/ text area."
                            },
                            {
                                step: "Type into the textbox."
                            }
                        ]
                    }
                ]
            }
        },
        "textarea": {
            name: "Textarea",
            heading: "Textarea",
            subheading: "",
            maindiscription: "",
            gitLink: "GitLink",
            accessiblity:
                {
                    heading: "How to test textarea in different browser / devices with screenreader",
                    discription: "",
                    tips: [
                        {
                            for: "NVDA + Chrome, IE + JAWS and Voiceover + Safari",
                            steps: [
                                {
                                    step: "Press ‘Tab’ key until focus reaches the input/ text area."
                                },
                                {
                                    step: "Type into the textbox."
                                }
                            ]
                        },
                        {
                            for: "Talkback + Android",
                            steps: [
                                {
                                    step: "Press ‘Tab’ key until focus reaches the input/ text area."
                                },
                                {
                                    step: "Type into the textbox."
                                }
                            ]
                        },
                        {
                            for: "Voiceover + iPhone",
                            steps: [
                                {
                                    step: "‘Control’ + ‘Option’ + ‘Right arrow’ keys to until focus reaches the input/ text area."
                                },
                                {
                                    step: "Type into the textbox."
                                }
                            ]
                        }
                    ]
                }
        },
    },
    components: {

    }
};