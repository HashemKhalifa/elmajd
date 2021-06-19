import { Layout } from '../components/Layout'
import { CameraIcon } from '@heroicons/react/solid'

const WhoWe = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              AL MAJAD FLOWERS
            </h3>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              For Essential Oils and Aromatic Products
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="./factory2.jpg"
                    alt="AL MAJAD FLOWERS factory"
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">The photo from our factory</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                We are a family partnership specialized in the field of
                agribusiness,founded in 2018 by Mr.Mo shaltout. Our priority has
                always been to restore Egypt’s essential oils industry to its
                former glory. AL MAJAD FLOWERS is a promising, growing and
                stable Enterprise in the middle of the Nile Delta , at
                Shoubrablola, Kotour, Tanta ,Al Gharbia Governorate. We are
                specialized in producing diverse top quality products of
                essential oils,concretes and absolutes .Our products are
                compliant with the international quality standards, meanwhile at
                vey competitive prices. We have special concretes and absolutes
                of Jasmine ,violet leaves, Geranium, Basil, Bitter Orange and
                Cassia. Our special products of essential oils are Marjoram
                ,Neroli, Petitgrain mandarine.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              Since its inception, the family partnership, has researched,
              explored and passionately produced oils and aromatic products to
              comply with the international market demand. Dedication, paying
              close attention to details, full commitment and keenness is the
              key word behind our success.
            </div>

            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              We’re passionate about the industry and our role in making it
              develop and prosper. Spreading a culture of environmental,
              educational, and social awareness allows us to make our job more
              effective, establish a solid ground, and promote our set of
              values.
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              We maintain the safety and standard of our products by creating a
              culture of quality among all employees. We also use technology in
              order to maximize product quality and reduce production costs. Our
              closed-loop production systems have helped minimize adverse
              impacts in our production, and maximized product safety and
              hygiene.
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              We are present in over 15 countries and sell more than 25
              products. Our clients expect high-quality products, innovative
              solutions, reliable delivery and an attractive cost- benefit
              ratio. Our employees, on the other hand, expect us to support them
              and allow career advancement opportunities, while our society
              expects us to contribute to its success, and nature expects us to
              preserve its resources as much as we possibly can. Our goal is to
              make sure we meet all of the above expectations.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function whoWeaPage() {
  return <Layout title="Who We Are" children={<WhoWe />} />
}
