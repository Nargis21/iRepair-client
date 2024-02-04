import { Button } from "antd";
import Link from "next/link";
export type TService = {
    _id: string,
    name: string,
    description: string,
    price: number,
    devices: string[]
}
const Service = ({ services }: { services: TService[] }) => {
    return (
        <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
            {
                services?.map((service: TService) => (
                    <div key={service._id} className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
                        <h1 className="text-2xl font-semibold">{service?.name}</h1>
                        <p className="my-3">{service?.description}</p>
                        <p><span className="font-semibold">Price:</span> {service?.price}</p>
                        <p className="my-5 bg-blue-200 rounded-full px-3 py-2 ">
                            {service.devices}
                        </p>
                        {/* <p className="my-5">
                            {service?.devices.map((device) => <span className="bg-blue-200 rounded-full px-3 py-2 mr-1" key={device}>{device}</span>)}
                        </p> */}
                        <Link href={`/booking/${service._id}`} className="mt-4 w-full text-right">
                            <Button type="primary">Book Now</Button>
                        </Link>

                    </div>
                ))
            }
        </div>

    );
};

export default Service;
