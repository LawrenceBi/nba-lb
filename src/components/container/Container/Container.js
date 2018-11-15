import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layout, Menu } from 'antd';
import Teams from "../Teams/Teams";
import Home from "../Home/Home";
import styles from './Container.less';

const { Header } = Layout;

class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mainContent: (<Home />)
		}

		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuClick(event) {
		switch (event.key) {
			case "0":
				this.setState({
					mainContent: (<Home />)
				});
				break;
			case "1":
				this.setState({
					mainContent: (<Teams />)
				});
				break;
			default:
				this.setState({
					mainContent: (<div></div>)
				});
				break;
		}
	}

    render() {
    	const content = this.state.mainContent;
    	return (
	        <Layout>
			    <Header className="header">
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['0']}
			        style={{ lineHeight: '64px' }}
			        onClick={this.handleMenuClick}
			      >
			      	<Menu.Item key="0">Home</Menu.Item>
			        <Menu.Item key="1">Teams</Menu.Item>
			        <Menu.Item key="2">Schedule</Menu.Item>
			        <Menu.Item key="3">Ranking</Menu.Item>
			      </Menu>
			    </Header>
			    {content}
			</Layout>
		);
    }
}

export default Container;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;