import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component{
  //below we pass in the userId from PostList.js as a prop
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId)
  // }
  //everytime the PostList renders onto the screen it is called with the same userId. the array length is 10 so every 10 is called with same user id. we will change this

  render() {
    // const { user } = this.props
    const user = this.props.user
    if(!user) {
      return null
    }
    return <div>{user.name}</div>
  }
}
//below ownProps are passed in from PostList
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return { user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);
