import * as React from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes, filterKeyChanges, sortKeyChanges, insertComment } from "../redux";

import Photo from "./Photo";

class PhotoGrid extends React.Component {

  constructor(props) {
    super(props);
    this.handleIncrementLikes = this.handleIncrementLikes.bind(this);
    this.handleDecrementLikes = this.handleDecrementLikes.bind(this);
    this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
    this.compare = this.compare.bind(this);
    this.handleCommentInsertion= this.handleCommentInsertion.bind(this);
  }

  componentDidMount() {

  }
  handleIncrementLikes = id => {
    this.props.incrementLikes(id);

  };
  handleDecrementLikes = id => {
    this.props.decrementLikes(id);
  };
  handleSearchKeyChange = evnt => {
    const key = evnt.target.value + "";
    const keyval = key.toUpperCase();
    this.props.filterKeyChanges(keyval);
  }
  handleSortKeyChange = sortKey => {
      this.props.sortKeyChanges(sortKey);
  }

  handleCommentInsertion = commentPayload =>{
    this.props.insertComment(commentPayload);
  }

  compare(a, b) {
    if(this.props.sortKey === 'likes'){

      if (a.likes < b.likes) {
        return 1;
      }
      if (a.likes > b.likes) {
        return -1;
      }

    }else if(this.props.sortKey === 'comments') {

      if (a.comments.length < b.comments.length) {
        return 1;
      }
      if (a.comments.length > b.comments.length) {
        return -1;
      }

    }
    return 0;
  }
  
  render() {
    const { posts, filterKey } = this.props;


    return (<>
      <div>
        <ul className="nav">
          <li><a className="border" onClick={this.handleSortKeyChange.bind(this,"likes")}>Most Liked</a></li>
          <li><a onClick={this.handleSortKeyChange.bind(this,"comments")}>Most Commented</a></li>
          <li><input type="text" value={filterKey} placeholder="Search images by category" onChange={this.handleSearchKeyChange.bind(this)} /></li>
        </ul>
        
      </div>
      <div className="photo-grid">
        {posts.filter(post => post.category.toUpperCase().includes(filterKey)).sort(this.compare).map((post, i) => (
          <Photo
            index={i}
            key={post.id + "post"}
            post={post}
            incrementPostLikes={this.handleIncrementLikes.bind(this)}
            decrementPostLikes={this.handleDecrementLikes.bind(this)}
            postCommentToGrid={this.handleCommentInsertion.bind(this)}
            
          />
        ))}
      </div>
    </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    filterKey: state.posts.filterKey,
    sortKey : state.posts.sortKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementLikes: number => dispatch(incrementLikes(number)),
    decrementLikes: number => dispatch(decrementLikes(number)),
    filterKeyChanges: key => dispatch(filterKeyChanges(key)),
    sortKeyChanges: key => dispatch(sortKeyChanges(key)),
    insertComment : commentPayload => dispatch(insertComment(commentPayload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

