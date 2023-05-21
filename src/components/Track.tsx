import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { formatDuration } from "../utils";
import { getArtist } from "../store/App/appActions";

function Track(props: any) {
  const { item } = props;
  const dispatch = useDispatch<AppDispatch>();
  const setTheArtist = () => {
     dispatch(getArtist(item.artistId))
    }
  return (
    <div className='w-full flex justify-center items-center'>
        <div className=" w-3/5 md:w-[15rem]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-44 w-full" src={item.cover} alt="" />
            </a>
            <div className="p-2 flex flex-col">
                <span className=' text-gray-400'> 
                    { 
                    formatDuration(item.duration)
                    }
                </span>
                <a href="#">
                    <h5 className=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       { item.title }
                    </h5>
                </a>
                <span className='whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 md:block hidden'>
                    on { item.album}
                </span>
                <span onClick={setTheArtist} className=' cursor-pointer text-gray-400'>
                    By { item.artist }
                </span>
            </div>
        </div>
    </div>

  );
}

export default Track;
