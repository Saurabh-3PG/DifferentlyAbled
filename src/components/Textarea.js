import React from 'react';
export class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        let { id, ariaId, label, disabled, minlength, maxlength, readonly, required } = this.props;
        return (
            <div>
                <hr />
                <label htmlFor={id}>Explicitly labeled {label}</label>
                <br />
                <textarea
                    id={id}
                    name={id}
                    required={required ? required : false}
                    readOnly={readonly ? readonly : false}
                    disabled={disabled ? disabled : false}
                    minLength={minlength ? minlength : null}
                    maxLength={maxlength ? maxlength : null}
                />
                <hr />
                <label>
                    Implicitly labeled {label}
                    <br />
                    <textarea
                        name={id}
                        required={required ? required : false}
                        readOnly={readonly ? readonly : false}
                        disabled={disabled ? disabled : false}
                        minLength={minlength ? minlength : null}
                        maxLength={maxlength ? maxlength : null}
                    />
                </label>
                <hr />
                <div id={ariaId} >Create {label} using div and aria</div>
                <div
                    className="border"
                    role="textbox"
                    aria-multiline="true"
                    contentEditable="true"
                    aria-placeholder={label}
                    aria-labelledby={ariaId}
                    aria-readonly={readonly ? readonly : false}
                    aria-required={required ? required : false}
                    aria-disabled={disabled ? disabled : false}
                >
                </div>
            </div>
        );
    }
}
