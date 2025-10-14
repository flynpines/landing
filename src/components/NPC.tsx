import { useState, useRef} from "react";

const NPC = () => {

//     const text = `
//         مسابقات و چالش‌های برنامه‌نویسی (NPC Series)
// برای علاقه‌مندان به رقابت و رشد مهارت‌های برنامه‌نویسی، سری مسابقات NPC (Nasir Programming Contest) به‌صورت منظم در پلتفرم Quera برگزار می‌شود.
//     `;

    const text = "برای علاقه‌مندان به رقابت و رشد مهارت‌های برنامه‌نویسی، سری مسابقات NPC (Nasir Programming Contest) به‌صورت منظم در پلتفرم Quera برگزار می‌شود.";

    const properties = ["برگزاری آنلانین با جوایز نقدی", "امکان شرکت در گروه های 1 تا 3 نفره",
        "این مسابقات فرصتی عالی برای تمرین الگوریتم، رقابت سالم و یادگیری در کنار دیگر دانشجویان است."];

    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [translate, setTranslate] = useState("translateX(0px)");
    const startX = useRef(0);
    const endX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const slideCount = 3; // total slides

    const handleStart = (x: number) => {
        startX.current = x;
        endX.current = x;
        setIsDragging(true);
    };

    const handleMove = (x: number) => {
        if (isDragging) {
        endX.current = x;
        }
    };

    const handleEnd = () => {
        
        if (!isDragging) return;
        setIsDragging(false);
        const dx = endX.current - startX.current;

        if (Math.abs(dx) > 30) {
        if (dx > 0 && index < slideCount - 1)  setIndex((i) => i + 1);
        else if (dx < 0 && index > 0) setIndex((i) => i - 1);
        } else {
        alert("Clicked! 🎯");
        };

        console.log(index);

        setTranslate(`translateX(${index * 300}px)`);

  };

    return <section id="NPC" >
        <div className="bg-gray-50 max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8" >
            <div className="text-center mb-16">
            <h2 className="text-9xl sm:text-9xl font-bold text-gray-900 mb-32">
                NPC
            </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8" >
                <div className="max-h-96 col-span-1 md:col-span-2">
                    <p className="mb-12 text-2xl" >
                        {text}
                    </p>
                    <ul>
                        {properties.map((prop, index) => <li className="mb-3" key={index}>- {prop}</li>)}
                    </ul>
                </div>
                <div className="w-[100%] h-[450px] flex justify-center items-center" >
                    <div className="w-[300px] overflow-hidden relative h-full bg-blue-500">
                        <div
                         onMouseDown={(e) => handleStart(e.clientX)}
                         onMouseUp={handleEnd}
                         onMouseLeave={handleEnd}
                         onMouseMove={(e) => {e.preventDefault(); handleMove(e.clientX)}}
                         onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                         onTouchMove={(e) => {e.preventDefault(); handleMove(e.touches[0].clientX)}}
                         onTouchEnd={handleEnd}
                         className="ease-in-out duration-200 flex w-[900px] h-full"
                         style={{transform: translate}}
                        >
                            <div className="bg-red-500 w-[300px] h-full" ></div>
                            <div className="bg-orange-500 w-[300px] h-full" ></div>
                            <div className="bg-green-500 w-[300px] h-full" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default NPC;