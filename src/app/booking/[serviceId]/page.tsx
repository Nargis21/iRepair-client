import BookingForm from "@/components/ui/BookingForm";
import { TSession } from "@/types/globalTypes";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

type TParams = {
  serviceId: string;
};


const BookingPage = async ({ params }: { params: TParams }) => {
  const session = await getServerSession(authOptions) as TSession
  const serviceId = params.serviceId;
  const res = await fetch(`http://localhost:3000/api/services/${serviceId}`, {
    cache: "no-store",
  });
  const service = await res.json();
  return (
    <div>
      <BookingForm session={session} service={service?.data} />
    </div>
  );
};

export default BookingPage;
