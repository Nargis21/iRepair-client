import ManageServiceTable from "@/components/ui/ManageServiceTable";

const ManageServicePage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/services`, {
    cache: "no-cache",
    next: {
      tags: ["services"],
    },
  });
  const data = await res.json();
  return <ManageServiceTable services={data.data}></ManageServiceTable>;
};

export default ManageServicePage;
