
import { useSelector } from "react-redux";
import lang from "../utils/languageConstantsdata";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addMovieSearch } from "../utils/moviesSlice"


const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const disPatch = useDispatch()

    const handleGptSearchClick = () => {
        disPatch(addMovieSearch(searchText.current.value))
    }

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center ">
            <form
                className="w-[90%]  md:w-1/2 bg-black flex justify-center md:justify-between flex-col md:flex-row"
                onSubmit={(e) => e.preventDefault()}>

                <input ref={searchText} type="text" className="h-8 text-sm md:text-lg md:h-12 m-auto mt-4 w-[90%] md:w-full p-4 md:m-4" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button onClick={handleGptSearchClick} className="text-sm md:text-lg m-4 py-2 px-4 bg-red-700 text-white rounded-lg" >
                    {lang[langKey].search}
                </button>

            </form>

        </div>
    )
}

export default GPTSearchBar