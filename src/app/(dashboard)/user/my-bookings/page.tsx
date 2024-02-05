import MyBookingTable from "@/components/ui/MyBookingTable";
import { TSession } from "@/types/globalTypes";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const MyBookingsPage = async () => {
  const session = (await getServerSession(authOptions)) as TSession;
  const res = await fetch(
    `${process.env.BASE_URL}/api/bookings?email=${session.email}`,
    {
      cache: "no-cache",
      next: {
        tags: ["bookings"],
      },
    }
  );
  const data = await res.json();
  return <MyBookingTable bookings={data.data}></MyBookingTable>;
};

export default MyBookingsPage;
