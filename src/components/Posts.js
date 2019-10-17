import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map(item => (
      <div style={{padding: 10}}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts);