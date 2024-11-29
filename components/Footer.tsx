import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full">
      <section className="flex bg-secondary text-black w-full h-[180px]">
        <div className='flex items-center gap-8 justify-center w-[50%]'>
          <a className="app__header__github-logo" href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer">
            <TbBrandGithub size='2rem' /></a>
          <a className="app__header__linkedin-logo" href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer">
            <AiOutlineLinkedin size='2.15rem' /></a>
        </div>
        <div className="text-center flex items-center justify-center w-[50%]">
          Gabriel Tambare © 2024. All rights are reserved
        </div>

      </section>
      <div className="w-full h-[55px] bg-black"></div>
    </div>
  )
}

export default Footer