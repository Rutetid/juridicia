import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
	const testimonials = [
		{
			name: "Priya Sharma",
			location: "Mumbai, Maharashtra",
			role: "Small Business Owner",
			content:
				"मैंने अपना rent agreement समझने के लिए Legal GPT का इस्तेमाल किया। बहुत ही आसान भाषा में समझाया गया। अब मुझे कोई confusion नहीं है।",
			rating: 5,
			avatar: "PS",
		},
		{
			name: "Rajesh Kumar",
			location: "Delhi",
			role: "Software Engineer",
			content:
				"Used Legal GPT for my employment contract. The Hindi explanation was so clear that I could understand every clause. Highly recommended for all Indians!",
			rating: 5,
			avatar: "RK",
		},
		{
			name: "Anita Patel",
			location: "Ahmedabad, Gujarat",
			role: "Teacher",
			content:
				"લીગલ GPT એ મારા બાળકોના સ્કૂલ એડમિશન ફોર્મ ગુજરાતીમાં સમજાવ્યું. બહુ સરળ અને ઉપયોગી છે. આભાર!",
			rating: 5,
			avatar: "AP",
		},
		{
			name: "Vikram Singh",
			location: "Jaipur, Rajasthan",
			role: "Shopkeeper",
			content:
				"Property documents समझने में बहुत मुश्किल थी। Legal GPT ने हिंदी में इतना आसान बना दिया कि अब मैं confident हूँ।",
			rating: 5,
			avatar: "VS",
		},
		{
			name: "Meera Nair",
			location: "Kochi, Kerala",
			role: "Nurse",
			content:
				"The voice explanation feature in Malayalam helped me understand my insurance policy completely. Great tool for common people like us.",
			rating: 5,
			avatar: "MN",
		},
		{
			name: "Suresh Yadav",
			location: "Patna, Bihar",
			role: "Farmer",
			content:
				"भोजपुरी में समझाने का feature बहुत बढ़िया है। अब कोई भी कागज़ात समझने में आसानी होती है। धन्यवाद Legal GPT!",
			rating: 5,
			avatar: "SY",
		},
	];

	return (
		<section
			id="testimonials"
			className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						What Our Users Say
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Join thousands of satisfied Indians who now understand their legal
						documents
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 text-yellow-400 fill-current"
										/>
									))}
								</div>

								<p className="text-gray-700 mb-6 leading-relaxed italic">
									"{testimonial.content}"
								</p>

								<div className="flex items-center">
									<div className="w-10 h-10 bg-bharat-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
										{testimonial.avatar}
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											{testimonial.name}
										</h4>
										<p className="text-sm text-gray-500">{testimonial.role}</p>
										<p className="text-xs text-gray-400">
											{testimonial.location}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ready to Join Them?
						</h3>
						<p className="text-gray-600 mb-6">
							Start understanding your legal documents today
						</p>
						<button className="bg-bharat-600 hover:bg-bharat-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
							Try Legal GPT Free
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
