
const Logo = () => {
  return <span className='text-lg'>Super<span className='font-bold'>Defi</span></span>
}

export default function Home() {
  return (
    <main className="h-full w-full relative bg-red-200 ">
      <nav><Logo /></nav>
    </main>
  )
}
