"use client";
import data from "@/content/team.json";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const Team = () => {
  const compareRoles = (a: { role: string }, b: { role: string }) => {
    const priorityOrder = [
      "Secretary",
      "Associate Secretary",
      "Technical Committee Head",
      "Technical Committee Secretary",
      "Working Committee Head",
      "Working Committee Secretary",
      "Media and Publicity Head",
      "Media and Publicity Secretary",
      "Publication and Reports Head",
      "Publication and Reports Secretary",
    ];

    const roleIndexA = priorityOrder.indexOf(a.role);
    const roleIndexB = priorityOrder.indexOf(b.role);

    if (roleIndexA !== -1 && roleIndexB !== -1) {
      return roleIndexA - roleIndexB;
    }

    if (roleIndexA !== -1) {
      return -1;
    }
    if (roleIndexB !== -1) {
      return 1;
    }

    return 0;
  };

  const sortedTeamMembers = Object.values(data).sort(compareRoles);

  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font">
        <div className="container md:px-5 py-24 mx-auto">
          <h1 className="font-poppins text-black text-3xl mb-5 py-5">Team</h1>

          <div className="flex flex-wrap -m-4">
            <Slide bottom delay={200}>
              <div className="lg:w-1/4 sm:w-1/2 w-full p-4">
                <Link
                  href="https://www.linkedin.com/in/nagesh-h-r-86945143?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQlKe3JyzRwiJK2BWoFPXuw%3D%3D"
                  target="_blank"
                  className="flex hover:shadow-2xl flex-col justify-center items-center border-2 bg-[#fefefe] bg-opacity-5 backdrop-blur-xl p-6 rounded-2xl"
                >
                  <img
                    className="h-40 rounded-full w-40 object-cover object-center mb-6"
                    src={`https://avatars1.githubusercontent.com/srajankumar`}
                    alt="content"
                  />
                  <h2 className="text-lg font-poppins text-gray-900 font-medium title-font ">
                    Dr. Nagesh HR
                  </h2>
                  <h3 className="tracking-widest text-indigo-500 my-1 text-xs font-medium title-font">
                    President
                  </h3>
                </Link>
              </div>
            </Slide>
            <Slide bottom delay={400}>
              <div className="lg:w-1/4 sm:w-1/2 w-full p-4">
                <Link
                  href="https://www.linkedin.com/in/harisha-achar-838b1462?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTnEWR4cfTkuzI%2FNwgU26bA%3D%3D"
                  target="_blank"
                  className="flex hover:shadow-2xl flex-col justify-center items-center border-2 bg-[#fefefe] bg-opacity-5 backdrop-blur-xl p-6 rounded-2xl"
                >
                  <img
                    className="h-40 rounded-full w-40 object-cover object-center mb-6"
                    src={`https://avatars1.githubusercontent.com/srajankumar`}
                    alt="content"
                  />
                  <h2 className="text-lg font-poppins text-gray-900 font-medium title-font ">
                    Mr. Harisha
                  </h2>
                  <h3 className="tracking-widest text-indigo-500 my-1 text-xs font-medium title-font">
                    Faculty Advisor
                  </h3>
                </Link>
              </div>
            </Slide>
          </div>

          <h1 className="font-poppins my-5 text-black text-3xl py-5">
            Core Members
          </h1>

          <div className="flex flex-wrap -m-4">
            {sortedTeamMembers.map((item, index) => (
              <div key={index} className="lg:w-1/4 sm:w-1/2 w-full p-4">
                <Slide bottom delay={index * 200}>
                  <div className="flex hover:shadow-2xl flex-col justify-center items-center border-2 bg-[#fefefe] bg-opacity-5 backdrop-blur-xl p-6 rounded-2xl">
                    <img
                      className="h-40 rounded-full w-40 object-cover object-center mb-6"
                      src={`https://avatars1.githubusercontent.com/${item.username}`}
                      alt="content"
                    />
                    <h2 className="text-lg font-poppins text-gray-900 font-medium title-font ">
                      {item.name}
                    </h2>
                    <h3 className="tracking-widest text-indigo-500 my-1 text-xs font-medium title-font">
                      {item.role}
                    </h3>
                    <div>
                      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <Link
                          href={`https://github.com/${item.username}`}
                          target="_blank"
                          className="text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full mt-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
                            />
                          </svg>
                        </Link>

                        <Link
                          href={item.linkedin}
                          target="_blank"
                          className="ml-3 text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full mt-3"
                        >
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </Link>
                        <Link
                          href={`mailto:${item.mail}`}
                          target="_blank"
                          className="ml-3 text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full mt-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                              <path d="m3 7l9 6l9-6" />
                            </g>
                          </svg>
                        </Link>
                      </span>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
