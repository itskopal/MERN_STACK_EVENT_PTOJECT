import React from "react";

const Services = () => {
    const services = [
        {
            id: 1,
            url: "/birthday.jpg",
            title: "Birthday Planning",
        },
        {
            id: 2,
            url: "/anniversary.jpg",
            title: "Anniversary Planning",
        },
        {
            id: 3,
            url: "/camping.jpg",
            title: "Camping Trip Planning",
        },
        {
            id: 4,
            url: "/gamenight.jpg",
            title: "Game Night Planning",
        },
        {
            id: 5,
            url: "/party.jpg",
            title: "Party Planning",
        },
        {
            id: 6,
            url: "/wedding.jpg",
            title: "Wedding Planning",
        },
    ];
    return (
        <>
            <div className="services container">
                <h2>OUR SERVICES</h2>
                <div className="banner">
                    {services.map((element) => {
                        return (
                            <div className="item" key={element.id}>
                                <h3>{element.title}</h3>
                                <img src={element.url} alt={element.title} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="service_row">
                <div className="left">
                    <h1><span>S</span>ervices</h1>
                    <p>
                        We provide services such as wedding, anniversary, and party.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                        ad nemo consectetur accusantium nesciunt quis ipsam repellendus!
                    </p>
                </div>
                <div className="right">
                    <img src="/s1.jpg" alt="service-Image" className="service-img" />
                </div>
            </div>

            <div className="service_row reverse-row">
                <div className="left">
                    <h1><span>S</span>ervices</h1>
                    <p>
                        We provide services such as birthday, camping trip, and game night.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                        ad nemo consectetur accusantium nesciunt quis ipsam repellendus!
                    </p>
                </div>
                <div className="right">
                    <img src="/s2.jpg" alt="service-Image" className="service-img-two" />
                </div>
            </div>
        </>
    );
};

export default Services;
