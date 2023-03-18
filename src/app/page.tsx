'use client'
import Header from '@/components/header'
import SearchCenterComponent from '@/components/widget/search-center-component'
import LogoComponent from '@/components/widget/logo-component'
import ProgramDockComponent from '@/components/widget/program-dock-component'
export default function Home() {
  return (
    <>
      <div className="flex-1 m-5 relative">
        <Header />
        <div className="absolute top-1/4 w-full flex flex-col items-center animate__animated animate__backInDown">
          <div className="">
            <LogoComponent />
          </div>
          <div className="m-2">
            <SearchCenterComponent />
          </div>
        </div>
      </div>
      <ProgramDockComponent />
    </>
  )
}
