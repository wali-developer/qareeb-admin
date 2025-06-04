import { BookingListings, BookingTabs } from "@/app/components/bookings";
import { Typography } from "@/app/components/common";
import { NextPage } from "next";

const BookingPage: NextPage = () => {
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Bookings
      </Typography>
      <BookingTabs />
      <BookingListings />
      {/* <BookingsTable /> */}
      {/* <Pagination /> */}
    </section>
  );
};

export default BookingPage;
