import React, {Component} from 'react';

class DiaryForm extends Component {
    state = {
        name = ''
    }
    //onChange event occurs,
    // get current text value from event object
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input 
                // when render input value and onChange value is set
                    placeholder="일기"
                    value={this.state.name}
                    // onChange event happens at every input text change 
                    onChange={this.handleChange}
                />
            
                <div>{this.state.name}</div>
            </form>
        )
    }
}