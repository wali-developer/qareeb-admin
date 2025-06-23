import { NextPage } from "next";
import { SearchInput, Typography } from "@/app/components/common";
import { SupportsList } from "@/app/components/support";

const BookingPage: NextPage = () => {
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Customer Support
      </Typography>
      <section className="sm:mt-8">
        <SearchInput className="w-full sm:w-[370px] " />
        <SupportsList />
      </section>
    </section>
  );
};

export default BookingPage;
