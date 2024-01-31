import Services from "@/components/ui/Services";

const ServicePage = async () => {
    const res = await fetch('http://localhost:5000/api/v1/services', { cache: 'force-cache' })
    const data = await res.json()
    return (
        <div>
            <Services services={data.data} />
        </div>
    );
};

export default ServicePage;