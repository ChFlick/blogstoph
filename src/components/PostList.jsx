import React from 'react';
import { connect } from 'react-redux';

export class PostList extends React.Component {
    render() {
        return (
            <div>render</div>
        );
    }
};

export default connect()(PostList);
