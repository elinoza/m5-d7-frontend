import React from 'react'
import {Spinner,ListGroup } from 'react-bootstrap'


class CommentList extends React.Component {
    state = {
        comments: [],
        loading:true,
        
    }

    componentDidMount = async () => {
       
        this.fetchComments()
    }


    fetchComments= async () => {
      
       
        try {
            let response = await fetch(`http://localhost:3001/books/${this.props.elementId}/comments`)
                
            if (response.ok) {
             
                let body= await  response.json()
                this.setState({comments:body ,loading:false})
                console.log(body)
             
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
          
        }
    }

    componentDidUpdate = (previousProps) => {
   
        if (previousProps.elementId!== this.props.elementId) { 
            this.fetchComments()
        }
    }
    

    render() {
        return (
            
            <div className="mb-5">
                <h2>Comments</h2>
                {
                    this.state.loading && (
                        <div className="font-bold d-flex justify-content-center">
                            <span>LOADING COMMENTS</span>
                            <Spinner animation="border" variant="success" />
                        </div>
                    )
                }
              {this.state.comments.map((comments, index) => (
                    <ListGroup key={index}>
                        <ListGroup.Item>
                            Comment: {comments.text}, User:{comments.userName}
                            {console.log(comments.text)}
                            
                        </ListGroup.Item>
                    </ListGroup>
                    ))}
                
               
                   </div>         
               
           
        )
    }
}

export default CommentList
