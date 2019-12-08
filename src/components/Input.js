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
                <label htmlFor={id}>{label}</label>
                <input 
                    id={id} 
                    type="text" 
                    name={label} 
                    size={size ? size : null} 
                    minLength={minlength ? minlength : null} 
                    maxLength={maxlength ? maxlength : null} 
                />
            </div>
        );
    }
}
