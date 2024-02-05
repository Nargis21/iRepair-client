'use client'
import { Table } from "antd";
import { useState } from "react";
import { TBookingFormValues } from "./BookingForm";
import { AnyObject } from "antd/es/_util/type";

const MyBookingTable = ({ bookings }: { bookings: TBookingFormValues[] }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination: any) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const columns = [
        {
            title: 'No.',
            key: 'no',
            render: (text: any, record: AnyObject, index: number) => index + 1 + (currentPage - 1) * pageSize,
        },
        {
            title: "Service",
            dataIndex: "serviceName",
            key: "serviceName",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "servicePricing",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },

    ];
    return (
        <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:h-screen">
            <h1 className="text-2xl pb-4">
                My Bookings
            </h1>
            <hr />
            <Table onChange={(pagination) => handleTableChange(pagination)} scroll={{ x: '100%' }}
                className="mt-4"
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: "10px"
                }}
                pagination={{
                    pageSize: 5,
                    style: {
                        backgroundColor: '#ffffff',
                        paddingRight: '15px'
                    },
                }} dataSource={bookings} columns={columns} />
        </div>
    );
};

export default MyBookingTable;