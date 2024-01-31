"use client"
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AntdRegistry>{children}</AntdRegistry>

    );
};

export default Providers;