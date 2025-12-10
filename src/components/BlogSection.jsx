import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: "Silver Prices Are Rising – Why Now is the Best Time to Invest in 925 Sterling Silver Jewelry",
      date: "SEPTEMBER 25, 2025",
      excerpt: "Silver has always been a timeless metal – cherished for its shine, elegance, and value. But did you know that silver prices are hitting record highs in 2025? This makes silver..."
    },
    {
      title: "This Diwali, Gift Silver That Truly Shines – Explore 925 Sterling Silver Jewelry by Silverlab",
      date: "SEPTEMBER 20, 2025",
      excerpt: "Silver Is the New Gold This Diwali In a world of fleeting trends, silver jewelry holds timeless value. This Diwali, skip the generic gifts and choose something meaningful, elegant, and..."
    },
    {
      title: "Celebrate Diwali 2025 with the Timeless Shine of 925 Sterling Silver",
      date: "SEPTEMBER 5, 2025",
      excerpt: "This Diwali, when your home lights up with diyas, let your celebrations shine with the purity of sterling silver. At Silverlab, we don't just sell jewelry—we help you create memories that..."
    }
  ];

  return (
    <section className="bg-black py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">Blogs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-[#f5f5f0] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-700 mb-2 font-medium">{blog.date}</p>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 underline">{blog.title}</h3>
                <p className="text-gray-700 line-clamp-3 text-sm sm:text-base">{blog.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

