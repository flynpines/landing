import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToWelcome = () => {
    const welcomeSection = document.querySelector('#welcome');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        // background: 'linear-graAdient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        background: "url(./IMG_9539.jpg)",
      }}
    >
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div> */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          زندگی قبلی خود را ترک کنید و آرزوهایتان رو فراموش کنید
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 animate-fade-in-up delay-100">
          ورودی 1404  
        </p>

        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
          مسیر علمی و آکادمیک شما در این نقطه به اتمام میرسد
        </p>

        <button
          onClick={handleScrollToWelcome}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300"
        >
          مسیر را مشاهده کن
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToWelcome}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;