import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRating } from '../store';

class CreateRatingForm extends Component {
    constructor() {
        super();
        this.state = {
            score: '',
            comment: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createRating, auth, restaurantId, ratings } = this.props;
        console.log(this.state);
        this.props.createRating({
            ...this.state,
            userId: auth.id,
            restaurantId: restaurantId,
        });
        this.setState({
            score: '',
            comment: '',
        });
    }

    render() {
        const { score, comment } = this.state;
        const { handleSubmit, onChange } = this;

        return (
            <form onSubmit={handleSubmit} className="text-center">
                <h2 className="fw-bold">Post a Rating</h2>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={score}
                    name="score"
                    onChange={onChange}
                    // onInput="rangeValue.innerText = this.value"
                />
                <h2>{score}</h2>
                <div className="mb-2">
                    <textarea
                        placeholder="Comment (Required)"
                        name="comment"
                        value={comment}
                        onChange={onChange}
                    />
                </div>
                <br />
                <button>Create</button>
            </form>
        );
    }
}
const mapState = (state) => {
    console.log(state);
    return {
        auth: state.auth.auth || {},
    };
};
const mapDispatch = (dispatch) => {
    return {
        createRating: (rating) => {
            dispatch(createRating(rating));
        },
    };
};
export default connect(mapState, mapDispatch)(CreateRatingForm);
