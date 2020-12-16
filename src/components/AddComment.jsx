import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comments:{
            text: '',
            userName: '',
          
        },
        
        errMessage: '',
        loading: false
    }

    updateCommentField = (e) => {
        let comments = { ...this.state.comments } // creating a copy of the current state
        let currentId = e.currentTarget.id // 'name', 'phone', etc.
     
        // comments.elementId=this.props.elementId

     
            comments[currentId] = e.currentTarget.value // e.currentTarget.value is the keystroke
        
        //reservation['name'] --> reservation.name = 'S'
        //reservation['phone'] --> reservation.phone = '3'
        this.setState({ comments:comments })
    }

    submitComment = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
            let response = await fetch(`http://localhost:3001/books/${this.props.elementId}/comments`,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comments),
                    headers: new Headers({
                        "Content-Type": "application/json"
                       
                    })
                })
            if (response.ok) {
                alert('Comment saved!')
                this.setState({
                    comments: {
                        text: '',
                        userName: '',
                        
                    },
                    errMessage: '',
                    loading: false,
                })
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
            this.setState({
                errMessage: e.message,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request
                            {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            pls wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                }
                <Form className="w-100 mb-3 mt-3 container" onSubmit={this.submitComment}>
                    <Row>
                        <Col md={7}>
                            <Form.Group>
                                <Form.Label htmlFor="text">text</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Your comment here"
                                    value={this.state.comments.text}
                                    onChange={this.updateCommentField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        
                  
                   
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="userName">
                                  Your User Name pls
                            </Form.Label>
                                <Form.Control
                                  type="text"
                                    name="userName"
                                    id="userName"
                                    placeholder="Your user name here"
                                    value={this.state.comments.userName}
                                    onChange={this.updateCommentField}
                                    required
                                >
                                   
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        
                     
                    </Row>
                   
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddComment
