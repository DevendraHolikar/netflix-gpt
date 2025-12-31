
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-[100%] aspect-video pt-[20%] px-6 md:px-6 absolute text-white bg-gradient-to-r from-black ">
            <h1 className="text-white font-bold text-6xl">{title}</h1>
            <p className="text-white text-lg pt-3 w-1/2">{overview}</p>
            <div className="pt-5">
                <button className="bg-white p-4 px-14 text-lg bg-opacity-100 rounded-xl mr-4 text-black">▶︎ Play</button>
                <button className="bg-gray-500 p-4 px-14 text-lg bg-opacity-50 rounded-xl text-white">
                    ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle