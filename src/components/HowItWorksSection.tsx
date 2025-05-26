import { Upload, FileText, MessageCircle } from "lucide-react";

export const HowItWorksSection = () => {
	const steps = [
		{
			step: 1,
			icon: Upload,
			title: "Upload Document",
			description:
				"Drag & drop your legal document or take a photo. We support PDF, JPG, PNG formats.",
			color: "bg-blue-500",
		},
		{
			step: 2,
			icon: FileText,
			title: "AI Analysis",
			description:
				"Our advanced AI reads and analyzes your document in seconds, understanding complex legal terms.",
			color: "bg-green-500",
		},
		{
			step: 3,
			icon: MessageCircle,
			title: "Get Simple Explanation",
			description:
				"Receive plain language explanations in your preferred Indian language with voice playback.",
			color: "bg-purple-500",
		},
	];

	return (
		<section
			id="how-it-works"
			className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						How Legal GPT Works
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Three simple steps to understand any legal document
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{/* Connection lines for desktop */}
					<div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>

					{steps.map((step, index) => (
						<div key={index} className="relative text-center">
							<div
								className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}
							>
								<step.icon className="w-8 h-8 text-white" />
							</div>
							<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 z-20">
								{step.step}
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{step.title}
							</h3>
							<p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
								{step.description}
							</p>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">
							Ready to try?
						</h3>
						<p className="text-gray-600 mb-6">
							Upload your first document and see the magic happen
						</p>
						<button className="bg-bharat-600 hover:bg-bharat-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
							Start Free Analysis
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
