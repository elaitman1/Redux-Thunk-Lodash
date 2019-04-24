import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader'
class PostList extends React.Component{
  componentDidMount() {
   this.props.fetchPostsAndUsers();
 }

 renderList() {
   return this.props.posts.map(post => {
     return (
       <div>
       <h2>{post.title}</h2>
       <p>{post.body}</p>

       <UserHeader userId={post.userId}/>
      </div>
     )
   })
 }


  render() {
    // console.log(this.props.posts)
    // put this div below in classname="ui relaxed divided list" for semantic
    return (
      <div>{this.renderList()}</div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);
