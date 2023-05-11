import {categories} from "../data/data.js";

const Category =  () => {
    return (
        <div className="max-w-[1640px] m-auto px-4 py-10">
            <h1 className="font-bold text-3xl text-center text-orange-500">Top Rated Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-4">
                {categories.map((item, index) => (
                    <div className="bg-gray-200 rounded-lg p-4 flex justify-between items-center" key={index}>
                        <h2 className="font-bold">{item.name}</h2>
                        <img src={item.image} alt={item.name} />
                    </div>
                    ))}
             </div>
        </div>
    )
}
export default Category