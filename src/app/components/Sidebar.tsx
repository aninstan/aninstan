"use client";
import { Accordion } from 'flowbite-react'
import React from 'react'
import { Tooltip } from "flowbite-react";


export default function Sidebar() {

	
	return (
	<div className='flex flex-row'>
		<div className='bg-bg_dark h-[100vh] w-[50px] border-r-[1px] border-border gap-4 flex flex-col pt-3 items-center ease-in-out duration-200'>
			<Tooltip content="Python" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-python-plain text-[2.2rem] text-text_side hover:text-yellow-200 ease-in-out duration-200' ></i></Tooltip>
			<Tooltip content="Java" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-java-plain text-[2.2rem] text-text_side hover:text-yellow-600 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="C++" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-cplusplus-plain text-[2.2rem] text-text_side hover:hover:text-blue-800 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="HTML" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-html5-plain-wordmark text-[2.2rem] text-text_side hover:text-orange-500 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="CSS" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-css3-plain-wordmark text-[2.2rem] text-text_side hover:text-blue-500 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="Tailwind" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-tailwindcss-plain text-[2.2rem] text-text_side hover:text-blue-400 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="React" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-react-plain text-[2.2rem] text-text_side hover:text-cyan-400 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="Git" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-git-plain text-[2.2rem] text-text_side hover:text-orange-500 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="Typescript" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-typescript-plain text-[2.2rem] text-text_side hover:text-blue-500 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="Javascript" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-javascript-plain text-[2.2rem] text-text_side hover:text-yellow-300 ease-in-out duration-200'></i></Tooltip>
			<Tooltip content="NextJS" placement='right' className='bg-bg_dark py-[2px] px-2 text-[0.7rem] border-[1px] rounded-[4px] border-purple' arrow={true} animation="duration-200"><i className='devicon-nextjs-plain text-[2.2rem] text-text_side hover:text-white ease-in-out duration-200'></i></Tooltip>

			
		</div>
		<div className="bg-bg_dark h-[100vh] w-[250px] border-r-[1px] border-border">
			<div className='flex flex-row px-5 py-2 justify-between'>
				<h1 className="text-[0.7rem] mt-1">EXPLORER</h1>
				<p className='hover:bg-bg_light rounded-md px-[5px]'>∙∙∙</p>
			</div>
			<Accordion className='border-none hover:border-none active:border-none focus:border-none w-[100%]'>
				<Accordion.Panel className=''>
					<Accordion.Title className='text-text_side bg-bg_dark hover:bg-bg_dark text-[0.8rem] pl-1 flex flex-row-reverse focus:ring-0 focus:outline-none gap-1 font-bold hover:h-fit'>ANINSTAN</Accordion.Title>
					<Accordion.Content className=' text-text_side text-[0.8rem] '>
						<Accordion className='border-none hover:border-none active:border-none focus:border-none w-[100%]'>
							<Accordion.Panel>
								<Accordion.Title className='text-text_side bg-transparent hover:bg-bg2 text-[0.8rem] w-[100%] justify-end pl-4 flex flex-row-reverse focus:ring-0 gap-1'>projects</Accordion.Title>
								<Accordion.Content className=' text-text_side text-[0.8rem]'>
									<div className='bg-bg_dark w-[100%] flex flex-col'>
										<a href="#" className='hover:bg-bg2 pl-8 active:bg-bg_light w-[100%]' target='blank'>P1</a>
										<a href="#" className='hover:bg-bg2 pl-8 active:bg-bg_light w-[100%]'>P2</a>
										</div>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</Accordion.Content>
				</Accordion.Panel>
			</Accordion>


		</div>
	</div>
	)
}

