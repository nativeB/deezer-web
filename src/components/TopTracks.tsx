import { useSelector } from "react-redux";
import { formatDuration } from "../utils";


function TopTracks() {
  const artistData = useSelector((state:any) => state.app.artistData);
  const topTracks = artistData? artistData.topTracks: [];
  return (
    <div className='flex flex-col gap-2 '>
        {
            topTracks.map((item:any, index:number) => (
                
                <div className='flex justify-between border-b py-1.5 border-b-gray-300'>
                    <div className="flex gap-4 ">
                        <span className=' text-black text-sm'>
                            {index + 1}
                        </span>
                        <span className=' text-black'>
                            {item.title}
                        </span>
                    </div>
                    <span className=' text-gray-300'>
                        { formatDuration(item.duration) }
                    </span>
                </div>
            ))
        }
    </div>
  );
}

export default TopTracks;
