import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-white">
        <div className="max-w-7xl mx-auto relative text-gray-700 body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-3 md:flex-row">
            <a
              href="#_"
              className="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none logo">
                test Website<span className="text-blue-600">.</span>
              </span>
            </a>
            <div className="relative flex flex-col md:flex-row items-center">
              <nav className="flex flex-wrap items-center  text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                <a
                  href="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  Home
                </a>
                <a
                  href="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  How It Works
                </a>
                <a
                  href="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  Content
                </a>
                <a
                  href="#_"
                  className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
                >
                  About Us
                </a>
              </nav>
              <div className="inline-flex items-center justify-center  space-x-4 md:space-x-10 md:justify-end">
                <a
                  href="#_"
                  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-blue-600 secondary_text link-editable"
                >
                  Sign in
                </a>
                <a
                  href="#_"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable"
                >
                  Sign up
                </a>
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
                src="https://cdn.copymatic.ai/editor/img/rectangle.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://cdn.copymatic.ai/editor/img/rectangle.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://cdn.copymatic.ai/editor/img/rectangle.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 rounded shadow-lg img-editable"
                src="https://cdn.copymatic.ai/editor/img/rectangle.jpg"
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
                          src="https://cdn.copymatic.ai/editor/img/rectangle-v.jpg"
                          alt=""
                          className="rounded-2xl w-full img-editable"
                        />
                      </div>
                    </div>
                    <div className="py-3 sm:py-4">
                      <div className="relative">
                        <img
                          src="https://cdn.copymatic.ai/editor/img/rectangle-v.jpg"
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
                          src="https://cdn.copymatic.ai/editor/img/rectangle-v.jpg"
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

      <div className="bg-white">
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
            <ul className="flex flex-wrap space-x-5 text-xs">
              <li className="mb-6 text-center flex-full text-gray-600 lg:flex-none lg:mb-0">
                © 2022 test Website.
              </li>
              <li className="ml-6">
                <Link
                  to="#_"
                  className="relative inline-block text-black group hover:text-blue-600 link-editable"
                >
                  <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  to="#_"
                  className="relative inline-block text-black group hover:text-blue-600 link-editable"
                >
                  <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                  <span>Disclaimers</span>
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  to="#_"
                  className="relative inline-block text-black group hover:text-blue-600 link-editable"
                >
                  <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                  <span>Terms and Conditions</span>
                </Link>
              </li>
            </ul>

            <ul className="flex items-center mt-10 space-x-5 lg:mt-0">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 link-editable"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 link-editable"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 link-editable"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
