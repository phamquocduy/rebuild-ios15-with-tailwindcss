import rainbowImg from "./images/rainbow.jpg";

function App() {
  return (
    <div className="flex items-center justify-end min-h-screen px-10 bg-purple-50">
      <div className="relative h-[721px] w-[350px] bg-black rounded-[50px] shadow-xl border-black overflow-hidden border-[14px]">
        <img
          src={rainbowImg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />

        {/* notch */}
        <div className="absolute top-0 inset-x-0">
          <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl"></div>
        </div>

        {/* icons for WiFi and battery */}
        <div className="relative">
          <div className="mt-2 mr-5 flex justify-end space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>

            {/* WiFi icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            {/* truck */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
          </div>

          {/* little bar */}
          <div className="h-0.5 w-10 bg-white mr-7 ml-auto mt-1.5 rounded"></div>

          <div className="mt-4 flex flex-col items-center">
            {/* clock icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>

            {/* clock */}
            <p className="mt-3 text-white text-6xl font-extralight">20:46</p>
            <p className="mt-1 text-white text-lg font-light">
              Wednesday 5 January
            </p>
          </div>

          {/* notification panel */}
          <div className="mt-4 mx-2 relative">
            <div className="absolute -bottom-4 inset-x-0 h-full bg-white/10 backdrop-blur-md rounded-3xl scale-[0.85] origin-bottom"></div>
            <div className="absolute -bottom-2 inset-x-0 h-full bg-white/20 backdrop-blur-md rounded-3xl scale-95 origin-bottom shadow-sm"></div>

            <div className="bg-white/40 rounded-3xl p-4 backdrop-blur-md shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs font-bold">09:30</p>
                  <h2 className="text-lg font-bold">Your Summary</h2>
                </div>

                <span className="flex items-center justify-center bg-gray-500 h-8 w-8 rounded-full text-white">
                  12
                </span>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <img
                    className="rounded-lg"
                    src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
                  ></img>
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Surfing: bla bla bla bla bla bla bla
                  </h3>
                  <p className="mt-1 text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>

                <div>
                  <img
                    className="rounded-lg"
                    src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
                  ></img>
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Surfing: bla bla bla bla bla bla bla
                  </h3>
                  <p className="mt-1 text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>

              <hr className="mt-4 border-black/20"></hr>
              <div className="mt-3 grid grid-cols-3 gap-1 items-end">
                <div className="col-span-2">
                  <h3 className="text-sm font-bold">More updates</h3>
                  <p className="mt-0.5 text-xs">Reddit, aaa, bbb, ccc</p>
                </div>

                <ul className="flex  flex-row-reverse -space-x-4 space-x-reverse">
                  <li>
                    <img
                      className="h-8 w-8 object-cover rounded-xl"
                      src="https://cdn.dribbble.com/users/5745266/screenshots/13977782/media/1bd8a00b559752b86996197fcd7645dd.png?compress=1&resize=400x300"
                    ></img>
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 object-cover rounded-xl"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    ></img>
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 object-cover rounded-xl"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20">
          <div className="flex justify-between px-10">
            <button className="bg-gray-800/40 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </button>
            <button className="bg-gray-800/40 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute bottom-1 inset-x-0">
          <div className="mx-auto h-1 w-28 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
