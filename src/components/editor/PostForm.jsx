import React from 'react';
import { SingleDatePicker } from 'react-dates';

class PostForm extends React.Component {
    state = {
        title: '',
        text: '',
        author: '',
        date: undefined,
        dateFocused: false,
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        });
    };

    onDateChange = (date) => {
       this.setState({ date });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={this.onTitleChange}
                    value={this.state.title}
                />
                <textarea
                    type="text"
                    placeholder="Text"
                    onChange={this.onTextChange}
                    value={this.state.text}
                />
                <input
                    type="text"
                    placeholder="Author"
                    onChange={this.onAuthorChange}
                    value={this.state.author}
                />
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.dateFocused}
                    onFocusChange={({ focused }) => this.setState({ dateFocused: focused })}
                    numberOfMonths={1}
                    displayFormat="DD.MM.YYYY"
                />
                <div>
                    <button>Save Post</button>
                </div>
            </form>
        );
    };
}

export default PostForm;
