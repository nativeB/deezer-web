
import React from "react"
import Search from './components/Search';
import './App.css';
import TrackList from './components/TrackList';
import { useSelector } from "react-redux";
import Artist from "./components/Artist";
import { Audio } from 'react-loader-spinner'
function App() {
  const artistData = useSelector((state:any) => state.app.artistData);
  const loading = useSelector((state:any) => state.app.loading);

  return (
    <div className="App flex flex-col justify-center gap-24 h-[100%] items-center mb-10">
      <h1 className=' text-2xl md:text-4xl font-bold text-gray-900 dark:text-white'>
        Music Search- Quincy
      </h1>
     
      {
        !artistData? (
          <>
            <Search />
            {
            loading && (
              <div className="flex w-full h-full justify-center items-center">
                <Audio
                  height="80"
                  width="80"
                  color="green"
                  ariaLabel="loading"
                />
              </div>
            )
          }
            <TrackList />
          </>
        ): (
          <Artist />
        )
}
    </div>
  );
}

export default App;
