import React from 'react';
import {Component} from 'react';



class Loader extends Component {
    render() {
        if (this.props.products.length > 0) {
            return (
                <div>
                </div>
            )
        }
        return (
            <img src="https://upload.wikimedia.org/wikipedia /commons/b/b1/Loading_icon.gif "/>
        )
    }
}







export default Loader;