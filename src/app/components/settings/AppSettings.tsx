import React from "react";
import { PricingList } from "./PricingList";
import { AreasList } from "./AreasLis";
import { BookingRules } from "./BookingRules";

export const AppSettings = () => {
  return (
    <section className="space-y-6">
      <PricingList />
      <AreasList />
      <BookingRules />
    </section>
  );
};
