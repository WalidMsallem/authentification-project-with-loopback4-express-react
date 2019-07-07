import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import { logoutUser } from "../actions/authAction";
export class LandingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <header className="logout-button">
          <div className="logout-button">
            logout
            <Button
              type="primary"
              shape="circle"
              size={35}
              onClick={this.props.logoutUser}
            >
              <Icon type="logout" />
            </Button>
          </div>
        </header>
        <h1> New Landing page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { logoutUser }
)(LandingPage);
