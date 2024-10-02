export default function NowPlaying(props) {
    
    if (!props.track) return <h2>Not Playing</h2>;
    return (
        <>
            <h2>Now Playing</h2>
            <h2>{props.track.title} - {props.track.artist}</h2>
            <button onClick={() => props.setSelected(null)}>Close</button>
        </>
    );
}