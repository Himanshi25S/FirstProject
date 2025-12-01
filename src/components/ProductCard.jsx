import React from "react";
import { Link } from "react-router-dom";
import data from "../data/Data.json";

const Cards = () => {
const resolveImage = (imageName) =>
new URL(`../assets/${imageName}`, import.meta.url).href;

return ( <div className="block sm:hidden grid grid-cols-1 gap-6 px-3 py-5">
{data.products.map((loan, index) => ( <div
       key={index}
       className="flex flex-col overflow-hidden rounded-lg border border-black/10 shadow-md"
     > <img
         src={resolveImage(loan.image)}
         alt={loan.title}
         className="h-50 w-85 object-cover object-center"
       />

```
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <h3 className="text-xl font-semibold text-[#170C52]">
          {loan.title}
        </h3>

        <p className="text-sm text-gray-600">{loan.company}</p>

        <p className="text-sm text-gray-500">
          Price: ₹{loan.price} | MRP: ₹{loan.mrp}
        </p>

        <div className="mt-auto flex flex-wrap justify-between gap-3">
          <Link
            to={`/loan/${loan.id}`}
            className="rounded border border-[#170C52] px-4 py-2 text-sm font-medium text-[#170C52] transition transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#170C52] hover:text-white"
          >
            Know More
          </Link>

          <button
            className="rounded bg-[#170C52] px-4 py-2 text-sm font-medium text-white transition transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f0637]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  ))}
  <div>
    <h1>Shop By Manufacturers</h1>
    
  </div>
</div>
)};

export default Cards;
