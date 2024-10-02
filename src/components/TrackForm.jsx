import { useState } from 'react';

export default function TrackForm(props) {
    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.createTrack(formData);
        setFormData({
            title: '',
            artist: ''
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title </label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                <label htmlFor="artist">Artist </label>
                    <input
                        type='text'
                        name='artist'
                        value={formData.artist}
                        onChange={handleChange}
                    />
                <button>Submit</button>
            </form>
        </>
    );
}