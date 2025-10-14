import { Mail, Phone, MapPin, Clock, Link} from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      title: 'انجمن علوم کامپیوتر',
      links: [
        "http://t.me/KNTU_CSSA",
        "http://t.me/NPC_KNTU", 
        "https://instagram.com/kntu_cssa",
      ],
    },
    {
      icon: Phone,
      title: 'خدمات دانشجویی',
      links: ["https://t.me/kntu_sm", 
        "https://t.me/kntu_ac",
        ""
      ],
    },
    {
      icon: MapPin,
      title: 'خوابگاه',
      links: ["https://t.me/khabgah_danesh"],
    },
    {
      icon: Clock,
      title: 'دیگر',
      links: ["https://t.me/kntusport"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            در ارتباط باش
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ما اینجا هستیم تا به شما کمک کنیم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => {

            const Links = contact.links.map((href, index) => <li dir='ltr' className='w-fit' key={index}>
              <a className='underline' href={href} >{href}</a>
            </li>)

            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="bg-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4"
                  // style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <Icon size={24} className="text-white" color='black'/>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                <div className="w-full flex justify-end text-sm text-gray-600" >
                  <ul dir='ltr' >
                  {Links}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;