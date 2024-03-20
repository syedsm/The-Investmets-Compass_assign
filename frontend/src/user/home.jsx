import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-white">
        <div className="max-w-7xl mx-auto relative text-gray-700 body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-3 md:flex-row">
            <Link
              to="#_"
              className="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none logo">
                test Website<span className="text-blue-600">.</span>
              </span>
            </Link>
            <div className="relative flex flex-col md:flex-row items-center">
              <nav className="flex flex-wrap items-center  text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                <Link
                  to="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  Home
                </Link>
                <Link
                  to="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  How It Works
                </Link>
                <Link
                  to="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  Content
                </Link>
                <Link
                  to='#'
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  About Us
                </Link>
              </nav>
              <div className="inline-flex items-center justify-center  space-x-4 md:space-x-10 md:justify-end">
                <Link
                  to="/"
                  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-blue-600 secondary_text link-editable"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-4 py-32 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-11/12 xl:w-8/12 md:text-center">
            <h1
              className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold primary_text editable"
              data-content="website-headlines"
            >
              Unlock Your Digital Potential: Join Our Community of Tech
              Enthusiasts!
            </h1>
            <p
              className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal secondary_text editable"
              data-content="website-subheadlines"
            >
              Join our community of digital tech enthusiasts and level up your
              skills with our courses. Plus, stay updated with our online events
              through our website.
            </p>
            <form className="flex items-center justify-center w-full pt-1 mx-auto mb-8">
              <label className="mr-2 mb-0 w-2/4">
                <span className="sr-only">Your Email</span>
                <input
                  className="mt-0 border text-lg border-gray-300 rounded-sm secondary_text px-3 py-3 w-full box-border"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
              </label>
              <button
                className="bg-blue-600 text-lg text-white font-medium border border-indigo-600 px-8 py-3 rounded-sm hover:bg-blue-700 secondary_text btn-editable editable"
                type="submit"
              >
                Get Started
              </button>
            </form>
            <div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-1 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">
                  No credit card required
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-1 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">
                  14 days free
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-1 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">
                  Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          data-content="how-it-works"
        >
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block mb-2 text-base font-semibold tracking-wider text-blue-600 uppercase rounded-full secondary_text editable">
                How it works
              </p>
            </div>
            <h2
              className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto primary_text editable"
              data-content="website-headlines"
            >
              Unleash Your Digital Potential with Our Online Courses and Events
            </h2>
            <p
              className="text-base text-gray-600 md:text-lg secondary_text editable"
              data-content="website-subheadlines"
            >
              Join our digital community and unlock your potential with our
              expertly crafted online courses and engaging virtual events. Lets
              elevate your digital skills together.
            </p>
          </div>
          <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
            <div className="relative text-center" data-subcontent="step_1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                className="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
                data-subcontent="step-title"
              >
                Explore our services
              </h6>
              <p
                className="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
                data-subcontent="step-content"
              >
                Browse through the various digital courses and services we offer
                on our website.
              </p>

              <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                <svg
                  className="w-8 text-blue-200 transform rotate-90 lg:rotate-0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  ></line>
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  ></polyline>
                </svg>
              </div>
            </div>
            <div className="relative text-center" data-subcontent="step_2">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                className="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
                data-subcontent="step-title"
              >
                Register for an online event
              </h6>
              <p
                className="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
                data-subcontent="step-content"
              >
                Sign up for an upcoming online event, such as a workshop or
                webinar, to enhance your skills and knowledge.
              </p>
              <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                <svg
                  className="w-8 text-blue-200 transform rotate-90 lg:rotate-0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  ></line>
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  ></polyline>
                </svg>
              </div>
            </div>
            <div className="relative text-center" data-subcontent="step_3">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                className="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
                data-subcontent="step-title"
              >
                Connect with us
              </h6>
              <p
                className="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
                data-subcontent="step-content"
              >
                Use our contact form or chat feature to get in touch with our
                team for any questions or inquiries about our services or
                events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-4 pb-16 pt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p className="inline-block px-3 py-px mb-2 text-base font-semibold tracking-wider w-full text-blue-600 uppercase secondary_text editable">
              About test Website
            </p>
            <h2
              className="max-w-lg mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto primary_text editable"
              data-content="website-headlines"
            >
              Unlock Your Digital Potential with Our Expert Services and Online
              Events!
            </h2>
            <p
              className="text-base text-gray-700 md:text-lg secondary_text editable"
              data-content="product-descriptions"
            >
              Unlock your digital potential with We are Service! Dive into our
              cutting-edge digital courses and online events designed by tech
              enthusiasts for designers like you. Elevate your skills, network
              with industry experts, and stay ahead of the curve in the
              ever-evolving world of design. Let`s create something amazing
              together!
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://www.greaterkashmir.com/wp-content/uploads/2023/08/Artificial_Intelligence___AI___Machine_Learning___30212411048.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://c8.alamy.com/comp/2EG157D/cloud-security-poster-for-cloud-computing-and-data-storage-technology-design-hand-with-tablet-computer-mobile-phone-and-magnifying-glass-synchronizi-2EG157D.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="data:image/jpeg;base64,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2se35ct9eAOa3Ue/4/Lkqttp8NY/n1P4QqnszY7JVvGsLzbSBwtwtyLDkM95JgM1zVs21+Gsfz6n8IUDe2ztC0B5cwNe+JqNA5TKIgnLQQvpfZqmX4UwDm74qhY3dMoYic40LWjaf6p1EiQY1Ci7pp06d42ltjax1mhsk6t+EgU+ImZ6uhWlcl33ZRoSadJrSQGkgRIGkrsVnpMLWwVVL2u2tVztGkAa76fWnT2oiIti40RERERERERERERERERERFhVvaWyPNSnUbSDw1xJBMA+bkYMjQqzLBErXVp52wuqzujbVRUAVDu666gqUmiz4QHOcTixEh2EgGTkAGx3lej7Xtu8WaxC2iviFMhgo4ZjmY8WLKJwriAHALV7JVJxp2B+BzminUBIbiEnBAzET18FwV6IYGieP7KzYdiD7mq9xbs0fFQoNxcLf+68VnFcXC3/ALrxVdtVIuAw0njP0bG/whcvtWp6N3cVpyD8R9qlRUcRJb7lbMVxcLf+68Um4uFv/deKqftWp6N30Su2tBotpizuDwZL417df+kFMfiPtWHVXiIZM9Nuq9Xt4omx2MWbFyPJHk8XnxzIxfrKus5ezWqq72tacNSkxuOnRe8iCSYyievRStGsKd32AEgObRktORHmkSDmFaKe2bIE0jPQRH1rFag64tO5y5gZnnoVwMr0LbFH16r8pAESNDLRPs5Ku2baBlNoY277cAP/ABn78ySd56Vs8px8ht/+WcrEdr2D/wDF/eFx27aalWaGkVWQZmnULD1EjUdCr57LUHGSx36lMHH7edao9h+SiPKcfIbf/lneKeU4+Q2//LO8VLWHaOlRmBWfMfCVC+I4Tpquryyp+id3hPspQ/A79Sx9oLf+632f+Kk3van2ytZuTsdraGOcXGrQewZsgZweC2OYQYIII3HIq4u2yZGVIz0n+SqVrtJqPdUIguJMdasuFWhtKPcBpDRtOp1KquP3FvcvbVpvzO2IG0DitKIilVXkRERYRERERERERERERERERERERERERSNmvu0UmhjKsNGgIafWFHrC8vY14hwlbqVepSM03EHoYUzQv+1vcGtqEuOgwsk/UrRdVS0mmDVBxydQBlOW5UBjy0yCQRvBg963+36vpXfSPiuSvaB4hgA8tVL2GLmg4urF7jykR7+KtV+Wm1sdNPEGASThZA46hUraraS1e13t5dwBaQcIDTqN4EjsXU62VCCDUcQdxJI6tVGXrYuWpuZJBIyjsOfcjbYNZBAJ5wlTFS+5FRr3BpOoJ0HhHBUarb6rxzrTaHOFFlTnBxbLsJc2S6QyHCHxBI6QvSNgKYrcmKsuGFuruDBBnf1dKqHku+MPLVcOENw4zENMtbGKMIOYGgVku6y8ixrQ4mGjM9AXmlRqQQdJC6sQv7VxY5kOgyRzHvV5ZUq1+WZWoQxoxDVnObkBi39apNRuZylSNrvStVaWPqFwJDoMajIRwXEt1CiWTMDoNvoqLv7xtctyyYnV0SZMxpwHBYCLKLpUbKIiIiIiIsIiIiIiIiIiIiIiIiIiIiIiIiIuizWR9ScIyGpJAAnSSTC51KWaKlHkg4NcH4syG4gWxkTkCI+ta6ri0SP9dV021JtR5B5EgbSeU/W3NcNazuaJIyOIag5iJ06wtxu2phx4MonUaccMzC6X2bFRa3EyWvqSC5o1wxGeYyK7HPby7rVygwFp5uUyaeHDGsz6lpdWPDr8dB5rtZZNJ9YGCG8RpIJcdd8p0hQ7bE8uDcObhIEjhM9wWwXbULQ8NkFs5FunHDMx2KSpPbip18YwtpFhEiZDHNAw6nMhZoFodQrF7Q2m0TmMRIJkAazu7V5dXd9A766eOy2MsKR3J9o+76vreAkk+G6hbPZ3VDhaJOu4QBqSTkAtzbvqFxaBoASZbAByEmYW6wPaRVp4g0va3CSYGRDoJ3SMuxbqVGKb7OXNDyWOGbc4xSJmJEzC9vquBI224e/yXPRtmOYDBMzsQNRMNiNzAPnsVxe59SXNwGWjERl365jPcsUbDUcGkNyeSGnLMjUKXFtFLMPBNOmxuuTiaocWjiIMd62WW20zyYacLGVhhBIkNLOcT/enPpXg16kTHx5fuYK6RYW2YAv8pHMcemoPlzUM67qjYluUF0gtIgecQQdy+aNhqPwlrfOnDm0TBAMSeJCkLHbmn3rCKbcFQAF0iXgQXE7sgFhzmsNmYXAljnFxkEDFUBGemgXrvag0O/hwg/uAtXotuRmaTG2/GWiNQDsXHUCQNlwG76kkFuYjQtOZJDRkeIK+H2R7cctjAWh2mUmApKz2hoNTnDOrTIzGYa5xJ6oK6bRbmObVeXAvD2CMueGvJaRxMZdgWO+qA7Tt+3zXr0O3LSQ6N9yOGb5Dx1CiK9gewYnADrLZz0kTI7lyKattnYeWql4digtgiZLgTLdZie5Qy3UX5xr8vqFx3lAUXgDbWNZ0BInYb76cFhERbVxoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIkpARERJTRERERERERERERZWEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//Z"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://cdn.create.vista.com/downloads/52b410d1-41e5-4267-b761-be4e2124d7db_1024.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link
              to="#"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none secondary_text btn-editable editable"
            >
              Sign up
            </Link>
            <Link
              to="#"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-900 hover:text-gray-800 secondary_text link-editable editable"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="pt-12 pb-12 max-w-7xl mx-auto">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="py-3 sm:py-4">
                      <div className="relative">
                        <img
                          src="https://savvycomsoftware.com/wp-content/uploads/2020/12/software-development-services-20.jpg"
                          alt=""
                          className="rounded-2xl w-full img-editable"
                        />
                      </div>
                    </div>
                    <div className="py-3 sm:py-4">
                      <div className="relative">
                        <img
                          src="https://5.imimg.com/data5/UT/NE/FQ/SELLER-9088375/software-development-500x500.png"
                          alt=""
                          className="rounded-2xl w-full img-editable"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="my-4 z-10">
                      <div className="relative">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="rounded-2xl w-full img-editable"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="mt-10 lg:mt-0">
                  <span className="font-semibold text-base text-blue-600 mb-2 block uppercase secondary_text editable">
                    About Us
                  </span>
                  <h2
                    className="font-bold text-3xl sm:text-4xl text-dark mb-8 primary_text editable"
                    data-content="website-headlines"
                  >
                    Experience the Best of Digital Tech with Our Services and
                    Online Events
                  </h2>
                  <p
                    className="text-base text-gray-600 mb-8 secondary_text editable"
                    data-content="about-us"
                  >
                    Welcome to test Website, where we are passionate about all
                    things digital and technology. We are a team of enthusiastic
                    individuals who love to share our knowledge and expertise
                    with others through our digital courses and online events.
                    <br />
                    Our journey started when we noticed a gap in the market for
                    accessible and affordable digital education. With the
                    ever-evolving world of technology, it can be overwhelming
                    for designers and clients to keep up. That`s where we come
                    in.
                    <br />
                    Our team has years of experience in the industry and is
                    committed to providing high-quality courses and events that
                    will help you stay on top of the latest trends and
                    techniques. Whether you`re a designer looking to expand your
                    skills or a client wanting to better understand the digital
                    landscape, we have something for everyone.
                    <br />
                    Join us on this exciting journey as we navigate the world of
                    digital and technology together, one click at a time!
                  </p>

                  <Link
                    to="#"
                    className="py-3 px-10 inline-flex items-center justify-center text-center text-white text-base bg-blue-600 hover:bg-blue-700 hover:no-underline font-medium rounded-lg btn-editable editable"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white" id="footer">
        <div className="pt-16 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-start justify-between pb-6">
            <Link
              to="#_"
              className="flex order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font"
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none logo">
                test Website<span className="text-blue-600">.</span>
              </span>
            </Link>
            <div className="grid w-full grid-cols-2 mt-20 sm:grid-cols-4 gap-y-16 lg:gap-x-8 md:w-5/6 md:mt-0 md:pr-6">
              <div className="md:justify-self-end">
                <h3 className="font-semibold text-black primary_text">
                  Product
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Features</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Integrations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Documentation</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Pricing</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:justify-self-end">
                <h3 className="font-semibold text-black primary_text">About</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Our Story</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Company</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Our Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Work With Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:justify-self-end">
                <h3 className="font-semibold text-black primary_text">
                  Resources
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Help Center</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Developer API</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Our Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Status</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Sitemap</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:justify-self-end">
                <h3 className="font-semibold text-black primary_text">
                  Contact
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Advertising</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Press</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#_"
                      className="relative inline-block text-gray-600 group link-editable hover:text-blue-600"
                    >
                      <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                      <span>Email</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between py-10 border-t border-solid lg:flex-row border-gray">
            

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
