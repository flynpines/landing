import {Map, ClipboardList, Home, CheckCircle } from 'lucide-react';

const QuickStart = () => {
  const quickStartItems = [
    {
      icon: Map,
      title: 'تور مجاری پردیس',
      description: 'توی استریت ویو پردیس رو بگرد همینطور میتونی 1 ام با انجمن دانشکده رو بگردی',
      date: 'یک ام آبان',
      color: 'var(--color-secondary)',
    },
    {
      icon: ClipboardList,
      title: 'ثبت نام',
      description: 'برای تکمیل ثبت نامت به آموزش دانشکده ریاضی مراجه کن',
      date: 'به زودی',
      color: 'var(--color-accent)',
    },
    {
      icon: Home,
      title: 'ورود به خوابگاه',
      description: 'وسایلت رو ببر خوابگاه دانش 1 یا خوابگاه طلاکوب',
      date: 'Starts: August 18',
      color: 'var(--color-primary)',
    },
    {
      icon: CheckCircle,
      title: 'تاریخ های مهم',
      description: 'تاریخ های مهم',
      date: 'تاریخ های مهم',
      color: 'var(--color-secondary)',
    },
  ];

  return (
    <section id="quick-start" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-5 sm:text-5xl font-bold text-gray-900 mb-4">
            راهنمای شروع دانشگاه
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            همه چیزهایی که برای هفته اول نیاز دارید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickStartItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color + '15' }}
                >
                  <Icon size={28} style={{ color: item.color }} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                <div
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: item.color + '10', color: item.color }}
                >
                  {item.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;