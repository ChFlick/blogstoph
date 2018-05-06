import React from 'react';
import { SingleDatePicker } from 'react-dates';

class PostForm extends React.Component {
    state = {
        title: '',
        content: '',
        author: '',
        date: undefined,
        dateFocused: false,
        published: false
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { title, content, author, date, published } = this.state;

        this.props.onSubmit({
            title,
            content,
            author,
            date: date.valueOf(),
            published
        });
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({
            title
        }));
    };

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({
            content
        }));
    };

    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({
            author
        }));
    };

    onDateChange = (date) => {
        this.setState(() => ({ date }));
    };

    onPublishedChange = (e) => {
        const published = e.target.value === 'true';
        this.setState(() => ({
            published
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
                    placeholder="Content"
                    onChange={this.onContentChange}
                    value={this.state.content}
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
                    Published:
                <input
                        type="checkbox"
                        onChange={this.onPublishedChange}
                        value={this.state.published}
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
