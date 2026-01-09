import featuresBg from "../../assets/features-bg.png";
import HowItWorks1 from "../../assets/how-it-works-1.png";
import HowItWorks2 from "../../assets/how-it-works-2.png";
import HowItWorks3 from "../../assets/how-it-works-3.png";
import img01 from "../../assets/01.svg";
import img02 from "../../assets/02.svg";
import img03 from "../../assets/03.svg";
import img04 from "../../assets/04.svg";
import { useState } from "react";

const HowItWorks = () => {
  const [mode, setMode] = useState("hiring");
  const HOW_IT_WORKS_DATA = {
    hiring: [
      {
        id: 1,
        title: "Posting jobs is always free",
        image: HowItWorks1,
        description: "Post your job and receive proposals from talented freelancers.",
        cta: "Create a job"
      },
      {
        id: 2,
        title: "Get proposals and hire",
        image: HowItWorks2,
        description: "Compare bids, reviews, and portfolios before hiring.",
        cta: "Explore experts"
      },
      {
        id: 3,
        title: "Pay securely when work is done",
        image: HowItWorks3,
        description: "Release payments only when you're satisfied.",
        cta: "View pricing"
      }
    ],

    findingWork: [
      {
        id: 1,
        title: "Create your profile",
        image: HowItWorks1,
        description: "Showcase your skills and experience."
      },
      {
        id: 2,
        title: "Bid on projects",
        image: HowItWorks1,
        description: "Send proposals to clients that fit your skills."
      },
      {
        id: 3,
        title: "Get paid securely",
        image: HowItWorks1,
        description: "Payments are protected and released on completion."
      }
    ]
  };

  const cards = HOW_IT_WORKS_DATA[mode];

  return (
    <>
      <section className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="section-title mb-0">How it works</h2>

            <div className="flex items-center space-x-2 text-muted text-sm">
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="font-medium text-dark focus:outline-none bg-transparent border border-dark rounded-full px-2 py-1"
              >
                <option value="hiring">For hiring</option>
                <option value="findingWork">For finding work</option>
              </select>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative">
            {/* Horizontal scroll on mobile, grid on md+ */}
            <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible">
              {cards.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full sm:min-w-[calc(80vw-2.5rem)] md:min-w-0 shrink-0 md:shrink relative rounded-2xl overflow-hidden group bg-cover bg-no-repeat"
                  // style={{
                  //   backgroundImage: `url(${HowItWorks1})`,
                  // }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black to-black/40 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-white/80 text-sm mt-1">
                      {item.description}
                    </p>

                    {item.cta && (
                      <button className="mt-4 btn w-full mx-auto transition-all duration-500 absolute translate-y-20 group-hover:relative group-hover:translate-y-0">
                        {item.cta}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator for mobile only */}
            {/* <div className="flex md:hidden justify-center mt-4 space-x-2">
              {cards.map((item) => (
                <div 
                  key={item.id} 
                  className="w-2 h-2 rounded-full bg-gray-300"
                ></div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Make it Real */}
      <section className="py-12.5 bg-cover bg-bottom" style={{
        backgroundImage: `url(${featuresBg})`,
      }}>
        <div className="container">
          <h3 className="text-2xl font-bold mb-3 text-center">Make it Real with freelancers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                icon: img01,
                title: 'Hire the best talent',
                description: "Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.",
                color: 'blue'
              },
              {
                number: '02',
                icon: img02,
                title: 'Quality work',
                description: "With Freelancer's talent pool of over million professionals at your fingertips, you'll find quality talent to get what you need done within your budget",
                color: 'green'
              },
              {
                number: '03',
                icon: img03,
                title: 'Fast bids',
                description: 'Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.',
                color: 'purple'
              },
              {
                number: '04',
                icon: img04,
                title: 'Be in control',
                description: 'Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.',
                color: 'purple'
              },
            ].map((feature, index) => (
              <div key={index} className="group relative border border-muted/20 rounded-2xl mt-4 bg-[#F9F9F9]">
                <div className="absolute z-2 -top-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-muted bg-white w-8.5 h-8.5 rounded-full border border-muted/20 group-hover:text-gray-800 transition flex items-center justify-center">
                  {feature.number}
                </div>
                <div className="text-center py-8 p-4">
                  <div className='inline-flex p-0 rounded-xl'>
                    <img src={feature.icon} className={`w-20 h-20 text-${feature.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn flex mt-6 mx-auto"> Join now </button>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;