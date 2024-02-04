import Services from "./Services";

const FeaturedServices = async () => {
  const res = await fetch("http://localhost:3000/api/services", {
    cache: "force-cache",
    next: {
      tags: ["services"],
    },
  });
  const data = await res.json();
  const latestServices = data.data.slice(0, 6);
  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-6xl">
          <span className="text-blue-500">Services</span> that we provide.
        </h1>
        <p className="text-center text-lg mt-10">
          We provide various computer repair services and solutions for our new
          and regular customers. <br /> Feel free to find out more below.
        </p>
      </div>
      <Services services={latestServices} />
    </div>
  );
};

export default FeaturedServices;
