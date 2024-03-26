import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="text-white flex flex-col items-center justify-center py-20 gap-y-5">
      <ul className="flex gap-4">
        <li><a href="https://github.com/lucas-araujo-costa/" target="_blank"><FaGithub className="size-6" /></a></li>
        <li><a href="https://www.linkedin.com/in/lucas-araujo-costa-/" target="_blank"><FaLinkedin className="size-6" /></a></li>
        <li><a href="https://www.instagram.com/lucasaraujo.js" target="_blank"><FaInstagram className="size-6" /></a></li>
      </ul>
      <div>
        <small className="flex items-center gap-1">Made with <FaHeart /> by <a className="underline" href="https://github.com/lucas-araujo-costa/" target="_blank">Lucas Araujo</a></small>
      </div>
    </footer>
  )
}
