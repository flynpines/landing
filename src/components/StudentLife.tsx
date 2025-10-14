const StudentLife = () => {

  return (
    <section id="student-life" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" >
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '34814', label: 'فارغ التحصیل' },
            { number: '7156', label: 'دانشجویان' },
            { number: '11', label: 'دانشکده' },
            { number: '358', label: 'اعضاء هئیت علمی' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;