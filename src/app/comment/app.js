import React from "react";
import {render} from "react-dom";

import CommentList from "../../component/comment/commentlist";
import CommentForm from "../../component/comment/commentform";


import "bootstrap.css";
import "ionicons.css";
import "../../css/default.css";
import $ from "jquery";
import "bootstrap";
// import "../static/index.js";

class CommentBox extends React.Component {
    render () {
        return (
            <div className="col-md-6 col-md-push-3">
                Hello, {this.props.name}!
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

render(
    <CommentBox name="world"/>,
    document.getElementById("content")
);


// test jquery in this scope
$(() => {
    console.log("jquery is in it!");
});
