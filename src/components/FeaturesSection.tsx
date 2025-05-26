import { Card, CardContent } from "@/components/ui/card";
import {
	Upload,
	FileText,
	MessageCircle,
	Volume2,
	Shield,
	Zap,
} from "lucide-react";

export const FeaturesSection = () => {
	const features = [
		{
			icon: Upload,
			title: "Upload Any Document",
			description:
				"PDF files, images, or photos of legal documents. Our AI processes them instantly.",
			color: "text-blue-600",
		},
		{
			icon: FileText,
			title: "AI-Powered Explanation",
			description:
				"Complex legal language simplified into everyday terms that anyone can understand.",
			color: "text-green-600",
		},
		{
			icon: MessageCircle,
			title: "Interactive Q&A Chat",
			description:
				"Ask questions about your document and get instant clarifications from our AI.",
			color: "text-purple-600",
		},
		{
			icon: Volume2,
			title: "Voice in Indian Languages",
			description:
				"Listen to explanations in Hindi, Gujarati, Bhojpuri, Tamil, and 10+ languages.",
			color: "text-orange-600",
		},
		{
			icon: Shield,
			title: "100% Secure & Private",
			description:
				"Your documents are encrypted and never stored. Complete privacy guaranteed.",
			color: "text-red-600",
		},
		{
			icon: Zap,
			title: "Instant Results",
			description:
				"Get explanations in seconds, not hours. No waiting, no delays.",
			color: "text-yellow-600",
		},
	];

	return (
		<section id="features" className="py-20 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Powerful Features for{" "}
						<span className="text-bharat-600">Every Indian</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Designed specifically for Indian citizens to understand legal
						documents with confidence
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							<CardContent className="p-8">
								<div
									className={`w-12 h-12 rounded-lg ${feature.color.replace("text-", "bg-").replace("-600", "-100")} flex items-center justify-center mb-6`}
								>
									<feature.icon className={`w-6 h-6 ${feature.color}`} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
