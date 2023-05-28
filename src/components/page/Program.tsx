import Image from "next/image";

const a = [2, 2, 2, 2, 2, 2];

const Program = () => {
  return (
    <>
      <div className="w-full h-full relative isolate pt-20">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-64"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[44.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-orange500 via-blue400 to-red500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="space-y-14">
          <div className="space-y-4 px-6 md:px-0">
            <h1 className="text-xl font-semibold text-gray800">Program</h1>
            <p className="w-11/12 md:w-5/6 lg:w-2/4 text-sm font-light">
              We{"’"}re a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray800 text-center">
              IDC Division
            </h1>
            <div className="flex items-center justify-center pt-14">
              <div className="grid grid-cols-2 md:grid-cols-3 w-fit gap-3 justify-self-center">
                <div className="w-44 h-44 bg-blue-500 overflow-hidden rounded-xl">
                  <Image
                    src={
                      "https://cdn.discordapp.com/attachments/1055060226858029076/1112241795502444604/blog-thumb-1.png"
                    }
                    className="object-cover w-full h-full relative"
                    alt={""}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-44 h-44 bg-blue-500 overflow-hidden rounded-xl">
                  <Image
                    src={
                      "https://cdn.discordapp.com/attachments/1055060226858029076/1112241926738026607/wPr2XV3ZB8vO0AAAAASUVORK5CYII.png"
                    }
                    className="object-cover w-full h-full relative"
                    alt={""}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-44 h-44 bg-blue-500 overflow-hidden rounded-xl">
                  <Image
                    src={
                      "https://cdn.discordapp.com/attachments/1055060226858029076/1112242021860638801/images.png"
                    }
                    className="object-cover w-full h-full relative"
                    alt={""}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-4 px-2 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {a.map((s, r) => {
              return (
                <div
                  key={r}
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md flex-none relative"
                >
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;