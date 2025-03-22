import ComponentsTabsSimple from '@/components/components/tabs/components-tabs-simple';
import IconBell from '@/components/icon/icon-bell';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

import ComponentsTabsBorderTop from '@/components/components/tabs/components-tabs-border-top';


export const metadata: Metadata = {
    title: 'Tabs',
};

const Tab = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/components/tabs" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Tabs</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
               
                    <ComponentsTabsBorderTop />
                   
                </div>
            </div>
        </div>
    );
};

export default Tab;
