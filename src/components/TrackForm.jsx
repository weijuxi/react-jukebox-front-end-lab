import { useState } from 'react';

export default function TrackForm(props) {
    const initialState = {
            title: '',
            artist: ''
    };
    const [formData, setFormData] = useState(props.track ? props.track : initialState);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (props.track) {
            props.updateTrack(formData, props.track._id);
        } else{
            props.createTrack(formData);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title </label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                <label>Artist </label>
                    <input
                        type='text'
                        name='artist'
                        value={formData.artist}
                        onChange={handleChange}
                    />
                <button type='submit'> {props.track ? 'Update' : 'Create'} Track</button>
            </form>
        </>
    );
}