import ManageServiceTable from '@/components/ui/ManageServiceTable';
import React from 'react';

const ManageServicePage = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/api/services`, {
        cache: "no-cache",
        next: {
            tags: ["services"],
        },
    });
    const data = await res.json();
    return (
        <ManageServiceTable services={data.data}></ManageServiceTable>
    );
};

export default ManageServicePage;