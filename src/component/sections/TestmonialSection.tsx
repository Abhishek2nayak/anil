interface TestimonialProps {
  name: string;
  feedback: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  feedback,
  rating,
  reviewCount,
  avatar,
}) => {
  return (
    <div
      className="
      backdrop-blur-xl bg-white/10
      border border-white/20  
      rounded-2xl p-6
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      max-w-md w-full
    "
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name.charAt(0)
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm">{name}</h3>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 24 24"
                fill={index < rating ? "#F4B400" : "#D1D5DB"}
                className="w-4 h-4"
              >
                <path d="M12 2.75l2.96 6 6.63.96-4.8 4.68 1.13 6.6L12 17.77 6.08 21l1.13-6.6-4.8-4.68 6.63-.96L12 2.75z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Google Badge */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-white/70">Google</span>
          <span className="w-4 h-4 rounded-full bg-[#4285F4] text-white text-[10px] flex items-center justify-center font-bold">
            G
          </span>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm text-white/80 leading-relaxed">{feedback}</p>

      {/* Footer */}
      <p className="mt-3 text-xs text-white/50">
        {reviewCount} reviews · Verified
      </p>
    </div>
  );
};

export default Testimonial;
