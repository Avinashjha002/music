import{ Link }from 'react-router-dom';

const DetailsHeader = ({songData}) => {

  return(
    <div className='relative w-full flex flex-col'>
      <div className='w-full bg-gradient-to-r from-transparent to-[#12181d] sm:h-48 h-28'/>
      <div className='absolute inset-0 flex items-center'>
        <img src={songData?.images.coverart} alt="art" 
        className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'  
        />

        <div className='ml-5'>
          <p className="font-bold sm:text-3xl text-xl text-white">{songData?.title}</p>
            <div>
            <p className='text-base text-gray-400 mt-2'>{songData?.subtitle}</p>
            </div>

          <p className='text-base text-gray-400 mt-2'>
            {songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  )
};

export default DetailsHeader;
