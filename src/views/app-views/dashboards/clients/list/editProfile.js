import React from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';

const EditProfile = props => {

  const { onFinish, onFinishFailed, userProfile } = props
  
  const { id, name, email, username, phone, website, address: {city, zipcode, street}, company: {name: companyName} } = userProfile;

  return (
    <div className="mt-4">
      <Form
        name="basicInformation"
        layout="vertical"
        initialValues={
          { 
            'name': name,
            'email': email,
            'username': username,
            'phone': phone,
            'website': website,
            'street': street,
            'city': city,
            'zipcode': zipcode,
            'companyName': companyName
          }
        }
        onFinish={values => onFinish(values, id)}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} style={{margin: '20px auto'}}>
            <Row gutter={ROW_GUTTER}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!'
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ 
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email!' 
                  }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Company name"
                  name="companyName"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Website"
                  name="website"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24}>
                <Form.Item
                  label="Street"
                  name="street"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="City"
                  name="city"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Zip code"
                  name="zipcode"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Save Change
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default EditProfile