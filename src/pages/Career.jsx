import React from "react";
import { Link } from "react-router";

const Career = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral text-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Careers at Dragon News
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8">
            Join Dragon News and become part of a team that is passionate about
            journalism, technology, creativity, and delivering meaningful
            information to readers around the world.
          </p>
        </div>
      </section>

      <div className="w-11/12 mx-auto py-10">
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral text-white rounded-md font-semibold text-sm hover:bg-gray-700 transition duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <main className="w-11/12 max-w-6xl mx-auto py-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Build Your Career With Us</h2>

          <p className="text-gray-600 leading-8 mb-4">
            At Dragon News, we believe that great news platforms are built by
            great people. Our team brings together writers, journalists,
            developers, designers, editors, and creative professionals who work
            together to create a better digital news experience.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            We are always interested in meeting talented and motivated people
            who want to learn, grow, and contribute to something meaningful.
            Whether you are an experienced professional or just starting your
            career, there may be an opportunity for you at Dragon News.
          </p>

          <p className="text-gray-600 leading-8">
            If you are passionate about your work, curious about new ideas, and
            enjoy working with a collaborative team, we would love to hear from
            you.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-6">Why Join Dragon News?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                🚀 Growth Opportunities
              </h3>

              <p className="text-gray-600 leading-7">
                We encourage our team members to learn new skills, take on
                challenges, and continuously improve their professional
                abilities.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                🤝 Collaborative Environment
              </h3>

              <p className="text-gray-600 leading-7">
                Work with people from different backgrounds and collaborate on
                ideas that can improve the way readers experience news.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">💡 Creative Thinking</h3>

              <p className="text-gray-600 leading-7">
                We value new ideas and encourage team members to think
                creatively when solving problems and building new features.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🌍 Meaningful Work</h3>

              <p className="text-gray-600 leading-7">
                Your work can help people discover important stories and better
                understand what is happening around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Available Positions */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-6">Current Opportunities</h2>

          <div className="space-y-5">
            {/* Job 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Technology • Full Time • Remote
                  </p>
                </div>

                <button className="btn btn-neutral">Apply Now</button>
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                We are looking for a frontend developer who can help us build
                modern, responsive, and user-friendly interfaces for our digital
                news platform.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Skills:</h4>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline">React</span>
                  <span className="badge badge-outline">JavaScript</span>
                  <span className="badge badge-outline">Tailwind CSS</span>
                  <span className="badge badge-outline">HTML</span>
                  <span className="badge badge-outline">CSS</span>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">News Writer</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Editorial • Full Time • On-site
                  </p>
                </div>

                <button className="btn btn-neutral">Apply Now</button>
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                We are looking for a talented writer who can research,
                understand, and present news stories in a clear and engaging
                way.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Skills:</h4>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline">Writing</span>
                  <span className="badge badge-outline">Research</span>
                  <span className="badge badge-outline">Editing</span>
                  <span className="badge badge-outline">Communication</span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">UI/UX Designer</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Design • Full Time • Remote
                  </p>
                </div>

                <button className="btn btn-neutral">Apply Now</button>
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                Join our design team and help us create simple, attractive, and
                accessible experiences for our readers across different devices.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Skills:</h4>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline">Figma</span>
                  <span className="badge badge-outline">UI Design</span>
                  <span className="badge badge-outline">UX Design</span>
                  <span className="badge badge-outline">Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Looking For */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Who We Are Looking For</h2>

          <p className="text-gray-600 leading-8 mb-5">
            We are looking for people who are curious, responsible,
            collaborative, and willing to learn. Technical skills are important,
            but attitude and the ability to work with others are equally
            valuable.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>Passionate about learning and improving.</span>
            </li>

            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>Comfortable working as part of a team.</span>
            </li>

            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>Able to communicate ideas clearly.</span>
            </li>

            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>Willing to take responsibility and solve problems.</span>
            </li>

            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                Interested in technology, journalism, or digital media.
              </span>
            </li>
          </ul>
        </section>

        {/* Application Process */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-6">Our Hiring Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="border rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-secondary mb-3">01</div>

              <h3 className="font-bold mb-2">Application</h3>

              <p className="text-sm text-gray-600 leading-6">
                Submit your application and tell us about yourself.
              </p>
            </div>

            <div className="border rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-secondary mb-3">02</div>

              <h3 className="font-bold mb-2">Review</h3>

              <p className="text-sm text-gray-600 leading-6">
                Our team reviews your experience and application.
              </p>
            </div>

            <div className="border rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-secondary mb-3">03</div>

              <h3 className="font-bold mb-2">Interview</h3>

              <p className="text-sm text-gray-600 leading-6">
                Selected candidates will be invited for an interview.
              </p>
            </div>

            <div className="border rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-secondary mb-3">04</div>

              <h3 className="font-bold mb-2">Welcome</h3>

              <p className="text-sm text-gray-600 leading-6">
                Successful candidates become part of Dragon News.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>

          <p className="max-w-2xl mx-auto text-gray-300 leading-8 mb-6">
            If you believe you can contribute to Dragon News and want to work in
            a creative and collaborative environment, we would love to hear from
            you.
          </p>

          <button className="btn bg-white text-neutral border-none hover:bg-gray-200">
            Send Your Resume
          </button>
        </section>
      </main>
    </div>
  );
};

export default Career;
