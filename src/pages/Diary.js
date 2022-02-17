import React, {Component} from "react";
import TodoTemplate from '../components/todo/TodoTemplate';
import TodoList from '../components/todo/TodoList';
import TodoCreate from '../components/todo/TodoCreate';
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