import EditServiceForm from "@/components/ui/EditServiceForm";

const EditServicePage = async ({ params }: { params: any }) => {
  const res = await fetch(`${process.env.BASE_URL}/api/services/${params.id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return <EditServiceForm service={data.data} />;
};

export default EditServicePage;
