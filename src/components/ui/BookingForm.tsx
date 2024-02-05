"use client";

import { Button, Form, Input } from "antd";
import { TService } from "./Services";
import { createBooking } from "@/services/bookings/create-booking";
import { toast } from "sonner";
import { TSession } from "@/types/globalTypes";
import { useRouter } from "next/navigation";


export type TBookingFormValues = {
    serviceName: string;
    price: string;
    fullName: string;
    email: string;
    phone: string;
}

const BookingForm = ({ service, session }: { service: TService, session: TSession }) => {
    const [form] = Form.useForm();
    const router = useRouter()
    const onFinish = async (values: TBookingFormValues) => {
        const status = await createBooking(values)

        if (status.message === "success") {
            toast.success('Booking Successful')
            form.resetFields();
            router.push("/user/my-bookings")
        } else {
            toast.error('Booking Failed')
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex justify-center py-12">
            <div className="lg:w-[50%] md:[60%] w-[90%] shadow-xl bg-white">
                <h1 className="text-center text-xl py-6 bg-gray-200">Booking Form</h1>
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ serviceName: service.name, price: service.price, fullName: session.name, email: session.email, status: 'Pending', }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="p-5"
                    form={form}
                >
                    <Form.Item
                        label="Service Name"
                        name="serviceName"
                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Service Price"
                        name="price"
                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Full Name"
                        name="fullName"

                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input type="email" size="large" disabled className="text-black" />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{ required: true, message: "Please input your Phone Number!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        className="hidden"
                        name='status'
                    >
                        <Input type="hidden" size="large" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block size="large">
                            Confirm Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default BookingForm;
