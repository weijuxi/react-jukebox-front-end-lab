export default function TrackList(props) {
    const tracks = props.tracks.map((track) => (
        <a key={track._id} onClick={() => props.updateSelectedTrack(track)}>
            <li>
                {track.title} - {track.artist}
            </li>
        </a>
    ));

    return (
        <>
            <h1>Track List</h1>
            <button onClick={props.handleopenForm}>
                {props.isFormOpen ? "Close" : "Add Track"}
            </button>
            <ul>{tracks}</ul>
        </>

    );
}