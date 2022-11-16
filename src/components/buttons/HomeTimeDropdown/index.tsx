import React from "react";

const HomeTimeDropdown = () => {
return(
    <select className="p-1 text-gray-900 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
    >
        <option selected>24 Jam</option>
        <option>1 MGG</option>
        <option>1 BLN</option>
        <option>1 THN</option>
        
    </select>
);


}

export default React.memo(HomeTimeDropdown);
