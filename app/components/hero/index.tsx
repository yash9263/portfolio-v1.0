import { Link } from '@remix-run/react'

const socials = [
  { label: 'email.', to: 'mailto:yashwant8530@gmail.com' },
  { label: 'github.', to: 'https://github.com/yash9263' },
  { label: 'codepen.', to: 'https://codepen.io/yash9263' },
  {
    label: 'twitter.',
    to: '/',
  },
  { label: 'linkedin.', to: '/' },
]

const bg =
  'bg-no-repeat bg-gradient-to-r from-slate-100 to-slate-100 dark:from-slate-800 dark:to-slate-800 bg-[length:92%_92%] tablet:bg-[length:80%_93%] bg-[50%_top] mobile:bg-[length:90%_95%]'

const Hero = () => {
  return (
    <section
      className={`min-h-hero mt-20 grid grid-rows-[1fr_auto] items-center container max-w-6xl ${bg}`}
    >
      <div className="flex items-center justify-center tablet:flex-col tablet:items-start tablet:gap-y-8 tablet:max-w-fit tablet:mx-auto tablet:py-12 mobile:pl-1">
        <div className="mr-8">
          <h1 className="text-7xl tablet:text-6xl mobile:text-5xl leading-tight tablet:leading-snug mobile:leading-normal max-w-fit font-bold text-slate-400 flex flex-col tablet:flex-row tablet:flex-wrap">
            <span className="tablet:pr-4">Hello</span>
            <span>I'm</span>
            <span className="tablet:flex-[0_0_100%]">Yashwant.</span>
          </h1>
        </div>
        <div className="pl-8 mobile:pl-4 border-l border-slate-300">
          <p className="text-lg tablet:text-base text-slate-600 dark:text-slate-300 max-w-lg tablet:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat est
            pariatur, voluptatum similique corporis dolore totam quam, eveniet natus dicta
            inventore delectus! Nesciunt ducimus magni non maiores delectus amet nemo?
          </p>
          <div className="flex gap-4 mt-4 tablet:flex-wrap">
            {/* Todo: add a hovering line moves from one link to next infinite  */}
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className={`block p-2 pl-0 rounded before:rounded capitalize animated-link focus:before:scale-100 `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-fit tablet:justify-self-end">
        <Link
          to="/"
          className="block rounded uppercase text-lg tablet:text-base tracking-[0.4rem] p-6 px-8 tablet:px-6 bg-red-200 text-slate-700"
        >
          download cv
        </Link>
      </div>
    </section>
  )
}

export default Hero
