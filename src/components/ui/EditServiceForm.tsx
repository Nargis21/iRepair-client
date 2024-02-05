"use client";

import { Button, Form, Input } from "antd";
import { toast } from "sonner";
import TextArea from "antd/es/input/TextArea";
import { editService } from "@/services/services/edit-service";
import { useRouter } from "next/navigation";

export type TEditServiceFormValues = {
    _id: string;
    name: string;
    price: number;
    description: string;
    devices: string;
}

const EditServiceForm = ({ service }: { service: TEditServiceFormValues }) => {
    const router = useRouter()
    const [form] = Form.useForm();
    const onFinish = async (values: TEditServiceFormValues) => {
        const status = await editService({ id: service._id, data: { ...values } })

        if (status.message === "success") {
            toast.success('Service Updated!')
            router.push('/admin/manage-services')
        } else {
            toast.error('Failed to update service!')
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
            <div className="max-w-xl shadow-xl bg-white mx-auto">
                <h1 className="text-center text-xl py-6 bg-gray-300">Edit Service Form</h1>
                <Form
                    layout="vertical"
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="p-5"
                    form={form}
                    initialValues={{ name: service.name, price: service.price, devices: service.devices, description: service.description }}
                >
                    <Form.Item
                        label="Service Name"
                        name="name"
                        rules={[{ required: true, message: "Please input service name!" }]}
                    >
                        <Input type="text" size="large" className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: "Please input service price!" }]}
                    >
                        <Input type="number" size="large" className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Devices"
                        name="devices"
                        rules={[{ required: true, message: "Please input devices!" }]}
                    >
                        <Input type="text" size="large" className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "Please input description!" }]}
                    >
                        <TextArea rows={4} className="text-black" />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block size="large">
                            Update Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default EditServiceForm;
