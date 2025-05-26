import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";

interface HeaderProps {
	selectedLanguage: string;
	setSelectedLanguage: (lang: string) => void;
}

export const Header = ({
	selectedLanguage,
	setSelectedLanguage,
}: HeaderProps) => {
	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="w-8 h-8 bg-gradient-to-r from-bharat-600 to-bharat-700 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">LG</span>
					</div>
					<span className="text-xl font-bold text-gray-900">Legal GPT</span>
				</div>

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

				<div className="flex items-center space-x-4">
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
		</header>
	);
};
