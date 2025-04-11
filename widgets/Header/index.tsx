'use client';

import { ROUTES } from '@/shared/constants/route';
import { cn } from '@/shared/libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="my-10 flex justify-between gap-5">
			<Link href={ROUTES.HOME.href}>
				<Image alt="logo" src="/icons/logo.svg" width={40} height={40} />
			</Link>
			<ul className="flex flex-row items-center gap-8">
				<li>
					<Link
						className={cn(
							'text-base cursor-pointer capitalize',
							pathname === ROUTES.LIBRARY.href
								? 'text-light-200'
								: 'text-light-100'
						)}
						href={ROUTES.LIBRARY.href}
					>
						{ROUTES.LIBRARY.label}
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
