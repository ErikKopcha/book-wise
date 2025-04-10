import { Toaster } from '@/shared/ui/sonner';
import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';
import { ReactNode } from 'react';

const ibmPlexSans = localFont({
	src: [
		{
			path: '../public/fonts/IBMPlexSans-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/IBMPlexSans-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/IBMPlexSans-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/IBMPlexSans-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
});

const bebasNeue = localFont({
	src: [
		{
			path: '../public/fonts/BebasNeue-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--bebas-neue',
});

export const metadata: Metadata = {
	title: 'BookWise',
	description:
		'BookWise is a book borrowing university library management solution.',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body
				className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
			>
				{children}

				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
