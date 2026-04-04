// import { playfair, inter } from "@/fonts";

// export default function AboutPage() {
//   return (
//     <main className="border-y border-[#7FA091]">
//       <div className="container-main">
//         <section className="py-3 text-center md:py-4">
//           <h1
//             className={`${playfair.className} text-[14px] font-bold leading-4.5 text-[#171D16] md:text-[18px] md:leading-5.5`}
//           >
//             About Us
//           </h1>
//         </section>

//         <div className="border-t border-[#7FA091]">
//           <section className="py-6 md:py-8">
//             <div className="mx-auto max-w-275">
//               <div className="mb-6 md:mb-8">
//                 <h2
//                   className={`${playfair.className} mb-3 text-[18px] font-bold leading-5.5 text-[#171D16] md:text-[22px] md:leading-6.5`}
//                 >
//                   Our Mission
//                 </h2>

//                 <div className="flex flex-col gap-3">
//                   <p
//                     className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
//                   >
//                     EcoTravel was created to show that travel can be both exciting and
//                     responsible. We believe tourism should benefit travelers and the
//                     places they visit.
//                   </p>

//                   <p
//                     className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
//                   >
//                     Through our articles, guides, and community, we share knowledge
//                     about exploring the planet while minimizing negative impact and
//                     maximizing positive contribution.
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <h2
//                   className={`${playfair.className} mb-3 text-[18px] font-bold leading-5.5 text-[#171D16] md:text-[22px] md:leading-6.5`}
//                 >
//                   Our Vision
//                 </h2>

//                 <div className="flex flex-col gap-3">
//                   <p
//                     className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
//                   >
//                     We envision a future where travel enriches lives, preserves cultural
//                     heritage, and protects natural ecosystems. A world where every
//                     journey is a step toward a better future.
//                   </p>

//                   <p
//                     className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] md:text-[14px] md:leading-5.5`}
//                   >
//                     By building a community of conscious travelers, we’re creating a
//                     movement that transforms the tourism industry for the better.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="border-t border-[#7FA091]  py-8 md:py-10">
//             <div className="mx-auto max-w-275">
//               <h2
//                 className={`${playfair.className} mb-6 text-center text-[22px] font-bold leading-6.5 text-[#171D16] md:mb-8 md:text-[28px] md:leading-8`}
//               >
//                 Why Eco-Friendly Tourism Matters
//               </h2>

//               <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
//                 <div>
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Nature Protection
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Tourism is one of the world’s largest industries. A responsible
//                     approach helps preserve unique ecosystems.
//                   </p>
//                 </div>

//                 <div>
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Supporting Locals
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Eco-tourism creates jobs, supports the economy, and helps preserve
//                     cultural traditions.
//                   </p>
//                 </div>

//                 <div>
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Deeper Experience
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Conscious travel provides richer, more authentic experiences,
//                     creating genuine connections with places.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="border-t border-[#7FA091] py-8 md:py-10">
//             <div className="mx-auto max-w-275">
//               <h2
//                 className={`${playfair.className} mb-6 text-[20px] font-bold leading-5.5 text-[#171D16] md:mb-8 md:text-[26px] md:leading-6`}
//               >
//                 What We Write About
//               </h2>

//               <div className="border-l border-[#7FA091] pl-4 md:pl-6">
//                 <div className="mb-5">
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Eco-Friendly Accommodation
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Reviews of eco-hotels, lodges, and glamping sites that operate in
//                     harmony with the environment.
//                   </p>
//                 </div>

//                 <div className="mb-5">
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Active Tourism
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Hiking, cycling, kayaking, and other ways to actively explore
//                     nature.
//                   </p>
//                 </div>

//                 <div className="mb-5">
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Responsible Wildlife Watching
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     How to observe wild animals without disturbing their natural
//                     behavior and habitat.
//                   </p>
//                 </div>

//                 <div>
//                   <h3
//                     className={`${playfair.className} mb-2 text-[15px] font-bold leading-5 text-[#171D16] md:text-[16px] md:leading-5.5`}
//                   >
//                     Sustainable Transportation
//                   </h3>
//                   <p
//                     className={`${inter.className} text-[12px] font-light leading-4.5 text-[#171D16] md:text-[13px] md:leading-5`}
//                   >
//                     Eco-friendly ways to travel: from bicycles to electric transport
//                     and public transportation.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

import { playfair, inter } from "@/fonts";

