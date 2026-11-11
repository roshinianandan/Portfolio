import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowUp, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'

const EMAIL = 'roshinianandan22@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/roshini-anandan-b4b9a632a'
const GITHUB = 'https://github.com/roshinianandan'
const RESUME = '/Roshini_A_Resume.pdf'

const nav = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']

const skills: [string, string[]][] = [
  ['Languages', ['Python', 'Java', 'JavaScript']],
  ['AI, ML and vision', ['Machine Learning', 'CNN', 'K-Means Clustering', 'Computer Vision', 'Image Processing', 'TensorFlow', 'MediaPipe', 'OpenCV']],
  ['Full-stack and APIs', ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'HTML5', 'CSS3', 'Bootstrap']],
  ['Databases', ['MongoDB', 'MySQL']],
  ['Core concepts', ['DBMS', 'Object-Oriented Programming']],
  ['Tools', ['Git', 'GitHub', 'VS Code']],
]

const projects = [
  {
    title: 'Real-Time Assistive Sign Language Translator',
    tags: ['MediaPipe', 'TensorFlow'],
    body: 'A real-time assistive translator that recognizes sign language gestures and translates them, built to make communication easier for people who sign.',
    points: ['Gesture recognition built on MediaPipe and TensorFlow', 'Runs in real time'],
  },
  {
    title: 'SafeSpace: Women Safety Android Application',
    tags: ['Android', 'Python', 'ML', 'GPS', 'SMS'],
    body: 'An Android app that detects emergencies from phone sensor data using a machine learning model, and sends alerts with live location when something goes wrong.',
    points: ['Sensor-based ML for automatic emergency detection', 'One-touch alerts with real-time GPS tracking and SMS notifications', 'Silent audio recording during an emergency'],
  },
  {
    title: 'AI-Based Academic Performance Clustering System',
    tags: ['K-Means', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    body: 'A MERN-stack analytics platform that groups students by academic performance with K-Means clustering and flags students who are at risk.',
    points: ['JWT-secured REST APIs in Node.js and Express.js', 'Interactive React.js dashboards for clustering results', 'Developed and deployed end to end'],
  },
]

const certs = [
  ['ServiceNow Certified Application Developer', 'CAD'],
  ['ServiceNow Certified System Administrator', 'CSA'],
  ['Programming in Java', 'NPTEL, score 90%'],
]

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[200px_1fr] md:gap-16">
        <h2 className="font-display text-2xl font-bold md:sticky md:top-24 md:self-start">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold">Roshini A</a>
        <nav aria-label="Primary" className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-mute transition-colors hover:text-teal">{n}</a>
          ))}
        </nav>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-paper px-6 pb-4 md:hidden">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-b border-line py-3 last:border-0">{n}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
      <div className="rise">
        <p className="mb-5 flex items-center gap-2 text-sm text-mute"><MapPin size={16} /> Ooty, Tamil Nadu</p>
        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">Roshini A</h1>
        <p className="mt-5 font-display text-xl text-teal md:text-2xl">AI / ML Engineer, entry level</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
          I'm a final-year B.Tech student in Artificial Intelligence and Machine Learning. I build computer vision and machine learning systems, then wrap them in full-stack applications that people can actually use.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-teal px-6 py-3 font-medium text-white transition-colors hover:bg-ink">View My Projects</a>
          <a href={RESUME} download="Roshini_A_Resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-ink px-6 py-3 font-medium transition-colors hover:bg-ink hover:text-paper">
            <Download size={18} /> Download Resume
          </a>
        </div>
        <div className="mt-8 flex gap-5">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-mute hover:text-teal"><Linkedin size={22} /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-mute hover:text-teal"><Github size={22} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Send an email" className="text-mute hover:text-teal"><Mail size={22} /></a>
        </div>
      </div>
      <div className="rise mx-auto w-full max-w-sm md:max-w-none" style={{ animationDelay: '.15s' }}>
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm bg-teal-soft" aria-hidden />
          <img src="/roshini.jpg" alt="Portrait of Roshini A" width={760} height={985} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-sm object-cover object-top" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        <p>I study Artificial Intelligence and Machine Learning at Bannari Amman Institute of Technology, Sathyamangalam, and graduate in 2027 with a CGPA of 8.</p>
        <p>My work so far sits where machine learning meets a real interface: a camera that reads sign language, a phone that detects an emergency from its own sensors, and a dashboard that shows which students need support. I work mostly in Python with TensorFlow, MediaPipe and OpenCV, and I build the React, Node.js and MongoDB layers around the models so they ship as complete products.</p>
        <p>I'm looking for an entry-level AI / ML Engineer role where I can keep building applied computer vision and ML systems. I've also competed in Smart India Hackathon and the Women Hackathon (TNWISE), and I speak English, Tamil and French.</p>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <dl className="divide-y divide-line">
        {skills.map(([group, items]) => (
          <div key={group} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[200px_1fr]">
            <dt className="font-medium">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-md bg-teal-soft px-3 py-1 text-sm text-teal">{s}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-line">
        {projects.map((p) => (
          <article key={p.title} className="group py-10 first:pt-0 last:pb-0">
            <h3 className="font-display text-2xl font-bold leading-tight transition-colors group-hover:text-teal md:text-3xl">{p.title}</h3>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mute">{p.body}</p>
            <ul className="mt-5 max-w-2xl list-disc space-y-1.5 pl-5 marker:text-teal">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {p.tags.map((t) => <li key={t} className="rounded-md border border-line px-3 py-1 text-sm text-mute">{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-12 inline-flex items-center gap-2 font-medium text-teal underline-offset-4 hover:underline">
        <Github size={18} /> More on GitHub <ExternalLink size={14} />
      </a>
    </Section>
  )
}

function Education() {
  const rows = [
    ['2023 – 2027', 'B.Tech Artificial Intelligence & Machine Learning', 'Bannari Amman Institute of Technology, Sathyamangalam', 'CGPA: 8'],
    ['2021 – 2023', 'Higher Secondary Certificate (HSC)', 'Vidyaa Vikas Matric Higher Secondary School, Karamadai', 'Aggregate: 90.5%'],
  ]
  return (
    <Section id="education" title="Education">
      <ol className="relative space-y-10 border-l border-line pl-8">
        {rows.map(([yr, deg, school, score]) => (
          <li key={yr} className="relative">
            <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-teal" aria-hidden />
            <p className="text-sm text-mute">{yr}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{deg}</h3>
            <p className="mt-1">{school}</p>
            <p className="mt-1 font-medium text-teal">{score}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Certifications() {
  return (
    <Section id="certifications" title="Certifications and achievements">
      <ul className="divide-y divide-line border-y border-line">
        {certs.map(([name, detail]) => (
          <li key={name} className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline">
            <span className="font-medium">{name}</span>
            <span className="text-mute">{detail}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-10 font-display text-lg font-bold">Hackathons</h3>
      <p className="mt-2 text-lg">Smart India Hackathon (SIH) and Women Hackathon (TNWISE).</p>
    </Section>
  )
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const msg = String(f.get('message') || '').trim()
    const er: Record<string, string> = {}
    if (name.length < 2) er.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) er.email = 'Enter a valid email address.'
    if (msg.length < 10) er.message = 'Write at least 10 characters.'
    setErrors(er)
    if (Object.keys(er).length) return
    const body = `${msg}\n\nFrom: ${name} (${email})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio enquiry from ' + name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const field = 'mt-1 w-full rounded-md border border-line bg-white px-4 py-3 outline-none focus:border-teal'
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed">If you're hiring for an AI / ML role or want to talk about any of these projects, write to me. I reply to every message.</p>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <ul className="space-y-4">
          <li><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 hover:text-teal"><Mail size={20} /> {EMAIL}</a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-teal"><Linkedin size={20} /> LinkedIn</a></li>
          <li><a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-teal"><Github size={20} /> GitHub</a></li>
        </ul>
        <form onSubmit={submit} noValidate className="space-y-5">
          {([['name', 'Name', 'text'], ['email', 'Email', 'email']] as const).map(([k, label, type]) => (
            <div key={k}>
              <label htmlFor={k} className="text-sm font-medium">{label}</label>
              <input id={k} name={k} type={type} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
              {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-700">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
            {errors.message && <p id="message-err" className="mt-1 text-sm text-red-700">{errors.message}</p>}
          </div>
          <button className="rounded-md bg-teal px-6 py-3 font-medium text-white transition-colors hover:bg-ink">Send message</button>
          {sent && <p role="status" className="text-sm text-mute">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-mute sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Roshini A</p>
        <div className="flex items-center gap-5">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal"><Linkedin size={18} /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-teal"><Github size={18} /></a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-teal"><ArrowUp size={16} /> Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
