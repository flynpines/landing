

const Courses = () => {

//     const text = `
//         مسابقات و چالش‌های برنامه‌نویسی (NPC Series)
// برای علاقه‌مندان به رقابت و رشد مهارت‌های برنامه‌نویسی، سری مسابقات NPC (Nasir Programming Contest) به‌صورت منظم در پلتفرم Quera برگزار می‌شود.
//     `;

    const text = `انجمن همواره در تلاش است تا دانشجویان را با حوزه‌های متنوع دنیای کامپیوتر آشنا کند. ` +
    `های انجمن نشست‌ها با حضور اساتید و متخصصان برگزار
     می‌شوند و فرصتی کم‌نظیر برای یادگیری مباحث روز دنیای AI و CS هستند.`;

    return <section id="Courses">
        <div className="bg-gray-50 max-w-7xl mx-auto mt-32 px-4 sm:px-6 lg:px-8" >
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-32">
                رویدادهای علمی و تخصصی
            </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8" >
                <div className="col-span-1 md:col-span-2 ">
                    <p className="mb-12 text-2xl" >
                        {text}
                    </p>
                    <p className="mb-2 text-lg" >سلسله جلسات NCS Talks با موضوعاتی مانند</p>
                    <div className="flex pb-5 justify-start mt-3">
                        <ul style={{direction: "ltr"}}>
                            <li>- DeepSeek vs ChatGPT</li>
                            <li>- Diffusion Models</li>
                            <li>- LLM Hallucinations</li>
                            <li>- LLM Hallucinations</li>
                            <li>- Vision-Language Models</li>
                        </ul>
                    </div>
                    <p className="text-lg" >دوره GNN: from Zero to Hero با حضور استادان و پژوهشگران دانشگاه‌های خواجه نصیر و امیرکبیر</p>
                </div>
                <div className="h-96 flex justify-center" >
                    <div className="w-64 h-full bg-blue-500">

                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default Courses;