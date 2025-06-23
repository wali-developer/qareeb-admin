import {
  SearchInput,
  Typography,
  DateRangePicker,
} from "@/app/components/common";
import { UsersList } from "@/app/components/users";
import { NextPage } from "next";

const BookingPage: NextPage = () => {
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Users Management
      </Typography>
      <section className="mt-4 sm:mt-8">
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <SearchInput className="w-full sm:w-[370px] " />
          <DateRangePicker />
        </div>
        <UsersList />
      </section>
    </section>
  );
};

export default BookingPage;
