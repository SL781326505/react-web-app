import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Button, Icon, Input } from 'antd'
import { handleLogin } from '@/store/user'
import './index.less'


@connect(
  state => state.user,
  { handleLogin }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // isAuth: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = {
          user: values.userName,
          password: values.password
        }
        this.props.handleLogin(params)
      }
    })
  }

  render() {
    const FormItem = Form.Item
    const { isAuth } = this.props
    const { getFieldDecorator } = this.props.form

    if (isAuth === 'yes') {
      return <Redirect to="/app" />
    }

    return (
      <div className="login">
        <p>随便输入用户名和密码</p>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {
              getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="用户名" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
              )
            }
          </FormItem>
          <FormItem>
            <Button className="login-form-button" htmlType="submit" >登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)
