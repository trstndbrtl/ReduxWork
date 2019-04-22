import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ChildComponent){
    class HocAnthentification extends Component {

        componentWillMount() {
            // If the user isn't connected
            // Go to home page
            if (!this.props.isLogged) {
                this.props.history.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            // If the user is deconnected
            // Go to home page
            if (!nextProps.isLogged) {
                this.props.history.push("/");
            }
        }
        // If everithing is ok return child component
        render() {
            return <ChildComponent />
        }
    }

    const mapStateToProps = state => ({
        isLogged : state.login.isLogged
    });

    return connect(mapStateToProps)(HocAnthentification);
}
