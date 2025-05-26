import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-16 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div className="col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-r from-bharat-600 to-bharat-700 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">LG</span>
							</div>
							<span className="text-xl font-bold">Legal GPT</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed mb-4">
							Making legal documents understandable for every Indian citizen
							through AI technology.
						</p>
						<div className="flex space-x-3">
							<a
								href="#"
								className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bharat-600 transition-colors"
							>
								<span className="text-xs">f</span>
							</a>
							<a
								href="#"
								className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bharat-600 transition-colors"
							>
								<span className="text-xs">t</span>
							</a>
							<a
								href="#"
								className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bharat-600 transition-colors"
							>
								<span className="text-xs">in</span>
							</a>
						</div>
					</div>

					{/* Product */}
					<div>
						<h3 className="font-semibold mb-4">Product</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Features
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									How it Works
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									API Access
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Mobile App
								</a>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="font-semibold mb-4">Support</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Help Center
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Security
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-semibold mb-4">Contact</h3>
						<div className="space-y-3 text-sm text-gray-400">
							<div className="flex items-center">
								<Mail className="w-4 h-4 mr-2" />
								support@legalgpt.in
							</div>
							<div className="flex items-center">
								<Phone className="w-4 h-4 mr-2" />
								+91 98765 43210
							</div>
							<div className="flex items-center">
								<MessageCircle className="w-4 h-4 mr-2" />
								24/7 Chat Support
							</div>
						</div>

						<div className="mt-6">
							<h4 className="font-medium text-sm mb-2">Get Updates</h4>
							<div className="flex space-x-2">
								<input
									type="email"
									placeholder="Enter email"
									className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-bharat-600"
								/>
								<Button size="sm" className="bg-bharat-600 hover:bg-bharat-700">
									Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm mb-4 md:mb-0">
						© 2024 Legal GPT. Made with ❤️ for Bharat.
					</p>
					<div className="flex space-x-6 text-sm text-gray-400">
						<span>🇮🇳 Proudly Indian</span>
						<span>🔒 SSL Secured</span>
						<span>⚡ 99.9% Uptime</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
