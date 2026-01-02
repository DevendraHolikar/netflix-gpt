import GptMovieSuggestions from "./GptMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"
import {BG_URL} from "../utils/constants"

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img className="h-full w-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <GPTSearchBar></GPTSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  )
}

export default GPTSearch