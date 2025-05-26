import { Shield, Lock, Eye, Trash } from "lucide-react";

export const TrustSection = () => {
	const trustFeatures = [
		{
			icon: Shield,
			title: "Bank-Level Security",
			description:
				"256-bit SSL encryption protects your documents during upload and processing.",
		},
		{
			icon: Lock,
			title: "Zero Data Storage",
			description:
				"We never store your documents. They are processed and immediately deleted.",
		},
		{
			icon: Eye,
			title: "Privacy First",
			description:
				"No human ever sees your documents. Only AI processes them automatically.",
		},
		{
			icon: Trash,
			title: "Auto-Delete",
			description:
				"All document traces are permanently deleted within 24 hours automatically.",
		},
	];

	return (
		<section id="trust" className="py-20 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
						<Shield className="w-4 h-4 mr-2" />
						Trusted by 50,000+ Indians
					</div>

					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Your <span className="text-green-600">Privacy</span> is Our Priority
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						We understand legal documents contain sensitive information. That's
						why we've built the most secure platform.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{trustFeatures.map((feature, index) => (
						<div key={index} className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<feature.icon className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						🛡️ ISO 27001 Certified & GDPR Compliant
					</h3>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
						Legal GPT meets international security standards and Indian data
						protection laws. Your documents are safer with us than in your
						email.
					</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
						<span className="bg-white px-3 py-1 rounded-full">
							🔒 End-to-End Encrypted
						</span>
						<span className="bg-white px-3 py-1 rounded-full">
							🌍 GDPR Compliant
						</span>
						<span className="bg-white px-3 py-1 rounded-full">
							🇮🇳 India Data Laws
						</span>
						<span className="bg-white px-3 py-1 rounded-full">
							⚡ Real-time Processing
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
