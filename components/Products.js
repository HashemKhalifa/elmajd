import { useRouter } from 'next/router'

import { products } from '../constants'

export const Products = () => {
  const router = useRouter()

  const isHome = router.pathname === '/' || router.pathname === '/#'
  const homeProducts = isHome ? products.slice(0, 3) : products

  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            We are specialized in producing diverse top quality products of
            essential oils,concretes and absolutes .Our products are compliant
            with the international quality standards, meanwhile at vey
            competitive prices. We have special concretes and absolutes of
            Jasmine ,violet leaves, Geranium, Basil, Bitter Orange and Cassia.
            Our special products of essential oils are Marjoram ,Neroli,
            Petitgrain mandarine.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl ">
          {homeProducts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover transform motion-safe:hover:scale-110 "
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.preview}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHome && (
          <div className="flex mt-10 justify-center">
            <a
              href="./products"
              className="items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              More products?
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
