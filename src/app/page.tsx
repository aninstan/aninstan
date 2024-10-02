"use client";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Breadcrumb } from "flowbite-react";
import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {

  // State to track which element is visible (1 or 2)
  const [visibleElement, setVisibleElement] = useState(1);

  // Function to show the first element and hide the second
  const showElement1 = () => {
    setVisibleElement(1);
  };

  // Function to show the second element and hide the first
  const showElement2 = () => {
    setVisibleElement(2);
  };

  return (
    <>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Anine Standnes' portfolio page" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
    </Head>
    <div className="bg-bg h-[100vh] w-[100vw] flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <Topbar 
          showElement1={showElement1} 
          showElement2={showElement2} 
          visibleElement={visibleElement}
          />

          <div className={`text-[0.7rem] text-text_side p-1 toggle-element ${visibleElement === 1 ? '' : 'hidden'}`}>
            <Breadcrumb className="">
              <Breadcrumb.Item href="#" className="hover:text-blue-300">src</Breadcrumb.Item>
              <Breadcrumb.Item href="#">docs</Breadcrumb.Item>
              <Breadcrumb.Item href="#">README.md</Breadcrumb.Item>
            </Breadcrumb>
            <div className="font-mono text-[1rem] text-white p-3">
              <p className="text-cyan-300"># About Me</p>
                <p>I&apos;m Anine Standnes, a first year data science student at NTNU.</p>
              <br />
              <p className="text-cyan-300">## My Current Subjects</p>
              <p>INFT1003 - Web Technology and Teamwork</p>
              <p>INFT1004 - Economics and Accounting</p>
              <p>INFT1010 - Introduction to Programming</p>
              <p>INFT2003 - Big Data</p>
              <p>INFT2503 - C++ for Programmers</p>
              <p>TDT4172 - Introduction to Machine Learning</p>
              <p>EXPH0350 - Examen Philosophicum</p>

              <br />
              <p className="text-cyan-300">## My Former Subjects</p>
              <p>IMAT2024 - Engineering Mathematics 2</p>
              <p>INGT1002 - Programming, Numerics and Security</p>
              <p>IMAT1002 - Enginerering Mathematics 1</p>
            </div>
          </div>

          <div className={` text-[1rem] text-text_side p-1 toggle-element ${visibleElement === 2 ? '' : 'hidden'}`}>
            <Breadcrumb className="">
              <Breadcrumb.Item href="#" className="hover:text-blue-300">src</Breadcrumb.Item>
              <Breadcrumb.Item href="#">docs</Breadcrumb.Item>
              <Breadcrumb.Item href="#">contact.md</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

      </div>
    </>
  );
}
