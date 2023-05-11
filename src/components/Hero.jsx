

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/*overlay*/}
        <div className="absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="p-4 text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
            <h1 className="text-orange-500 p-4 font-bold text-4xl sm:text-6xl md:text-5xl lg:text-7xl">Foods <span className="p-4 text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white">Delivered</span></h1>
        </div>
        <img className="w-full object-cover h-[500px]" src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}
export default Hero
