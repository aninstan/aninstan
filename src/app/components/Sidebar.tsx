"use client";
import { Accordion } from 'flowbite-react'
import React from 'react'

export default function Sidebar() {
	return (
	<div className="bg-bg_dark h-[100vh] w-[300px] border-r-[1px] border-border">
		<h1 className="text-[.8rem] pl-4 pb-4">EXPLORER</h1>
		<Accordion className='border-none hover:border-none active:border-none focus:border-none w-[100%]'>
			<Accordion.Panel className=''>
				<Accordion.Title className='text-text_side bg-bg_dark hover:bg-bg_dark text-[0.8rem] pl-2 flex flex-row-reverse focus:ring-0 focus:outline-none gap-1'>ANINSTAN</Accordion.Title>
				<Accordion.Content className=' text-text_side text-[0.8rem] pl-4 hover:bg-bg2'>
					<Accordion className='border-none hover:border-none active:border-none focus:border-none w-[100%]'>
						<Accordion.Panel>
							<Accordion.Title className='text-text_side bg-transparent hover:bg-transparent text-[0.8rem] pl-2 flex flex-row-reverse focus:ring-0 gap-1'>projects</Accordion.Title>
							<Accordion.Content className=' text-text_side text-[0.8rem] pl-4 hover:bg-bg2'>
								<div className='bg-bg_dark w-[100%] flex flex-col'>
									<a href="#" className='hover:bg-bg2 pl-2 active:bg-bg_light'>P1</a>
									<a href="#">P2</a>
									</div>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>






				</Accordion.Content>
			</Accordion.Panel>
		</Accordion>


	</div>
	)
}