export default function AboutPage() {
  return (
    <main className="border-y border-[#7FA091]">
      <div className="container-main">
        <section className="py-3 text-center md:py-4">
          <h1
            className={`${playfair.className} text-[14px] font-bold leading-[18px] text-[#171D16] md:text-[18px] md:leading-[22px]`}
          >
            About Us
          </h1>
        </section>

        <div className="border-t border-[#7FA091]">
          <section className="py-8 md:py-12">
            <div className="mx-auto max-w-[1100px]">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <h2
                    className={`${playfair.className} mb-5 text-[26px] font-bold leading-[30px] text-[#171D16] md:text-[38px] md:leading-[42px]`}
                  >
                    Travel can be beautiful, meaningful, and responsible.
                  </h2>

                  <div className="flex flex-col gap-4">
                    <p
                      className={`${inter.className} text-[14px] font-light leading-[22px] text-[#171D16] md:text-[15px] md:leading-[24px]`}
                    >
                      EcoTravelBlog was created for people who want more from their
                      journeys. More connection with nature. More respect for local
                      communities. More awareness of how tourism shapes the world.
                    </p>

                    <p
                      className={`${inter.className} text-[14px] font-light leading-[22px] text-[#171D16] md:text-[15px] md:leading-[24px]`}
                    >
                      We believe travel should not only inspire travelers, but also
                      protect the places they visit. That is why we share stories,
                      guides, and practical ideas for exploring with care.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-5 md:p-6">
                    <h3
                      className={`${playfair.className} mb-3 text-[20px] font-bold leading-[24px] text-[#171D16]`}
                    >
                      Our Mission
                    </h3>
                    <p
                      className={`${inter.className} text-[14px] font-light leading-[22px] text-[#171D16]`}
                    >
                      To make sustainable travel feel inspiring, practical, and
                      accessible for everyday travelers.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-[#7FA091] bg-[#F6FAF8] p-5 md:p-6">
                    <h3
                      className={`${playfair.className} mb-3 text-[20px] font-bold leading-[24px] text-[#171D16]`}
                    >
                      Our Vision
                    </h3>
                    <p
                      className={`${inter.className} text-[14px] font-light leading-[22px] text-[#171D16]`}
                    >
                      A future where every journey supports ecosystems, respects local
                      culture, and leaves a positive impact behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[#7FA091]  py-8 md:py-12">
            <div className="mx-auto max-w-[1100px]">
              
              <h2
                className={`${playfair.className} mb-8 text-center text-[24px] font-bold leading-[28px] text-[#171D16] md:mb-10 md:text-[34px] md:leading-[38px]`}
              >
                Why Eco-Friendly Tourism Matters
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="rounded-[18px] bg-white/30 p-5 backdrop-blur-sm">
                  <div className="mb-3 h-[2px] w-10" />
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Nature Protection
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    Responsible tourism helps protect forests, coastlines, wildlife
                    habitats, and fragile ecosystems that can easily be damaged.
                  </p>
                </div>

                <div className="rounded-[18px] bg-white/70 p-5 backdrop-blur-sm">
                  <div className="mb-3 h-[2px] w-10 bg-[#1D604B]" />
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Supporting Locals
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    Conscious travel supports local jobs, local businesses, and
                    cultural traditions instead of draining value from communities.
                  </p>
                </div>

                <div className="rounded-[18px] bg-white/70 p-5 backdrop-blur-sm">
                  <div className="mb-3 h-[2px] w-10 bg-[#1D604B]" />
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Deeper Experience
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    Slower, more thoughtful travel creates stronger memories and more
                    genuine connections with landscapes, people, and culture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[#7FA091] py-8 md:py-12">
            <div className="mx-auto max-w-[1100px]">
              
              <h2
                className={`${playfair.className} mb-8 text-[24px] font-bold leading-[28px] text-[#171D16] md:text-[34px] md:leading-[38px]`}
              >
                What We Write About
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[18px] border bg-[#F6FAF8] border-[#7FA091] p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Eco-Friendly Accommodation
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    Reviews of eco-hotels, lodges, cabins, and stays that work in
                    harmony with the environment.
                  </p>
                </div>

                <div className="rounded-[18px] border bg-[#F6FAF8] border-[#7FA091] p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Active Tourism
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    Hiking, cycling, kayaking, and other ways to explore landscapes
                    while staying engaged and mindful.
                  </p>
                </div>

                <div className="rounded-[18px] border bg-[#F6FAF8] border-[#7FA091] p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Responsible Wildlife Watching
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
                  >
                    How to observe animals ethically without disturbing their behavior,
                    feeding patterns, or habitat.
                  </p>
                </div>

                <div className="rounded-[18px] border bg-[#F6FAF8] border-[#7FA091] p-5">
                  <h3
                    className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16]`}
                  >
                    Sustainable Transportation
                  </h3>
                  <p
                    className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16]`}
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