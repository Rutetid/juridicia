import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
	selectedLanguage: string;
	setSelectedLanguage: (lang: string) => void;
}

export const Header = ({
	selectedLanguage,
	setSelectedLanguage,
}: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="w-8 h-8 bg-gradient-to-r from-bharat-600 to-bharat-700 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">LG</span>
					</div>
					<span className="text-xl font-bold text-gray-900">Legal GPT</span>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6">
					<a
						href="#features"
						className="text-gray-600 hover:text-bharat-600 transition-colors"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="text-gray-600 hover:text-bharat-600 transition-colors"
					>
						How it Works
					</a>
					<a
						href="#trust"
						className="text-gray-600 hover:text-bharat-600 transition-colors"
					>
						Privacy
					</a>
					<a
						href="#testimonials"
						className="text-gray-600 hover:text-bharat-600 transition-colors"
					>
						Reviews
					</a>
				</nav>

				{/* Mobile menu button */}
				<button
					type="button"
					className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<div className="hidden md:flex items-center space-x-4">
					<LanguageSelector
						selectedLanguage={selectedLanguage}
						setSelectedLanguage={setSelectedLanguage}
					/>
					<Button variant="outline" className="hidden sm:flex">
						Login
					</Button>
					<Button className="bg-bharat-600 hover:bg-bharat-700">
						Try Free
					</Button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-200 py-4">
					<div className="container mx-auto px-4 space-y-4">
						{" "}
						<nav className="flex flex-col space-y-3">
							<button
								type="button"
								onClick={() => {
									window.location.href = "#features";
									setMobileMenuOpen(false);
								}}
								className="text-left text-gray-600 hover:text-bharat-600 transition-colors py-1"
							>
								Features
							</button>
							<button
								type="button"
								onClick={() => {
									window.location.href = "#how-it-works";
									setMobileMenuOpen(false);
								}}
								className="text-left text-gray-600 hover:text-bharat-600 transition-colors py-1"
							>
								How it Works
							</button>
							<button
								type="button"
								onClick={() => {
									window.location.href = "#trust";
									setMobileMenuOpen(false);
								}}
								className="text-left text-gray-600 hover:text-bharat-600 transition-colors py-1"
							>
								Privacy
							</button>
							<button
								type="button"
								onClick={() => {
									window.location.href = "#testimonials";
									setMobileMenuOpen(false);
								}}
								className="text-left text-gray-600 hover:text-bharat-600 transition-colors py-1"
							>
								Reviews
							</button>
						</nav>
						<div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
							<LanguageSelector
								selectedLanguage={selectedLanguage}
								setSelectedLanguage={setSelectedLanguage}
							/>
							<Button variant="outline" className="text-sm px-3 py-1">
								Login
							</Button>
							<Button className="bg-bharat-600 hover:bg-bharat-700 text-sm px-3 py-1">
								Try Free
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};
