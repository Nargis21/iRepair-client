import BookingForm from "@/components/ui/BookingForm";

type TParams = {
  serviceId: string;
};

const BookingPage = async ({ params }: { params: TParams }) => {
  const serviceId = params.serviceId;
  const res = await fetch(`http://localhost:3000/api/services/${serviceId}`, {
    cache: "no-store",
  });
  const service = await res.json();
  return (
    <div>
      <BookingForm service={service?.data} />
    </div>
  );
};

export default BookingPage;
