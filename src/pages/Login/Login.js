import React from 'react'
import { connect } from 'react-redux'
import config from 'utils/config'
import PropTypes from 'prop-types'
import { Button, Row, Form, Input } from 'antd'
import Logo from 'assets/img/footercode.png'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  dispatch,
  form: { getFieldDecorator, validateFieldsAndScroll },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={Logo} />
        <span>{config.appName}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input
            type="password"
            onPressEnter={handleOk}
            placeholder="Password"
          />)}
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk}>
            Sign in
          </Button>
          <p>
            <span>Username：adimn</span>
            <span>Password：adimn</span>
          </p>
        </Row>
      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
