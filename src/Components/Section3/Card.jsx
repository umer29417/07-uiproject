import React from "react";

const Card = ({ title, image }) => {
    return (
        <div className="relative h-115 w-71.5 overflow-hidden">

            <img src={image} alt={title} className="h-full w-full object-cover " />

            <div className="absolute bottom-6 bg-white h-25 w-50 left-12">
                <h2 className="text-[30px] font-[600] text-gray-900 text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default Card;
