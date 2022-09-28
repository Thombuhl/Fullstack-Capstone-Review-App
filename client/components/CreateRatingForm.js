import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { createRating } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchPreferences } from '../store/preference';

const CreateRatingForm = (props) => {
    const dispatch = useDispatch();
    const {
        auth: { auth },
    } = useSelector((state) => state);
    const { restaurantId } = props;

    const [newRating, setNewRating] = useState({
        score: 0,
        comment: '',
        // preferenceId: '',
    });
    const [allPref, setNewPref] = useState({
        preferences: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const prefData = await dispatch(fetchPreferences());
            console.log(prefData.payload);
            setNewPref({ ...allPref, preferences: prefData.payload });
            console.log(allPref);
        };
        fetchData();
    }, []);

    const { score, comment } = newRating;
    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setNewRating({ ...newRating, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createRating({
                ...newRating,
                userId: auth.id,
                restaurantId: restaurantId,
            })
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Range
                min="1"
                max="5"
                step="1"
                value={score}
                name="score"
                onChange={onChange}
            />
            <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={2}
                    value={comment}
                    name="comment"
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Button
                disabled={!score || !comment}
                variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default CreateRatingForm;
