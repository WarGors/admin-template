import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Loading from 'components/shared-components/Loading';
import EditProfile from './editProfile';

export class ClientList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
		isLoaded: false,
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(json => {
				if (!Array.isArray(json)) {
					throw new Error('Wrong data type')
				}
				this.setState({ users: json, isLoaded: true })
			})
			.catch(console.error)
	}

	onFinishHandle = (values, id) => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key });

		const { name, email, username, phone, website, street, city, zipcode, companyName} = values
		const users = [...this.state.users];

		const currentUser = users.find(user => user.id === id)

		currentUser.name = name;
		currentUser.email = email;
		currentUser.username = username;
		currentUser.phone = phone;
		currentUser.website = website;

		currentUser.address.street = street;
		currentUser.address.city = city;
		currentUser.address.zipcode = zipcode;

		currentUser.company.name = companyName;

    setTimeout(() => {
      this.setState({ users })
      message.success({ content: 'Done!', key, duration: 2 });
			this.closeUserProfile()
    }, 1000);
  };

	onFinishFailedHandle = errorInfo => {
    console.log('Failed:', errorInfo);
  };

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser, isLoaded } = this.state;
		
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  					b = b.name.toLowerCase();
						return a > b ? 1 : b > a ? -1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => {
						a = a.username.toLowerCase();
  					b = b.username.toLowerCase();
						return a > b ? 1 : b > a ? -1 : 0;
					},
				}
			},
			{
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => {
						a = a.email.toLowerCase();
  					b = b.email.toLowerCase();
						return a > b ? 1 : b > a ? -1 : 0;
					},
				}
			},
			{
				title: 'Site',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase();
  					b = b.website.toLowerCase();
						return a > b ? 1 : b > a ? -1 : 0;
					},
				}
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="Edit">
							<Button type="primary" className="mr-2" icon={<EditOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				{ !userProfileVisible
					?  isLoaded 
						? <Table columns={tableColumns} dataSource={users} rowKey='id' />
						: <Loading cover='users'/> 
					:	<EditProfile 
							userProfile={selectedUser} 
							onFinish={this.onFinishHandle}
							onFinishFailed={this.onFinishFailedHandle}
						/>
				}
			</Card>
		)
	}
}

export default ClientList
