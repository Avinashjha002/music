import { useDispatch,useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import {useGetTopTracksQuery} from '../redux/services/shazamCore';
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () =>{
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetTopTracksQuery(genreListId || "IN");
    console.log(data);

    if(isFetching) return <Loader title="Loading Songs..."/>;
    if(error) return <Error/>;

    const genreTitle = genres.find(({value}) => value === genreListId)?.title;


    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-col flex-row
             mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white ">Discover Songs in {genreTitle}</h2>
                <select
                    onChange={(e)=>dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || 'India'}
                    className="bg-black text-gray-300  p-3 text-sm rounded-lg outline-none  
                      sm:mt-5 mt-0"
                >
                    {genres.map((genre)=><option key={genre.value} value={genre.value}>{ 
                     genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap justify-start sm:justify-center gap-8
               text-white">
                {data?.tracks?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
