import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral text-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About Dragon News
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8">
            Dragon News is a modern digital news platform designed to keep
            readers informed about the latest events, stories, and important
            developments from around the world. Our goal is to provide a simple,
            organized, and enjoyable news-reading experience for everyone.
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
        {/* Who We Are */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Who We Are</h2>

          <p className="text-gray-600 leading-8 mb-4">
            Dragon News is a digital news platform created to make it easier for
            people to discover and read news from different categories. In
            today's fast-moving world, people need quick access to meaningful
            information, and our platform is designed with that idea in mind.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Our platform brings together different types of news including
            national and international affairs, sports, entertainment,
            technology, business, and other important topics. Instead of
            searching through multiple places, readers can explore a wide range
            of stories from one organized platform.
          </p>

          <p className="text-gray-600 leading-8">
            Dragon News focuses on creating a clean and user-friendly interface
            so that readers can easily navigate between categories, discover
            interesting stories, and enjoy a comfortable reading experience.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Our Mission</h2>

          <p className="text-gray-600 leading-8 mb-4">
            Our mission is to make important news accessible to everyone. We
            want readers to be able to find relevant information quickly without
            having to deal with complicated navigation or unnecessary
            distractions.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            We believe that an informed society is better prepared to understand
            the world and make thoughtful decisions. For this reason, Dragon
            News aims to provide a platform where readers can explore different
            perspectives and stay connected with current events.
          </p>

          <p className="text-gray-600 leading-8">
            Our mission also includes continuously improving the user experience
            by making the website faster, easier to navigate, and more enjoyable
            for our readers.
          </p>
        </section>

        {/* Our Vision */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Our Vision</h2>

          <p className="text-gray-600 leading-8 mb-4">
            Our vision is to create a trusted and modern digital news platform
            where people can easily discover the stories that matter to them.
          </p>

          <p className="text-gray-600 leading-8">
            We want Dragon News to become a platform that combines the
            traditional values of journalism with the convenience of modern
            technology. As the digital world continues to evolve, we aim to
            improve our platform and provide readers with better ways to
            discover, read, save, and share news.
          </p>
        </section>

        {/* What We Offer */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Latest News</h3>

              <p className="text-gray-600 leading-7">
                Readers can explore the latest stories and stay updated with
                important events happening around the world.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Multiple Categories</h3>

              <p className="text-gray-600 leading-7">
                Our platform organizes news into different categories, allowing
                readers to quickly find topics that interest them.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Bookmark Feature</h3>

              <p className="text-gray-600 leading-7">
                Readers can save interesting news stories so that they can
                easily return to them later.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Easy Sharing</h3>

              <p className="text-gray-600 leading-7">
                Interesting stories can be shared with friends and family using
                the built-in sharing functionality.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>

              <p className="text-gray-600 leading-7">
                Dragon News is designed to provide a comfortable experience
                across desktops, tablets, and mobile devices.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Simple Navigation</h3>

              <p className="text-gray-600 leading-7">
                Our clean interface helps readers move between different
                sections and categories without unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Journalism Values */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Our Journalism Values</h2>

          <p className="text-gray-600 leading-8 mb-6">
            We believe that journalism plays an important role in society. News
            should not only inform people but also help them understand the
            events happening around them. Dragon News therefore focuses on
            several important values.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold mb-2">Accuracy</h3>
              <p className="text-gray-600 leading-7">
                Information should be presented carefully and responsibly.
                Accuracy helps readers develop trust in the news they consume.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Responsibility</h3>
              <p className="text-gray-600 leading-7">
                News has an impact on individuals and society. Responsible
                journalism considers that impact while presenting important
                information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Clarity</h3>
              <p className="text-gray-600 leading-7">
                Complex events can be difficult to understand. We believe news
                should be presented in a clear and understandable way.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600 leading-7">
                Readers deserve clear information about the stories they
                consume. Transparency is an important part of building trust
                between a news platform and its audience.
              </p>
            </div>
          </div>
        </section>

        {/* Reader Experience */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Designed for Our Readers</h2>

          <p className="text-gray-600 leading-8 mb-4">
            We understand that every reader has different interests. Some people
            may want to follow sports, while others may be interested in
            politics, technology, entertainment, or international news.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            That is why Dragon News focuses on organized categories and a
            straightforward interface. Readers can choose the topics they care
            about and quickly explore related stories.
          </p>

          <p className="text-gray-600 leading-8">
            Features such as sharing and bookmarking are designed to make the
            reading experience more convenient and interactive.
          </p>
        </section>

        {/* Future Plans */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-5">Our Future</h2>

          <p className="text-gray-600 leading-8 mb-4">
            Dragon News is designed with continuous improvement in mind.
            Technology and the way people consume information are constantly
            changing, and a modern news platform needs to evolve alongside its
            readers.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            In the future, we aim to introduce more useful features, improve
            content discovery, enhance personalization, and provide an even
            smoother experience for our users.
          </p>

          <p className="text-gray-600 leading-8">
            Our goal is not simply to display news, but to create a platform
            where readers can discover meaningful stories, stay informed, and
            return whenever they want to know what is happening around them.
          </p>
        </section>

        {/* Closing Section */}
        <section className="bg-neutral text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank You for Visiting Dragon News
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8">
            We appreciate every reader who chooses Dragon News as a source of
            information. Explore our categories, read the latest stories,
            discover new topics, and stay connected with the world.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
