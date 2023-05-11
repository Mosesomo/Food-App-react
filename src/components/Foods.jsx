import {data} from "../data/data.js"
import {useState} from "react"

const Foods = () => {
  const [food, setFood] = useState(data)

  {/*filter type */}
  const type=(category)=> {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  {/*filter price */}
  const price=(price)=> {
    setFood(
      data.filter((item) => {
        return item.price === price;
        })
      );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-10">
      <h2 className="font-bold text-3xl text-orange-600 text-center">Top Rated Menu</h2>
      <div className="flex flex-col lg:flex-row justify-between">
      <div>
          <p className="text-gray-800 font-bold">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          <button className="text-orange-600 border-orange-500" onClick={() =>setFood(data)}>All</button>
          <button className="text-orange-600 border-orange-500 ml-2" onClick={() =>type('burger')}>Bugers</button>
          <button className="text-orange-600 border-orange-500 ml-2" onClick={() => type('pizza')}>Pizza</button>
          <button className="text-orange-600 border-orange-500 ml-2" onClick={() => type('chicken')}>Chickens</button>
          <button className="text-orange-600 border-orange-500 ml-2" onClick={() => type('salad')}>Salads</button>
        </div>
      </div>
      <div>
          <p className="text-gray-800 font-bold">Filter Price</p>
        <div className="flex justify-between flex-wrap">
          <button className="text-orange-600  border-orange-500" onClick={() =>price('$')}>$</button>
          <button className="text-orange-600 ml-3 border-orange-500" onClick={() =>price('$$')}>$$</button>
          <button className="text-orange-600 ml-3 border-orange-500" onClick={() => price('$$$')}>$$$</button>
          <button className="text-orange-600 ml-3 border-orange-500" onClick={() =>price('$$$$')}>$$$$</button>
        </div>
      </div>
    </div>

    {/*display foods*/}
    <div className="mt-4 grid grid-cols-2 lg:grid grid-col-4">
      {food.map((item, index) => (
        <div className="border shadow-lg hover:scale-105 duration-300" key={index}>
          <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
          <div className="flex justify-between px-2 py-4">
            <p className="font-bold">{item.name}</p>
            <p>
              <span className="bg-orange-500 rounded-full p-1 font-semibold">{item.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Foods
