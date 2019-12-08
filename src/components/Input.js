import React from 'react';
export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        let { id, label, size, minlength, maxlength } = this.props;
        return (
            <div>
                <hr />
                <label htmlFor={id}>Explicitly labeled {label}</label>
                <input 
                    id={id} 
                    type="text" 
                    name={id}
                    size={size ? size : null} 
                    minLength={minlength ? minlength : null} 
                    maxLength={maxlength ? maxlength : null} 
                />
                <hr />
                <label>
                    Implicitly labeled {label}
                <input
                    type="text"
                    name={id}
                    size={size ? size : null}
                    minLength={minlength ? minlength : null}
                    maxLength={maxlength ? maxlength : null}
                />
                </label>
                <hr />
                <div id="txtboxLabel">Create {label} using div and aria</div>
                <div 
                    className="border" 
                    role="textbox" 
                    contentEditable="true" 
                    aria-placeholder={label} 
                    aria-labelledby="txtboxLabel"
                    aria-readonly="false"
                    aria-required="false"
                >
                </div> 
            </div>
        );
    }
}
