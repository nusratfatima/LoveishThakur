"use client";

import { Logo, Menu, MobileMenu } from "@/components";
import { useMediaQuery } from "@/utils";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header
			className="fixed top-0 left-0 w-full py-2 z-50 font-[avenir-light]"
			style={{ backgroundColor: "rgba(251, 252, 238, 0.6)" }}
		>
			<div className="container-md">
				<div className="flex justify-center items-center gap-5 text-sm">
					<Logo className="w-16 h-auto" />
					{isMobile ? (
						<MobileMenu />
					) : (
						<nav className="flex gap-6 space-x-8">
							<a
								href="#home"
								className="text-black hover:text-[#2463a6] transition-colors duration-150"
							>
								HOME
							</a>
							<a
								href="#experience"
								className="text-black hover:text-[#2463a6] transition-colors duration-150"
							>
								EXPERIENCE
							</a>
							<a
								href="#work"
								className="text-black hover:text-[#2463a6] transition-colors duration-150"
							>
								WORK
							</a>
							<a
								href="#contact"
								className="text-black hover:text-[#2463a6] transition-colors duration-150"
							>
								CONTACT
							</a>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}
