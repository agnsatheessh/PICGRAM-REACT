import * as React from "react";
import Modal from "./Modal";

import TestComment from './TestComment';

class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { likeBtnOPtion : 'Like',imageUrl:'',showModal:false };
    this.handleIncrementLikes = this.handleIncrementLikes.bind(this);
  }
  handleIncrementLikes = id => {
    this.setState({ likeBtnOPtion : 'Unlike' });
    this.props.incrementPostLikes(id);
  };
  handleDecrementLikes = id => {
    this.setState({ likeBtnOPtion : 'Like' });
    this.props.decrementPostLikes(id);
  };

  handleCommentUpdate = (id,comment) =>{
    this.props.postCommentToGrid({id:id,comment: comment});
  }
  closeModal(){
    this.setState({ imageUrl:'',showModal:false });
  }
  showModal(img){
    this.setState({ imageUrl:img,showModal:true });
  }

  render() {
    const { post } = this.props;

    return (<>
      <figure className="grid-figure">
        <div className="grid-photo-wrap">

          <img
            className="grid-photo"
            src={post.url}      
            alt="post is not available"   
            onClick={this.showModal.bind(this,post.url)}   
          />
        </div>

        <figcaption>
          <div className="likes_div">
            <span style={{color: 'brown'}}> {post.likes}</span><span> { this.state.likeBtnOPtion === 'Like'? <button
              onClick={this.handleIncrementLikes.bind(this, post.id)}
              className="likes"
            >
              Like
            </button> :
              <button
                onClick={this.handleDecrementLikes.bind(this, post.id)}
                className="likes"
              >
                Unlike
          </button>
            }
            </span>
            <span style={{ margin: '0px 0px 0px 100px',color:'lightslategray'}}>
              {post.category}
            </span>
          </div>

          <div>
            <TestComment comments={!!post.comments ? post.comments : []} postCommentToParent={this.handleCommentUpdate.bind(this,post.id)}></TestComment>
          </div>


        </figcaption>
      </figure>
      {
        this.state.showModal && <Modal imgUrl={this.state.imageUrl} closeModal={this.closeModal.bind(this)}></Modal>
      }
      
      </>
    );
  }
}

export default Photo;