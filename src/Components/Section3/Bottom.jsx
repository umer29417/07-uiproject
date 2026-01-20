import React from "react";
import Card from "./Card";

const Bottom = () => {
    const cards = [
        {
            title: "Startup Consulting",
            image: "https://www.bing.com/th/id/OIP.h9VHS6mHJ0xL0UyiIzkPmwHaFE?w=237&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
        },
        {
            title: "Growth Strategy",
            image: "https://www.bing.com/th/id/OIP.h9VHS6mHJ0xL0UyiIzkPmwHaFE?w=237&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
        },
        {
            title: "Market Research",
            image: "https://www.bing.com/th/id/OIP.h9VHS6mHJ0xL0UyiIzkPmwHaFE?w=237&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
        },
        {
            title: "Product Development",
            image: "https://www.bing.com/th/id/OIP.h9VHS6mHJ0xL0UyiIzkPmwHaFE?w=237&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
        },
        {
            title: "Expert Mentorship",
            image: "https://www.bing.com/th/id/OIP.h9VHS6mHJ0xL0UyiIzkPmwHaFE?w=237&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
        },
    ];

    return (
        <div className="flex flex-wrap gap-5 pt-5">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} image={card.image} />
            ))}
        </div>
    );
};

export default Bottom;
