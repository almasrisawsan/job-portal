
const SearchBox = () => {
  return (
         <div className="flex flex-col sm:flex-row gap-3 mt-2 max-w-xl">
        <input
          type="text"
          placeholder="Search by job title........................"
          className="
            flex-1 px-5 py-3 
            rounded-lg 
            border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-[#338573] focus:border-transparent
            bg-white
            text-gray-700
            placeholder:text-gray-400
            font-poppins
          "
        />
        <button 
          className="
            bg-[#338573] 
            text-white 
            px-8 py-3 
            rounded-lg 
            font-poppins font-medium 
            hover:bg-[#2a6b5c] 
            transition-colors
            whitespace-nowrap
          "
        >
          Search
        </button>
      </div>
  )
}

export default SearchBox