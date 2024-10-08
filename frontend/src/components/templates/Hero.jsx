import React from "react";
// import SearchForm from "../forms/SearchForm";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";

import carImage from "../../assets/car.png";

const Hero = () => {
  return (
    <div className="bg-[#f5f7fc] min-h-screen">
      <main className="container mx-auto px-14 pt-36 py-20 md:pt-32 md:px-16 lg:px-28">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-100% lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 md:text-5xl lg:text-5xl xl:text-6xl lg:leading-normal">
              Temukan, pesan, dan sewa mobil di{" "}
              <span className="underline text-blue-500">Easy Car</span>.
            </h2>
            <p className="text-gray-600 mb-4 md:text-lg lg:text-xl">
              Dapatkan mobil dimanapun dan kapanpun Anda membutuhkannya.
            </p>
            <Link to="/book-car">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4">
                <p>Mulai Rental</p>
              </Button>
            </Link>
          </div>
          <div className="md:w-100% lg:w-1/2">
            <img
              src={carImage}
              alt="Car"
              className="lg:w-100% xl:w-[46rem] md:block lg:flex xl:absolute right-0 top-0 mt-0 xl:mt-[7rem]"
            />
          </div>
        </div>
        {/* <SearchForm /> */}
      </main>
    </div>
  );
};

export default Hero;
