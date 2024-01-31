import BookingForm from "@/components/ui/BookingForm";

type TParams = {
    serviceId: string;
};

const BookingPage = async ({ params }: { params: TParams }) => {
    const serviceId = params.serviceId;
    const res = await fetch(`http://localhost:5000/api/v1/services/${serviceId}`, {
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