import React from "react";
import {  } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";



class CommentArea extends React.Component {




  render() {
    return (
        <>
      
        <CommentsList elementId={this.props.elementId}/>
        <AddComment elementId={this.props.elementId}/>
        


       
        </>
     
    );
  }
}

export default CommentArea;
