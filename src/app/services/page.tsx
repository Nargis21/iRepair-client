import Services from "@/components/ui/Services";

const ServicePage = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/services`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <div>
      <Services services={data.data} />
    </div>
  );
};

export default ServicePage;
