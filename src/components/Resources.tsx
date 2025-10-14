import {Code, Calendar, Briefcase} from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: Code,
      title: 'NPC',
      description: 'مسابفات برنامه نویسی',
      link: '#NPC',
    },
    {
      icon: Calendar,
      title: 'رویداد ها',
      description: 'رویدادی های علمی و فنی تخصصی انجمن',
      link: '#',
    },
    {
      icon: Briefcase,
      title: 'جلسات مسیر',
      description: 'جلسات مشاوره کار یابی (Career Path Sessions)',
      link: '#',
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            فعالیت های انجمن
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            برای حمایت از مسیر علمی و آکادمیک و رشد شخصی شما
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 border border-transparent hover:border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{resource.description}</p>

                  <span
                    className="mt-4 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    بیشتر بدانید
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;