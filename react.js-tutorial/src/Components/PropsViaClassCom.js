import React, {Component} from 'react';


class PropsViaClassCom extends Component {
    render() { 
        return (
        <div>
            <h3>Hello my name is {this.props.name} and my age is {this.props.age}</h3>
            <h3>Email: {this.props.email}</h3>
            <h3>Mob: {this.props.other.mobile}</h3>
            <h3>Add: {this.props.other.address}</h3>
        </div>
        );
    }
}
 
export default PropsViaClassCom;