import React from "react";
import Hero from "@/app/components/HomeComponent/Hero";
import EatDrinkEnjoy from "@/app/components/HomeComponent/EatDrinkEnjoy";
import OurRestaurant from "@/app/components/HomeComponent/OurRestaurant";
import HomeOrder from "@/app/components/HomeComponent/HomeOrder";
import HomeBookTable from "@/app/components/HomeComponent/HomeBookTable";

const page = () => {
  return (
    <div>
      <Hero />
      <EatDrinkEnjoy />
      <OurRestaurant />
      <HomeOrder />
      <HomeBookTable />
    </div>
  );
};

export default page;
