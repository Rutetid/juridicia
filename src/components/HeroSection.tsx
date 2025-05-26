import { Button } from "@/components/ui/button";
import { Upload, FileText, MessageCircle, Volume2 } from "lucide-react";

export const HeroSection = () => {
	return (
		<section className="relative py-12 md:py-20 px-4 overflow-hidden">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-10 md:mb-16 animate-fade-in">
					<div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-bharat-50 rounded-full text-bharat-700 text-xs md:text-sm font-medium mb-4 md:mb-6">
						<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
						AI-Powered Legal Assistant for Bharat
					</div>

					<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
						समझें कानूनी दस्तावेज़
						<br />
						<span className="text-bharat-600">आसान भाषा में</span>
					</h1>

					<p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
						Upload any legal document and get instant explanations in simple
						language. Available in Hindi, Gujarati, Bhojpuri, and 10+ Indian
						languages.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
						<Button
							size="lg"
							className="bg-bharat-600 hover:bg-bharat-700 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto font-semibold w-full sm:w-auto"
						>
							<Upload className="w-4 h-4 md:w-5 md:h-5 mr-2" />
							Understand My Document
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto w-full sm:w-auto"
						>
							Watch Demo
						</Button>
					</div>

					<div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
						<div className="flex items-center">
							<FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-green-500" />
							PDF & Image Support
						</div>
						<div className="flex items-center">
							<MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-green-500" />
							AI Chatbot
						</div>
						<div className="flex items-center">
							<Volume2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-green-500" />
							Voice Playback
						</div>
					</div>
				</div>

				{/* Mock Document Preview */}
				<div className="relative max-w-4xl mx-auto">
					<div className="bg-white rounded-lg md:rounded-2xl shadow-lg md:shadow-2xl border border-gray-200 overflow-hidden">
						<div className="bg-gray-50 px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 flex items-center justify-between">
							<span className="text-xs md:text-sm font-medium text-gray-700">
								Document Analysis
							</span>{" "}
							<div className="flex space-x-2">
								<div className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full" />
								<div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full" />
								<div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full" />
							</div>
						</div>
						<div className="p-4 md:p-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
								<div>
									<h3 className="font-semibold text-gray-900 mb-2 md:mb-4 text-sm md:text-base">
										Original Document
									</h3>
									<div className="bg-gray-100 rounded-lg p-3 md:p-4 text-xs md:text-sm text-gray-600 leading-relaxed">
										"WHEREAS the Lessor is the absolute owner of the said
										premises and has good right, title and interest to grant the
										lease of the said premises..."
									</div>
								</div>
								<div className="mt-4 md:mt-0">
									<h3 className="font-semibold text-gray-900 mb-2 md:mb-4 text-sm md:text-base">
										Simple Explanation
									</h3>
									<div className="bg-bharat-50 rounded-lg p-3 md:p-4 text-xs md:text-sm text-gray-700 leading-relaxed">
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
