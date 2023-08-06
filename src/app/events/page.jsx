import Background from "@/components/Background";
import data from "@/content/events/events.json";
import Link from "next/link";

const Team = () => {
  const currentDate = new Date();

  // Sort the events date-wise before rendering
  const sortedEvents = Object.values(data).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const upcomingEvents = sortedEvents.filter(
    (item) => new Date(item.date) >= currentDate
  );
  const pastEvents = sortedEvents.filter(
    (item) => new Date(item.date) < currentDate
  );

  return (
    <div className="min-h-screen">
      <Background />
      <div className="fixed z-20 px-5 font-poppins backdrop-blur-lg py-5 w-full">
        <Link href="/">Back</Link>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-10 pt-20 mx-auto">
          <h1 className="font-poppins text-black text-3xl py-5">
            Upcoming Events
          </h1>
          <div className="flex flex-wrap -m-4">
            {upcomingEvents.map((item, index) => (
              <div key={index} className="lg:w-1/4 sm:w-1/2 w-full p-4">
                <div className="flex hover:shadow-2xl flex-col border-2 bg-[#fefefe] bg-opacity-5 backdrop-blur-xl p-6 rounded-2xl">
                  <img
                    className="w-full object-cover object-center mb-6"
                    src={`assets/events/${item.image}`}
                    alt="content"
                  />
                  <h2 className="text-lg font-poppins text-gray-900 font-medium title-font ">
                    {item.name}
                  </h2>

                  <div className="flex pt-1 w-full justify-between">
                    <h3 className="tracking-widest text-indigo-500 my-1 text-sm font-medium title-font">
                      {item.date}
                    </h3>
                    {item.register && (
                      <Link
                        href={item.register}
                        target="_blank"
                        className="tracking-widest font-poppins font-bold hover:underline underline-offset-4 text-indigo-500 my-1 text-sm title-font"
                      >
                        register
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-10 mx-auto">
          <h1 className="font-poppins text-black text-3xl py-5">Past Events</h1>
          <div className="flex flex-wrap -m-4">
            {pastEvents.map((item, index) => (
              <div key={index} className="lg:w-1/4 sm:w-1/2 w-full p-4">
                <div className="flex hover:shadow-2xl flex-col border-2 bg-[#fefefe] bg-opacity-5 backdrop-blur-xl p-6 rounded-2xl">
                  <img
                    className="w-full object-cover object-center mb-6"
                    src={`assets/events/${item.image}`}
                    alt="content"
                  />
                  <h2 className="text-lg font-poppins text-gray-900 font-medium title-font ">
                    {item.name}
                  </h2>

                  <div className="flex pt-1 w-full justify-between">
                    <h3 className="tracking-widest text-indigo-500 my-1 text-sm font-medium title-font">
                      {item.date}
                    </h3>
                    {item.report && (
                      <a
                        href={`assets/events/${item.report}`}
                        target="_blank"
                        className="tracking-widest font-poppins font-bold hover:underline underline-offset-4 text-indigo-500 my-1 text-sm title-font"
                      >
                        report
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
