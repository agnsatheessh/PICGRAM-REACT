import * as React from "react";

class Modal extends React.Component {

    constructor(props) {
        super(props);
    }
    handleClickedOutSide = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <>
                <div id="myModal" class="modal" onClick={this.handleClickedOutSide.bind(this)}>
                    <div class="modal-content">
                        <img src={this.props.imgUrl}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Modal;