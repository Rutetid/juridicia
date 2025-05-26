import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
	selectedLanguage: string;
	setSelectedLanguage: (lang: string) => void;
}

export const LanguageSelector = ({
	selectedLanguage,
	setSelectedLanguage,
}: LanguageSelectorProps) => {
	const languages = [
		{ code: "en", name: "English", flag: "🇮🇳" },
		{ code: "hi", name: "हिंदी", flag: "🇮🇳" },
		{ code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
		{ code: "bh", name: "भोजपुरी", flag: "🇮🇳" },
		{ code: "ta", name: "தமிழ்", flag: "🇮🇳" },
		{ code: "te", name: "తెలుగు", flag: "🇮🇳" },
		{ code: "ml", name: "മലയാളം", flag: "🇮🇳" },
		{ code: "bn", name: "বাংলা", flag: "🇮🇳" },
		{ code: "mr", name: "मराठी", flag: "🇮🇳" },
		{ code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
	];

	const currentLanguage =
		languages.find((lang) => lang.code === selectedLanguage) || languages[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="bg-white border-gray-200"
				>
					<span className="mr-2">{currentLanguage.flag}</span>
					<span className="hidden sm:inline">{currentLanguage.name}</span>
					<span className="sm:hidden">
						{currentLanguage.code.toUpperCase()}
					</span>
					<ChevronDown className="w-4 h-4 ml-1" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="bg-white border border-gray-200 shadow-lg"
			>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => setSelectedLanguage(language.code)}
						className="hover:bg-gray-50 cursor-pointer"
					>
						<span className="mr-2">{language.flag}</span>
						{language.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
