import React, {Component} from "react";
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import Page from '../components/PageTemplate';

class Diary extends Component{
    state={
        diary:''
    }
    handleChange = (e) => {
        this.setState({
        [e.target.name] : e.target.value
        })
    };
    render(){
        return(
            <>
                <Page>
                    <TodoTemplate>
                        <TodoList/>
                    </TodoTemplate>
                </Page> 

                <input 
                    placeholder="diary"
                    value={this.state.diary}
                    onChange={this.handleChange}
                    name='diary'
                />
            </>
        )
    }
}

export default Diary;