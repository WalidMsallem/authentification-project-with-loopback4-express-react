import React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { loginUser } from "../actions/authAction";
import { withRouter, Link } from "react-router-dom";
import isEmpty from "../validation/is-empty";
class NormalLoginForm extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/landing-page");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/landing-page");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      this.props.loginUser(values, this.changeRoute);
    });
  };
  changeRoute = () => {
    this.props.history.push("/landing-page");
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-comoponent">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <div style={{ color: "red", padding: 15 }}>
            {" "}
            {this.props.errors
              ? this.props.errors.error
                ? this.props.errors.error.message
                : isEmpty(this.props.errors)
                ? null
                : "invalid password"
              : null}
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
const mapStateToProps = state => ({ errors: state.errors, auth: state.auth });
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(WrappedNormalLoginForm));
