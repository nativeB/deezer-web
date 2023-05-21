import { useDispatch, useSelector } from "react-redux";
import TopTracks from "./TopTracks";
import Albums from "./Albums";
import { AppDispatch } from "../store/store";
import { resetArtistData } from "../store/App/appSlice";

function Artist() {
    const artistData = useSelector((state:any) => state.app.artistData);
    const dispatch = useDispatch<AppDispatch>();
    const goBack = () => {
        dispatch(resetArtistData())
    }
    return (
        <div className='w-full flex justify-center items-center flex-col gap-16'>
            <div className='w-full flex items-center md:h-96 flex-col md:flex-row '>
                <div className=" w-full md:w-3/4 h-full relative">
                    <img className=" w-full h-full " src={artistData.cover} alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-20 flex flex-col gap-2">
                        <p className="font-bold text-xl">Burna Boy</p>
                        <div className="pt-2 pb-3 border-b border-b-gray-400 inline-flex gap-1 w-16">
                            <span className="font-bold text-sm">382K</span>
                            <span className="text-sm">fans</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatum.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illo quasi fuga neque quis eligendi ipsam, molestias amet reprehenderit eos, in beatae enim nostrum sunt corrupti iure, dolorem similique pariatur?
                        </p>
                    </div>
                </div>
                {/* list of top tracks */}
                {/* number   name   duration */}
                <div className=" w-full md:w-3/12 h-full pt-10 px-2">
                    <div className="p-2 flex flex-col gap-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Top Tracks
                            </h5>
                            {/* list */}
                            <TopTracks />
                </div>
            </div>
            </div>

          {/* horizontal card list of albums  */}
            <div className='w-full flex px-12 gap-5 flex-col '>
                <h4 className="text-sm font-bold">Albums</h4>
                
                <Albums />
            </div>
            {/* goback button */}
            <div className='w-full flex justify-center items-center'>
                <button onClick={ goBack } className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                    Go Back
                </button>
            </div>
        </div>

    );
  }
  
  export default Artist;
  