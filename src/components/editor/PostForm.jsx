import React from 'react';
import moment from 'moment';
import Markdown from 'react-remarkable';
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

    createTitleInput = () => (
        <input
            type="text"
            placeholder="Title *"
            onChange={this.onTitleChange}
            value={this.state.title}
            className="text-input"
        />
    );

    createContentInput = () => (
        <textarea
            type="text"
            placeholder="Content"
            onChange={this.onContentChange}
            value={this.state.content}
            className="textarea"
        />
    );

    createAuthorInput = () => (
        <input
            type="text"
            placeholder="Author"
            onChange={this.onAuthorChange}
            value={this.state.author}
            className="text-input"
        />
    );

    createDatePicker = () => (
        <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.dateFocused}
            onFocusChange={({ focused }) => this.setState({ dateFocused: focused })}
            numberOfMonths={1}
            displayFormat="DD.MM.YYYY"
        />
    );

    createPublishedCheckbox = () => (
        <div>
            <div className="pretty p-svg p-curve p-smooth">
                <input
                    type="checkbox"
                    onChange={this.onPublishedChange}
                    checked={this.state.published}
                />
                <div className="state p-success">
                    <svg className="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,
                        0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,
                        0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,
                        0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,
                        0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{stroke: 'white', fill: 'white'}}></path>
                    </svg>
                    <label>Published</label>
                </div>
            </div>
        </div>
    );

    createButtons = () => (
        <div>
            <button
                className="button button--ingroup"
                type="button"
                onClick={this.props.onBack}
            >
                Back
            </button>
            <button className="button button--ingroup">
                Save Post
            </button>
        </div>
    );

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                {this.createTitleInput()}
                {this.createContentInput()}
                <Markdown source={this.state.content} />
                {this.createAuthorInput()}
                {this.createDatePicker()}
                {this.createPublishedCheckbox()}
                {this.createButtons()}
            </form>
        );
    };
}

export default PostForm;
