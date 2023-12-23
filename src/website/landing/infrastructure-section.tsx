import React from "react";

const InfrastructureSection = () => {
  const productCardDertails = [
    {
      title: "ACH",
      description:
        "Originate ACH credits and debits with a single API request. Utilize all five settlement windows, configure every NACHA option and control every step.",
      icon: "",
      link: "",
    },
    {
      title: "Wire",
      description:
        "Transfer funds immediately to any bank account through FedWire via API. Receive domestic and international wires with instant updates and all the raw data.",
      icon: "",
      link: "",
    },
    {
      title: "Book Transfers",
      description:
        "When you own both accounts at Column, transfers are real-time every second of the day.",
      icon: "",
      link: "",
    },
    {
      title: "Ledger",
      description:
        "Ledger each transaction automatically onto our system of record. Complete visibility and full banking functionality with the ease of an API.",
      icon: "",
      link: "",
    },
    {
      title: "Bank Accounts",
      description:
        "Spin up programmable and scalable FDIC insured bank accounts for your customers in one API call. All from our robust, easy to use developer platform.",
      icon: "",
      link: "",
    },
    {
      title: "Card Programs",
      description:
        "Build a customized card program that fits your stage. With a dedicated BIN and the choice of issuing processors, you maintain control.",
      icon: "",
      link: "",
    },
    {
      title: "Checks",
      description:
        "Take full control of the end to end check flows. From RDC to checkbooks to positive-pay, we allow you to build your optimal check flow and own the entire process.",
      icon: "",
      link: "",
    },
    {
      title: "FedNow",
      description:
        "The Federal Reserve’s new real-time payment rail. Instant, transparent, and available 24/7/365.",
      icon: "",
      link: "",
    },
    {
      title: "International Wires",
      description: "",
      icon: "",
      link: "",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-center my-48">
      <h1 className="text-4xl font-bold max-w-3xl">
        Infrastructure products built for developers in the lightest format
        possible
      </h1>
      <div className="">
        {productCardDertails.map((product, index) => (
          <a href={product.link} key={index}>
            <div className="w-72 h-72 p-14 border shadow-sm hover:shadow-lg transition-all animate-out">
              <h3 className="text-3xl text-gray-800 font-bold">
                {product.title}
              </h3>
              <p className="text-base font-medium">{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureSection;
