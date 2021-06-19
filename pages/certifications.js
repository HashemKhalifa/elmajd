import { Layout } from '../components/Layout'

const Certifications = () => {
  return (
      <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                  <p className="mt-1 pb-8 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                      Comming soon.
                  </p>

                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 lg:text-left">
                      <ul className="list-disc	">
                          <li>certified for food and management safety  ISO  soon</li>

                          <li>Kosher Certified soon</li>
                          <li>Halal Certified soon</li>

                          <li>Soon will registered by FDA “Food and Drug Administration”.</li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
  )
}

export default function certificationsPage() {
  return <Layout title="Certifications" children={<Certifications />} />
}
