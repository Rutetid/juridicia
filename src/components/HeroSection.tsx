import { Button } from "@/components/ui/button";
import { Upload, FileText, MessageCircle, Volume2 } from "lucide-react";

export const HeroSection = () => {
	return (
		<section className="relative py-20 px-4 overflow-hidden">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center px-4 py-2 bg-bharat-50 rounded-full text-bharat-700 text-sm font-medium mb-6">
						<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
						AI-Powered Legal Assistant for Bharat
					</div>

					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						समझें कानूनी दस्तावेज़
						<br />
						<span className="text-bharat-600">आसान भाषा में</span>
					</h1>

					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Upload any legal document and get instant explanations in simple
						language. Available in Hindi, Gujarati, Bhojpuri, and 10+ Indian
						languages.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Button
							size="lg"
							className="bg-bharat-600 hover:bg-bharat-700 text-lg px-8 py-6 h-auto font-semibold"
						>
							<Upload className="w-5 h-5 mr-2" />
							Understand My Document
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 py-6 h-auto"
						>
							Watch Demo
						</Button>
					</div>

					<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
						<div className="flex items-center">
							<FileText className="w-4 h-4 mr-2 text-green-500" />
							PDF & Image Support
						</div>
						<div className="flex items-center">
							<MessageCircle className="w-4 h-4 mr-2 text-green-500" />
							AI Chatbot
						</div>
						<div className="flex items-center">
							<Volume2 className="w-4 h-4 mr-2 text-green-500" />
							Voice Playback
						</div>
					</div>
				</div>

				{/* Mock Document Preview */}
				<div className="relative max-w-4xl mx-auto">
					<div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
						<div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700">
								Document Analysis
							</span>
							<div className="flex space-x-2">
								<div className="w-3 h-3 bg-red-400 rounded-full"></div>
								<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
								<div className="w-3 h-3 bg-green-400 rounded-full"></div>
							</div>
						</div>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-semibold text-gray-900 mb-4">
										Original Document
									</h3>
									<div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
										"WHEREAS the Lessor is the absolute owner of the said
										premises and has good right, title and interest to grant the
										lease of the said premises..."
									</div>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-4">
										Simple Explanation
									</h3>
									<div className="bg-bharat-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
										📝 <strong>मकान मालिक का अधिकार:</strong> यह कहता है कि मकान
										मालिक इस घर का असली मालिक है और उसे इसे किराए पर देने का पूरा हक
										है।
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
