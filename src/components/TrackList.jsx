export default function TrackList(props) {
    const tracks = props.tracks.map((track) => (
        <a key={track._id} onClick={() => props.setSelected(track)}>
            <li>
                {track.title} - {track.artist}
            </li>
        </a>
    ));

    return (
        <>
            <button onClick={props.handleopenForm}>
                {props.isFormOpen ? "Close" : "Add Track"}
            </button>
            <h1>Track List</h1>
            <ul>{tracks}</ul>
        </>

    );
}