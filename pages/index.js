import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joan & John Vatterott Family Foundation</title>
        <meta
          name="description"
          content="The Joan and John Vatterott Family Foundation (JJVFF) supports organizations that advance education, community-driven development, racial and social justice, and human rights"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="isolate bg-white min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0c4a6e" />
                <stop offset={1} stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main className="flex-grow flex">
          <div className="relative px-6 sm:px-16 lg:px-56 flex-grow flex items-center">
            <div className="mx-auto max-w-screen-md py-8 sm:py-16 lg:py-32 flex flex-col justify-start">
              <Image
                className=""
                src="/JJVFF-Logo-hor-RGB.png"
                alt="John & Joan Vatterott Family Foundation Logo"
                width={2934}
                height={499}
                priority
              />
              <div className="text-center mt-9 mx-auto prose">
                <h1>Guided by the belief in the dignity of all people</h1>
                <p className="text-lg leading-8 text-gray-600">
                  to have an equitable opportunity for success in life, the Joan
                  and John Vatterott Family Foundation (JJVFF) supports
                  organizations that advance education, community-driven
                  development, racial and social justice, and human rights.
                </p>
                <h2>Our Focus Areas:</h2>
                <ol className="text-left">
                  <li>
                    Equitable access to high-quality education, skilled trade,
                    and work training
                  </li>
                  <li>
                    Community empowerment and community-led development so that
                    the residents shape the future of their communities
                  </li>
                  <li>
                    Advancing racial justice and defending civil and human
                    rights
                  </li>
                  <li>
                    Ensuring physiological and safety needs are met for those
                    enduring suffering and misfortune
                  </li>
                </ol>
              </div>
            </div>
            <div className="absolute inset-x-0 top-full -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[29.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0c4a6e" />
                    <stop offset={1} stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
