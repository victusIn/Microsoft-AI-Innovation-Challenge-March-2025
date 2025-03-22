import Configs from '@/components/apps/configs/rist_level';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contacts',
};

const Contacts = () => {
    return <Configs />;
};

export default Contacts;
