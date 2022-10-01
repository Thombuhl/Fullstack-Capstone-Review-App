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
        score: 3,
        comment: '',
        preferenceId: null,
    });
    const [allPref, setNewPref] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const prefData = await dispatch(fetchPreferences());
            // console.log(prefData.payload);
            setNewPref(prefData.payload);
        };
        fetchData();
    }, []);

    const { score, comment, preferenceId } = newRating;
    const onChange = (e) => {
        // console.log(e.target.name, e.target.value);
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
            // controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                    as="textarea"
                    value={comment}
                    name="comment"
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Select
                name="preferenceId"
                aria-label="Default select example"
                onChange={onChange}
            >
                <option value="">Open this select menu</option>
                {allPref?.map((preference) => (
                    <option key={preference.id} value={preference.id}>
                        {preference.name}
                    </option>
                ))}
            </Form.Select>
            <Button
                disabled={!comment || !preferenceId}
                // variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default CreateRatingForm;
