import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Mr. Anant",
      text: "Amazing product and must buy one of the finest silver jewelry piece i ever had.",
      image: "https://www.silverlab.in/cdn/shop/files/ART03770_copy_result.jpg?v=1747726211&width=750"
    },
    {
      name: "Ishika",
      text: "just WOW This silver piece really feels elegant and its design is so classy i love it thank you silverlab.",
      image: "https://www.silverlab.in/cdn/shop/files/ART04029copy_result.jpg?v=1747726714&width=500"
    },
    {
      name: "Mehek",
      text: "One of the best ever product i ever bought online, jesa online dikha raha hai waisa same high quality product recieved.",
      image: "https://www.silverlab.in/cdn/shop/files/ART03624_copy_result.jpg?v=1760095032&width=500"
    }
  ];

  return (
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1150px] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col">
              {/* Jewelry Image */}
              <div className="w-full h-64 bg-black mb-0 overflow-hidden">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Review Text Section - Dark Background */}
              <div className="bg-[#1B1B1B] p-6">
                <p className="text-white font-semibold mb-3">{review.name}</p>
                <p className="text-gray-300 italic">"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

