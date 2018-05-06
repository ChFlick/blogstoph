import React from 'react';
import { SingleDatePicker } from 'react-dates';

class PostForm extends React.Component {
    state = {
        title: '',
        text: '',
        author: '',
        date: undefined,
        dateFocused: false,
        isPublic: false
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    onTitleChange = (e) => {
        const title = e .target.value;
        this.setState(() => ({
            title
        }));
    };

    onTextChange = (e) => {
        const text = e .target.value;
        this.setState(() => ({
            text
        }));
    };

    onAuthorChange = (e) => {
        const author = e .target.value;
        this.setState(() => ({
            author
        }));
    };

    onDateChange = (date) => {
        this.setState(() => ({ date }));
    };

    onIsPublicChange = (e) => {
        const isPublic = e .target.value === 'true'
        this.setState(() => ({
            isPublic
        }));
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
                    Public:
                <input
                        type="checkbox"
                        onChange={this.onIsPublicChange}
                        value={this.state.isPublic}
                    />
                </div>
                <div>
                    <button>Save Post</button>
                </div>
            </form>
        );
    };
}

export default PostForm;
