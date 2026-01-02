
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-[100%] aspect-video pt-6 md:pt-[20%] px-6 md:px-6 realative md:absolute bg-black md:bg-transparent text-white md:bg-gradient-to-r md:from-black ">
            <h1 className="text-white font-bold text-3xl lg:text-3xl xl:text-6xl">{title}</h1>
            <p className="text-white text-sm xl:text-lg pt-3 w-full md:w-1/2 text-ellipsis md:text-clip">{overview}</p>
            <div className="pt-5">
                <button className="bg-white p-1 md:p-4 px-14 text-sm md:text-lg bg-opacity-100 rounded-xl mr-4 text-black hover:bg-opacity-80">▶︎ Play</button>
                <button className="mt-4 md:mt-0 bg-gray-500 p-1 md:p-4 px-14 text-sm md:text-lg bg-opacity-50 rounded-xl text-white hover:bg-opacity-80">
                    ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle