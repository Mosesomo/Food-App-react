

const Cards = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 grid md:grid-cols-3 gap-6">
        {/*cards*/}
      <div className="rounded-xl relative">
        <div className="absolute  w-full h-full bg-black/50 rounded-xl text-white">

           <p className="font-bold text-2xl px-2 pt-4">Sun`s Out BOGO`s  Out</p>
           <p className="px-2">Through 8/26</p>
           <button className="border-white bg-white text-black mx-2 absolute bottom-1 hover:scale-95 duration-150">Order Now</button>

        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/9095726/pexels-photo-9095726.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute  w-full h-full bg-black/50 rounded-xl text-white">

           <p className="font-bold text-2xl px-2 pt-4">New Restuarant</p>
           <p className="px-2">Through 8/26</p>
           <button className="border-white bg-white text-black mx-2 absolute bottom-1 hover:scale-95 duration-150">Order Now</button>
        </div>

        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute  w-full h-full bg-black/50 rounded-xl text-white">

           <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
           <p className="px-2">Through 8/26</p>
           <button className="border-white bg-white text-black mx-2 absolute bottom-1 hover:scale-95 duration-150">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default Cards
