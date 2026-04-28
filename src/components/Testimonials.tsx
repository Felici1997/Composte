import React from 'react';

const testimonials = [
  {
    quote: "Nos enfants bénéficient d'une meilleure éducation et nous avons la liberté de vivre comme tout le monde sans avoir à mendier auprès de qui que ce soit. Nous disons merci, que Dieu bénisse ThriveAgric.",
    author: "Rita Sulei",
    location: "État de Kaduna, Nigéria",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="text-6xl text-green-500 font-serif absolute -top-10 -left-10 opacity-30">“</div>
            <p className="text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-8 relative z-10">
              {testimonials[0].quote}
            </p>
            <div>
              <div className="text-xl font-bold text-gray-900">{testimonials[0].author}</div>
              <div className="text-gray-500">{testimonials[0].location}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Farmer Testimony"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
