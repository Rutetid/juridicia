import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
			<Header
				selectedLanguage={selectedLanguage}
				setSelectedLanguage={setSelectedLanguage}
			/>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TrustSection />
			<TestimonialsSection />
			<Footer />
		</div>
	);
};

export default Index;
