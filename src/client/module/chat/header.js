import React from 'react';
import './style/header.scss';

import pureRenderMixin from 'react-addons-pure-render-mixin';
import Logo from './logo';
import NavList from './navList';
import UserPanel from './userPanel';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <header>
                <Logo/>
                <NavList.container>
                    <NavList.item icon="&#xe607;" selected/>
                    <NavList.item icon="&#xe600;"/>
                    <NavList.item icon="&#xe606;"/>
                </NavList.container>
                <UserPanel/>
            </header>
        );
    }
}

export default Header;