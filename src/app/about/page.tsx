import { playfair, inter } from "@/fonts";

// Metadata for the About page (used by Next.js for SEO)
export const metadata = {
  title: "About Us",
  description:
    "Learn about EcoTravelBlog and our mission to promote sustainable and responsible tourism.",
};

export default function AboutPage() {
  return (
    // Main wrapper with top and bottom borders
    <main className="border-y border-[#7FA091]">
      <div className="container-main">
        
        {/* Page title section */}
        <section className="py-3 text-center md:py-4">
          <h1
            className={`${playfair.className} text-[14px] font-bold leading-4.5 text-[#171D16] md:text-[18px] md:leading-5.5`}
          >
            About Us
          </h1>
        </section>

        <div className="border-t border-[#7FA091]">
          
          {/* Intro section with two-column layout on desktop */}
          <section className="py-6 md:py-12">
            <div className="mx-auto max-w-275">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                
                {/* Left column: main intro text */}
                <div>
                  <h2
                    className={`${playfair.className} mb-4 text-[22px] font-bold leading-6.5 text-[#171D16] md:mb-5 md:text-[38px] md:leading-10.5`}
                  >
                    Travel can be beautiful, meaningful, and responsible.
                  </h2>

                  {/* Paragraphs describing the blog purpose */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <p
                      className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[15px] md:leading-6`}
                    >
                      EcoTravelBlog was created for people who want more from their
                      journeys, more connection with nature, more respect for local
                      communities, and more awareness of how tourism shapes the world.
                    </p>

                    <p
                      className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[15px] md:leading-6`}
                    >
                      We believe travel should not only inspire travelers, but also
                      protect the places they visit. That is why we share stories,
                      guides, and practical ideas for exploring with care.
                    </p>
                  </div>
                </div>

                {/* Right column: mission & vision cards */}
                <div className="grid gap-4 md:gap-5">
                  
                  {/* Mission card */}
                  <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-6">
                    <h3
                      className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:mb-3 md:text-[20px] md:leading-6`}
                    >
                      Our Mission
                    </h3>
                    <p
                      className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
                    >
                      To make sustainable travel feel inspiring, practical, and
                      accessible for everyday travelers.
                    </p>
                  </div>

                  {/* Vision card */}
                  <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-6">
                    <h3
                      className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:mb-3 md:text-[20px] md:leading-6`}
                    >
                      Our Vision
                    </h3>
                    <p
                      className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
                    >
                      A future where every journey supports ecosystems, respects local
                      culture, and leaves a positive impact behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section explaining the importance of eco-friendly tourism */}
          <section
            id="why-eco-friendly-tourism-matters"
            className="border-t border-[#7FA091] py-6 md:py-12"
          >
            <div className="mx-auto max-w-275">
              <h2
                className={`${playfair.className} mb-6 text-center text-[20px] font-bold leading-6 text-[#171D16] md:mb-10 md:text-[34px] md:leading-9.5`}
              >
                Why Eco-Friendly Tourism Matters
              </h2>

              {/* Three benefit cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                
                {/* Card 1 */}
                <div className="rounded-[18px] bg-white/30 p-4 backdrop-blur-sm md:p-5">
                  <div className="mb-3 h-0.5 w-10 bg-[#1D604B]" />
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Nature Protection
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Responsible tourism helps protect forests, coastlines, wildlife
                    habitats, and fragile ecosystems that can easily be damaged.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-[18px] bg-white/70 p-4 backdrop-blur-sm md:p-5">
                  <div className="mb-3 h-0.5 w-10 bg-[#1D604B]" />
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Supporting Locals
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Conscious travel supports local jobs, local businesses, and
                    cultural traditions instead of draining value from communities.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-[18px] bg-white/70 p-4 backdrop-blur-sm md:p-5">
                  <div className="mb-3 h-0.5 w-10 bg-[#1D604B]" />
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Deeper Experience
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Slower, more thoughtful travel creates stronger memories and more
                    genuine connections with landscapes, people, and culture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section describing blog content categories */}
          <section className="border-t border-[#7FA091] py-6 md:py-12">
            <div className="mx-auto max-w-275">
              <h2
                className={`${playfair.className} mb-6 text-[20px] font-bold leading-6 text-[#171D16] md:mb-8 md:text-[34px] md:leading-9.5`}
              >
                What We Write About
              </h2>

              {/* Grid of content categories */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                
                {/* Category 1 */}
                <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Eco-Friendly Accommodation
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Reviews of eco-hotels, lodges, cabins, and stays that work in
                    harmony with the environment.
                  </p>
                </div>

                {/* Category 2 */}
                <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Active Tourism
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Hiking, cycling, kayaking, and other ways to explore landscapes
                    while staying engaged and mindful.
                  </p>
                </div>

                {/* Category 3 */}
                <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Responsible Wildlife Watching
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    How to observe animals ethically without disturbing their behavior,
                    feeding patterns, or habitat.
                  </p>
                </div>

                {/* Category 4 */}
                <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-4 md:p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[17px] font-bold leading-5.25 text-[#171D16] md:text-[18px] md:leading-5.5`}
                  >
                    Sustainable Transportation
                  </h3>
                  <p
                    className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
                  >
                    Better ways to move through the world, from trains and public
                    transport to bicycles and low-impact routes.
                  </p>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}