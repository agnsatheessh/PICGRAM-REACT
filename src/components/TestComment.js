import * as React from "react";

class TestComment extends React.Component {
  constructor(props) {
    super(props);
    this.state={newComment:''};
    this.commentStringChange = this.commentStringChange.bind(this);
    this.postComment = this.postComment.bind(this);
    
  }

  commentStringChange(evnt){
    this.setState({newComment : evnt.target.value});
  }
  postComment(){    
    this.props.postCommentToParent(this.state.newComment);
    this.setState({newComment : ''});
  }
  render() {
    const {comments}=  this.props;

    return (<>
      
      <div className="comments2">
      <div className="comments2Row" >
        <span  style={{flex: '70%' ,"box-sizing": "border-box"}}><input className="cmnt" type="text" value={this.state.newComment} onChange={this.commentStringChange.bind(this)} placeholder="Type your comment here" ></input></span>
        <button style={{flex: '30%'}} onClick={this.postComment.bind(this)} disabled={!this.state.newComment}>post</button>
      </div>
        {comments.map((comment, i) => {
          return <div key={'cmnts'+i} id={'cmnts'+i} className="cmnt" >{comment}</div>
        })}
       
      </div>
      </>
    );
  }
}

export default TestComment;