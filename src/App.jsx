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

  const toggleForm = (track) => {
    if (!track.name) {
      setSelectedTrack(null);
    }
    setOpenForm(!openForm);
  }

  async function updateTrack(track, trackId) {
    try {
      const updatedTrack = await trackService.update(track, trackId);
      const updatedTracks = tracks.map((track) => (track._id === updatedTrack._id ? updatedTrack : track));
      setTracks(updatedTracks);
      setSelectedTrack(updatedTrack);
      setOpenForm(false);
    } catch (error) {
      console.error(error );
    }
  }

  const deleteTrack = async (trackId) => {
    try {
      await trackService.deleteTrack(trackId);
      const updatedTracks = tracks.filter((track) => track._id !== trackId);
      setTracks(updatedTracks);
      setSelectedTrack(null);
      setOpenForm(false);
    } catch (error) {
      console.error(error);
    }
  }

  const updateSelectedTrack = (track) => {
    setSelectedTrack(track);
  };


  return (
    <>
      <TrackList tracks={tracks} updateSelectedTrack={updateSelectedTrack} handleopenForm={toggleForm} isFormOpen={openForm} />
      {openForm ? <TrackForm createTrack={createTrack} updateTrack={updateTrack} track={selectedTrack} /> : <NowPlaying track={selectedTrack} setSelected={setSelectedTrack} handleFormView={toggleForm} deleteTrack={deleteTrack} />}
    </>
  );
};

export default App;