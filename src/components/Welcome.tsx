const Welcome = () => {
  return (
    <section id="welcome" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ورودی 1404 خوش آمدید
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <p className="text-xl text-gray-2000 leading-relaxed mb-6">
              درباره دانشگاه و انجمن
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              هستۀ اولیۀ دانشگاه صنعتی خواجه نصیرالدین طوسی دانشکدۀ مخابرات است که در سال ۱۳۰۷ شمسی در محل فعلی دانشکدۀ مهندسی برق دانشگاه تأسیس و در سال ۱۳۱۸ اساسنامۀ آن به تصویب مجلس شورای ملی وقت رسیده است. دانشگاه صنعتی خواجه نصیرالدین طوسی با ساختار فعلی، در سال ۱۳۵۹ و به‌دنبال تصویب ستاد انقلاب فرهنگی طی ادغام ۹ مرکز آموزش عالی با عنوان مجتمع فنی و مهندسی، بنیاد نهاده شد و سپس در سال ۱۳۶۲ نام آن به «دانشگاه فنی و مهندسی» تغییر یافت. تغيير نهايي نام دانشگاه به عنوان فعلي، به سال ۱۳۶۷ برمي‌گردد که در آن سال، دانشگاه به نام دانشمند پرآوازۀ اسلامي و ايراني، حکيم خواجه نصيرالدين طوسي، مزين شد. 
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
             انجمن علمی علوم کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی، مجموعه‌ای از دانشجویان علاقه‌مند به یادگیری، آموزش و همکاری در زمینه‌های متنوع علوم کامپیوتر است.
هدف ما ایجاد محیطی پویا برای رشد علمی و حرفه‌ای دانشجویان، برگزاری کارگاه‌ها و رویدادهای آموزشی، و ایجاد ارتباط میان دانشگاه و صنعت است.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-300">
              <p className="text-lg font-semibold text-gray-900">انجمن علمی علوم کامپیوتر</p>
              {/* <p className="text-gray-600">رییس دانشکده ریاضی</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;