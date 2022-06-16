const experience = [
  {
    company: 'fullness',
    role: 'full stack developer',
    timeline: 'July 2021 - present',
    for: [
      {
        company: 'ratecity',
        country: 'Australia',
        link: '/',
        bullets: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Esse iste soluta at aliquid error doloribus ullam laudantium a mollitia perferendis',
          'accusantium odio culpa, provident, saepe quod nobis enim! Quia, minus.',
        ],
      },
    ],
  },
]

const Work = () => {
  return (
    <section id="work" className="py-20 container">
      <h1 className="font-medium text-3xl max-w-fit mb-6">Experience</h1>
      <div className="flex justify-center gap-4">
        <div>
          <ul>
            <li>
              <div>Fullness</div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between my-3">
            <h2>Full Stack developer </h2> <div>2021 - present</div>
          </div>
          <div className="pl-4">
            <a
              href="/"
              className="text-sky-600 dark:text-sky-400 animated-link before:bg-sky-600 dark:before:bg-sky-400"
            >
              Ratecity - Australia
            </a>
          </div>
          <ol className="pl-8 list-disc">
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="my-2">
              Esse iste soluta at aliquid error doloribus ullam laudantium a mollitia
              perferendis
            </li>
            <li className="my-2">
              accusantium odio culpa, provident, saepe quod nobis enim! Quia, minus.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Work
