import { useSelector } from "react-redux";
function Albums() {
  const artistData = useSelector((state:any) => state.app.artistData);
  const albums = artistData? artistData.albums: [];
  console.log(albums)
  return (
    <div className="flex flex-wrap gap-y-2">
        {
            albums.map((item:any,index:number) => (
              
                <div key={index} className="bg-white w-[8rem] ">
                    <a href="#">
                        <img className="rounded-t-xs w-32 h-32" src={item.cover} alt="" />
                    </a>
                    <div className="py-2 flex flex-col">
                        <a href="#">
                            <h5 className=" text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                            </h5>
                        </a>
                        <span className=' text-gray-300 text-xs font-medium'>
                        {item.year}
                        </span>
                    </div>
                </div>
            ))
        }
      
    </div>
  );
}

export default Albums;
