import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        const post = props.post || {};
        this.state = {
            title: post.title || '',
            content: post.content || '',
            author: post.author || '',
            date: moment(post.date) || moment(),
            dateFocused: false,
            published: post.published || false,
            error: ''
        };
      }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, content, author, date, published } = this.state;

        if (published && (!title || !content || !author || !date)) {
            this.setState(() => ({
                error: 'Please provide all information when publishing a post.'
            }));
        } else if (!title) {
            this.setState(() => ({
                error: 'Please provide a title to identify the post.'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));

            this.props.onSubmit({
                title,
                content,
                author,
                date: date.valueOf(),
                published
            });
        }
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
        const published = e.target.checked;
        this.setState(() => ({
            published
        }));
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title *"
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
                        checked={this.state.published}
                    />
                </div>
                <div>
                    <button type="button" onClick={this.props.onBack}>Back</button>
                    <button>Save Post</button>
                </div>
            </form>
        );
    };
}

export default PostForm;
