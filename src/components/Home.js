import * as React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux";

import Header from "./Header";
import PhotoGrid from "./PhotoGrid";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state ={posts:[]};
   
  }

  componentDidMount(){
    const { fetchImages} = this.props;
    fetchImages();
  }

  async getData() {
    this.setState(() => { return { isloading: true } });
    let res = await this.dataManager.getdata("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json");

    if (!!res) {
        
            this.setState( ()=> {return { posts: res.pics}});
        
    }
    else {
        console.log("Api error");
    }
    this.setState(() => { return { isloading: false } });
}

  render(){
    return (<>
    <div>
      <Header />
      <PhotoGrid />
    </div>
     </>);
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => dispatch(fetchImages())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);



