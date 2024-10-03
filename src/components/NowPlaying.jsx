export default function NowPlaying(props) {
    
    if (!props.track) return <h2>Not Playing</h2>;
    return (
        <>
            <h2>Now Playing</h2>
            <h3>{props.track.title} - {props.track.artist}</h3>
            {/* <button onClick={() => props.setSelected(null)}>Close</button> */}
            <button onClick={() => props.handleFormView(props.track)}>Edit</button>
            <button onClick={() => props.deleteTrack(props.track._id)}>Delete</button>
        </>
    );
}