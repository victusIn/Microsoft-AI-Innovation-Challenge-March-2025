'use client';
import IconHome from '@/components/icon/icon-home';
import IconPhone from '@/components/icon/icon-phone';
import IconSettings from '@/components/icon/icon-settings';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';

const ComponentsTabsBorderTop = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <PanelCodeHighlight
            title="Digital Transformation ROI with AI"
           
        >
            <div className="mb-5">
                {isMounted && (
                    <Tab.Group>
                        <Tab.List className="mt-3 flex flex-wrap">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''}
                                                    ' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconHome className="ltr:mr-2 rtl:ml-2" />
                                        What is ROIvolution
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconUser className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                                        Hero Section
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconPhone className="ltr:mr-2 rtl:ml-2" />
                                        Systen Overview 
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconSettings className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                                        Get Started
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                        <Tab.Panel>
  <div
    className="h-screen w-full flex flex-col items-center text-center 
               bg-[url('/assets/images/test1.jpeg')] bg-cover bg-center pt-10"
  >
    <h4 className="mb-4 text-3xl font-semibold bg-blue-500 text-white px-4 py-2 rounded-md">
      We move the world!
    </h4>
    <p className="mb-4 text-xl bg-blue-500 text-white px-4 py-2 rounded-md">
      ROIvolution is an advanced AI-powered ROI calculator designed for digital transformation preparation.
    </p>
    <p className="mb-4 text-xl bg-blue-500 text-white px-4 py-2 rounded-md">
      It helps businesses analyze cost savings, efficiency gains, and customer experience improvements through AI automation.
    </p>
    <p className="mb-4 text-xl bg-blue-500 text-white px-4 py-2 rounded-md">
      It helps businesses analyze cost savings, efficiency gains, and customer experience improvements through AI automation.
    </p>
  </div>
</Tab.Panel>

                        
<Tab.Panel>
  <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/test3.jpg')] bg-cover bg-center">
    <div className="flex items-start pt-5">
      <div className="flex-auto p-6 bg-white text-black rounded-lg shadow-lg">
        <h5 className="mb-5 text-3xl font-medium">Discover Your Potential Savings</h5>
        <p className="mb-5 text-xl">See how much AI-powered automation can reduce costs and boost efficiency.</p>
        <p className="mb-5 text-xl">Try the AI ROI Calculator Now</p>
        <p className="mb-5 text-xl">No sign-up required. Get results in seconds!</p>
      </div>
    </div>
  </div>
</Tab.Panel>
                           
<Tab.Panel>
  <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/test4.jpg')] bg-cover bg-center p-6">
    <div className=" mt-10 mb-10 bg-white text-black p-6 rounded-lg shadow-lg max-w-4xl">
    
     

      <p className="text-3xl font-medium mb-8">Step-by-Step Breakdown</p>

      <p className="text-2xl font-medium mb-4">Step 1: Input Your  Data</p>
      <p className="text-xl mb-4">
        Users enter key metrics such as:
      </p>
      <ul className="text-xl mb-4 list-disc list-inside">
        <li>Current costs (e.g., staffing, call handling expenses)</li>
        <li>Call volume & handling time</li>
        <li>AI implementation level (e.g., chatbot integration, voice AI, automation percentage)</li>
      </ul>

      <p className="text-2xl font-medium mb-4">Step 2: AI-Driven Analysis & Calculation</p>
      <p className="text-xl mb-4">
        Predict efficiency improvements (e.g. improved customer experience).  
        Compare manual vs. AI-enhanced performance.
      </p>
      <p className="text-xl mb-4">
        The system applies AI-driven models to estimate cost savings (e.g., reduced agent workload, lower operational expenses).
      </p>

      <p className="text-2xl font-medium mb-4">Step 3: Get Instant ROI Insights</p>
      <p className="text-xl mb-4">
        Users receive a detailed report that includes:
      </p>
      <ul className="text-xl mb-4 list-disc list-inside">
        <li>Projected savings over time (monthly, yearly).</li>
        <li>Efficiency gains & productivity improvements.</li>
        <li>Breakdown of AI impact on different areas (e.g., cost per call reduction, customer satisfaction increase).</li>
      </ul>

      <p className="text-2xl font-medium mb-4">Step 4: Make Data-Driven Decisions</p>
      <p className="text-xl mb-4">
        Users can:
      </p>
      <ul className="text-xl list-disc list-inside">
        <li>Adjust AI implementation levels to see different outcomes.</li>
        <li>Download or share reports for internal decision-making.</li>
        <li>Take actionable steps toward AI adoption in their call center.</li>
      </ul>
    </div>
  </div>
</Tab.Panel>

<Tab.Panel>
  <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/test5.jpg')] bg-cover bg-center p-6">
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      {/* <div className="flex items-start">
        <p className="mb-4 text-3xl font-medium">
          The Time is NOW 
        </p>
      </div> */}
      <div className=" p-6">
      <h1 className="text-4xl font-bold text-gray-800">The Time is NOW</h1>
      <nav className="mt-6">
        <ul className="flex space-x-6">
          <li><Link href="/forms/roi_calculator" className="text-lg text-blue-600 hover:underline">Calculate ROI</Link></li>
          <li><Link href="/forms/roi_view" className="text-lg text-blue-600 hover:underline">View ROI Data</Link></li>
          <li><Link href="/forms/roi_anomaly" className="text-lg text-blue-600 hover:underline">Detect Anomalies</Link></li>
        </ul>
      </nav>
    </div>
   
    </div>
  </div>
</Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                )}
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsTabsBorderTop;
