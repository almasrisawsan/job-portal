import SearchBox from './searchBox'

const TextContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1
        className="
          font-poppins font-bold
          text-5xl sm:text-6xl lg:text-[70px] 
          leading-tight lg:leading-[80px] 
          tracking-normal
          text-black
          text-left
          [&>span]:text-[#338573]
        "
      >
        Find A <span>Job</span> That <span>Matches</span> Your Passion
      </h1>

      <p
        className="
          font-poppins font-normal
          text-base sm:text-lg lg:text-[18px] 
          leading-relaxed lg:leading-[28px] 
          tracking-normal
          text-[#616161]
          text-left
          max-w-xl
        "
      >
        Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.
      </p>

        <SearchBox/>
    </div>
  )
}

export default TextContent