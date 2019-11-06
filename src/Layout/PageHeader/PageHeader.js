import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Navbar} from 'react-bootstrap';

class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    showComponents() {
        console.log(this.props, 'props')
        document.querySelector(this.props.mainContainer).focus();
    }
    render(props) {

        return (
                <header>
                    <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand tabIndex="0" onClick={this.showComponents.bind(this)} onKeyDown={this.showComponents.bind(this)}>
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' Skip to main content'}
                        </Navbar.Brand>
                    </Navbar>
                </header>
        );
    }
}
export default PageHeader;