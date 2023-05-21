
import Track from './Track';
import { useSelector } from 'react-redux';

function TrackList( ) {
    
    const tracks = useSelector((state:any) => state.app.tracks);

  return  tracks.length > 0 ? (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:w-9/12 w-full'>
        {
          tracks.map((item:any, index:number) => (
            <Track key={index} item={item} />
          ))
        }
       
      </div>
      )
      :(
        <div className='w-full flex justify-center col items-center'>
            <div className=" w-3/5 md:w-[15rem]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2 flex flex-col items-center">
                    <span className=' text-gray-400'>
                        No tracks  at the moment
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TrackList;
