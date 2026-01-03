import GptMovieSuggestions from "./GptMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div className="bg-black h-screen">
      <div className="absolute inset-0 -z-10">
      </div>
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <GPTSearchBar></GPTSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  )
} 

export default GPTSearch