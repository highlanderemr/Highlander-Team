import React, { Component } from 'react';
import {tabs} from '../../tabs';
import {
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';

import './Header.css';

import { Link } from '@reach/router'


class ResponsiveHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { index }) => this.setState({ activeIndex: index })
    render() {
        const { fixed } = this.state;
        const position = 'top';
        return (
            <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? position : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        style={{display: 'flex', justifyContent: 'center'}}
                        size='large'
                        className='header'
                    >
                        {tabs.map((tab, index) => (
                            <Link
                                key={`${tabs[index]} index`}
                                href={index === 0 ? "/" : `/${tabs[index]}`}
                                to={index === 0 ? "/" : `/${tabs[index]}`}>
                                <Menu.Item
                                    index={index}
                                    as="div"
                                    onClick={this.handleItemClick}
                                    active={this.state.activeIndex === index}>
                                    {tab}
                                </Menu.Item>
                            </Link>
                        ))}
                    </Menu>
                </Segment>
            </Visibility>
        )
    }
}

export default ResponsiveHeader;