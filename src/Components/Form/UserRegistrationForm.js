import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux'
import { userData } from '../../redux/Users/UserAction'


const UserRegistrationForm = () => {
  
    const dispatch = useDispatch() 
 
    const [fields, setFields] = useState([
    {
      name: ['username'],
      value: '',
    },
  ]);

  const handleSubmit = (values) => { /* To handle form submission data */
  alert('Successfully Registered');  
  dispatch(userData(values)); /* Dispatch values from form to Action*/
    console.log(values)
    }
  
    const CustomizedForm = () => ( 
        <div className='UserForm'>
            <h1>User Sign Up</h1>
            <Form
            name="global_state"
            layout="inline"
            onFinish={handleSubmit}
        
        >
        <ul><Form.Item
            name="firstname"
            label="First Name"
            rules={[
            {
              required: true,
              message: 'First Name is required!',
            },
            ]}>
                
            <Input />
            </Form.Item></ul>
        <ul><Form.Item
            name="lastname"
            label="Last Name"
            rules={[
            {
              required: true,
              message: 'Last Name is required!',
            },
          ]}>

            <Input />
            </Form.Item></ul>
        <ul><Form.Item
            name="address"
            label="Address"
            rules={[
            {
              required: true,
              message: 'Address is required!',
            },
            ]}>

            <Input />
            </Form.Item></ul>
        <ul><Form.Item
            name="company"
            label="Company"
            rules={[
            {
              required: true,
              message: 'Company is required!',
            },
            ]}>

            <Input />
            </Form.Item></ul>
        <ul><Form.Item
            name="telephone"
            label="Telephone"
            rules={[
            {
              required: true,
              message: 'Telephone is required!',
            },
            ]}>

            <Input />
            </Form.Item></ul>

        <div className='button'>
            <Form.Item>
            <Button type="primary" htmlType="submit">
             Submit
            </Button>
            </Form.Item></div>
            </Form>
        </div>
        
        );

  return (
    
    <div className='Interface'>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
    </div>
  );
};

export default UserRegistrationForm;