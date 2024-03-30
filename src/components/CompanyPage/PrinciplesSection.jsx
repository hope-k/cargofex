import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const PrinciplesSection = () => {
  const principles = [
    {
      title: "Logistic Support",
      description:
        "We are committed to ensuring the smooth operation of your supply chain. Our team of experienced professionals provides comprehensive logistics solutions, tailored to meet your specific needs. We handle everything from transportation and warehousing to inventory management, ensuring your goods reach their destination on time and in perfect condition",
      image: "/company/logistics.jpg",
    },
    {
      title: "Customer Support",
      description:
        "We believe in putting our customers first. Our dedicated team is available around the clock to assist you with any queries or concerns you may have. We strive to provide prompt, efficient, and personalized service to ensure your satisfaction.",
      image: "/company/customer-support.jpg",
    },
    {
      title: "Credit Management",
      description:
        "  Our team of experts is dedicated to managing and protecting your credit, ensuring that your financial operations run smoothly. We offer a range of services including credit assessment, risk analysis, collection of outstanding invoices, and dispute resolution. Our goal is to optimize your company’s credit policy to improve profitability while minimizing risk.",
      image: "/company/credit-management.jpg",
    },
    {
      title: "Client Relationships",
      description:
        " We believe in open communication and transparency, ensuring that you are always informed and confident in our services. We are committed to providing exceptional service and fostering long-term relationships based on mutual respect and success. Your satisfaction is our priority, and we continually strive to enhance our services to meet your evolving needs.",
      image: "/company/client-relationship.jpg",
    },
    {
      title: "Tracking Updates",
      description:
        "Tracking Updates is our commitment to keeping you informed about your shipments. We understand how important it is for you to know the status and location of your goods at all times. That’s why we provide real-time tracking updates and notifications, so you can monitor your shipments from pickup to delivery. Our advanced tracking system allows you to view detailed transit information, ensuring you always have the most up-to-date information at your fingertips",
      image: "/company/tracking.jpg",
    },
    {
      title: "Communication",
      description:
        "Communication is at the heart of our operations. We believe in maintaining clear, open, and timely communication with our clients. Our team is always available to answer your queries, provide updates, and ensure you are informed about our logistics processes. We use various channels of communication to ensure you can reach us when you need to. We also provide regular updates and reports so you can stay informed about your shipments.",
      image: "/company/communication.jpg",
    },
  ];

  return (
    <div>
      <div className="container">
        <div>
          <h1>comprehensive principles</h1>
          <p>
            We offer a full range of air freight services with our global
            network of partners. We are able to deliver your cargo to any
            destination, on time.
          </p>
        </div>

        <div className="flex w-full  gap-6   mt-12 flex-col lg:flex-row flex-wrap justify-between">
          {principles.map((service, i) => (
            <div
              key={i}
              className="h-full lg:w-[32%] w-full border border-gray-300  relative"
            >
              <div className=" relative  w-full overflow-hidden h-[290px]  bg-left">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectPosition="center center"
                  objectFit="cover"
                  className=" rounded-t-md"
                />
              </div>
              <div className="bg-white flex flex-col relative px-[2rem] pt-[2rem] pb-[5rem] rounded-b-md space-y-6">
                <h1 className="text-gray-900 text-xl font-[600] ">
                  {service.title}
                </h1>
                <p className="text-gray-500 text-[18px] font-[500] ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
