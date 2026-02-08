import Image from "next/image";

export default function Home() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Gabriele Pallaoro",
        jobTitle: "Team Leader",
        worksFor: {
          "@type": "Organization",
          name: "Smartness",
        },
        url: "https://gabriele.pallaoro.dev",
        sameAs: [
          "https://github.com/gallaoro",
        ],
      },
      {
        "@type": "WebSite",
        name: "Gabriele Pallaoro",
        url: "https://gabriele.pallaoro.dev",
        description: "Team Leader at Smartness. Personal portfolio and projects.",
      },
      {
        "@type": "WebPage",
        name: "Gabriele Pallaoro | Dev",
        url: "https://gabriele.pallaoro.dev",
        description: "Team Leader at Smartness. Portfolio of projects and work.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="hero-pattern" style={{ height: "100vh", maxHeight: "-webkit-fill-available" }}>
        <div className="flex" style={{ height: "100%", maxHeight: "-webkit-fill-available" }}>
          <div className="hidden w-0 md:block md:w-1/4 lg:w-1/3"></div>
          <div className="flex w-full items-start justify-center px-6 pt-10 sm:items-center md:w-3/4 lg:w-2/3">
            <div className="max-w-xl rounded-lg bg-white shadow-2xl">
              <div className="block w-auto px-6 pb-4 pt-6 sm:px-8 sm:pb-6 sm:pt-8">
                <div className="flex items-center">
                  <div className="flex h-20 w-20 items-center rounded-full">
                    <Image
                      src="/me_400.jpg"
                      alt="Gabriele Pallaoro"
                      width={80}
                      height={80}
                      className="rounded-full shadow-inner"
                      style={{ filter: "grayscale(20%)" }}
                      priority
                    />
                  </div>
                  <div className="flex items-center pl-6">
                    <h1 className="font-sans text-3xl font-bold text-gray-800">
                      Gabriele Pallaoro
                    </h1>
                  </div>
                </div>

                <div className="pb-3 pt-4">
                  <div className="flex items-center">
                    <p className="mb-0 font-sans text-gray-800">
                      <span role="img" aria-label="notebook">💻</span> Team Leader{" "}
                      <a
                        href="https://smartness.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline"
                      >
                        @Smartness
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center pt-2">
                    <p className="mb-0 font-sans text-xs text-gray-700">
                      <a
                        href="https://github.com/gallaoro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:underline"
                      >
                        github
                      </a>
                      ,{" "}
                      <a
                        href="mailto:impavido_vanesio.0z@icloud.com"
                        className="text-gray-700 hover:underline"
                      >
                        email
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-400 pt-3">
                  <div>
                    <h3 className="font-bold text-gray-900">Stuff I made</h3>
                    <div className="cursor-pointer">
                      <a
                        href="https://linfalegno-web.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-items-start">
                          <p className="text-gray-900 underline">A cool woodworker website</p>
                          <Image
                            src="/external-link.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="ml-3 h-4 w-4"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="cursor-pointer">
                      <a
                        href="https://theheadline.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-items-start">
                          <p className="text-gray-900 underline">A headline builder app</p>
                          <Image
                            src="/external-link.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="ml-3 h-4 w-4"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="cursor-pointer">
                      <a
                        href="https://sugo-generator.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-items-start">
                          <p className="text-gray-900 underline">A sugo generator</p>
                          <Image
                            src="/external-link.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="ml-3 h-4 w-4"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 p-2">
            <p className="mb-0 font-sans text-sm text-white">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                tailwind
              </a>
              ,{" "}
              <a
                href="https://www.heropatterns.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                heropatterns
              </a>
              , favicon by{" "}
              <a
                href="https://www.flaticon.com/authors/smashicons"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Smashicons
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
