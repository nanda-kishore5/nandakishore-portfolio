import { FaJava, FaPhp, FaHtml5, FaNodeJs, FaReact, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { GrCli } from "react-icons/gr";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCss3, SiExpress, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiDjango } from "react-icons/di";

export default function Skills() {
    return (
        <div className="w-full px-2 py-8 flex flex-col justify-center items-center gap-4 capitalize bg-gradient-to-b from-black via-black to-slate-800 text-white">
            <h2 className='text-2xl lg:text-4xl lg:font-light lg:tracking-tight '>skills</h2>
            <div className='flex flex-col gap-2 justify-center items-center py-4'>
                <div className="flex flex-col items-center">
                    <h3 className='text-lg lg:text-xl'>Languages</h3>
                    <div className='flex gap-3 flex-wrap py-2 items-center'>
                        <AiOutlinePython className='w-7 h-7'/>
                        <GrCli className='w-7 h-7'/>
                        <BsFiletypeSql className='w-7 h-7'/>
                        <SiCss3 className='w-7 h-7'/>
                        <FaHtml5 className='w-8 h-8'/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className='text-lg lg:text-xl'>Frameworks/Tools</h3>
                    <div className='flex gap-3 flex-wrap  py-2 items-center'>
                        <FaReact className='w-7 h-7'/>
                        <SiTailwindcss className='w-7 h-7'/>
                        <FaNodeJs className='w-7 h-7'/>
                        <SiExpress className='w-7 h-7'/>
                        <SiMysql className='w-8 h-8'/>
                        <SiMongodb className='w-7 h-7'/>
                        <DiDjango className='w-9 h-9'/>
                        <FaGitAlt className='w-8 h-8'/>
                        <FaLinux className='w-7 h-7'/>
                        <FaAws className='w-8 h-8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}