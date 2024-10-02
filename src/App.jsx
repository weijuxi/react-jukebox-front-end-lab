// src/App.jsx
import { useState, useEffect } from "react";

import * as trackService from "./services/trackService";
import TrackList from "./components/TrackList";
import NowPlaying from "./components/NowPlaying";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [openForm, setOpenForm] = useState(false);


  useEffect(() => {
    async function fetchTracks() {
      try{
        const tracks = await trackService.index();
        console.log(tracks);
        setTracks(tracks);

      } catch (error) {
        console.error(error);
      }
    }
    fetchTracks();
  }, []);

  async function createTrack(track) {
    try {
      const newTrack = await trackService.create(track);
      setTracks([...tracks, newTrack]);
    } catch (error) {
      console.error(error);
    }
  } 

  const toggleForm = () => {
    setOpenForm(!openForm);
  }


  return (
    <>
      <TrackList tracks={tracks} setSelected={setSelectedTrack} handleopenForm={toggleForm} isFormOpen={openForm} />
      {openForm ? <TrackForm createTrack={createTrack} /> : <NowPlaying track={selectedTrack} setSelected={setSelectedTrack} />}
    </>
  );
};

export default App;