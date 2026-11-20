import logo from './assets/brand/logo.png'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <img src={logo} alt="AarjavMediRX - Health Made Easy" className="w-72" />
      <button className="rounded-lg bg-brand-navy px-5 py-2 text-white hover:opacity-90">
        Browse medicines
      </button>
    </div>
  )
}
