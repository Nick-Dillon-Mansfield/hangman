import React, { Component } from 'react'

class AnswerInputBox extends Component {
    state = {
        answerInput : ''
    }

    render() {
       return <div>
                
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Answer: 
                            <input name = "inputAnswer" type = "text" onChange={this.handleChange} value={this.state.answerInput}/>
                        </label>
                    
                    </form>

              </div>
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({answerInput: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setAnswer(this.state.answerInput)
        this.setState({answerInput: ''})
        
    }
}

export default AnswerInputBox