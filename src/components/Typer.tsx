import { useEffect, useRef, useState } from "react";

const Typer = () => {

    const textBoxRef = useRef<null | HTMLHeadingElement>(null);
    
    const stages = ["ارتباط با صنعت، بازدید های علمی، جشن ها و بیشتر", "مرحله دوم"];
    
    const [typing, setTyping] = useState(false);
    const [text, setText] = useState("ارتباط با صنعت، بازدید های علمی، جشن ها و بیشتر");

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(text.length);
    const [deleting, setDeleting] = useState(true);

    useEffect(() => {

        document.addEventListener("scroll" , () => {

            if(!textBoxRef || textBoxRef.current == null) {
                return;
            }

            const height = window.innerHeight;
            const rect = textBoxRef.current!.getBoundingClientRect();
            const center = rect.top + rect.height/2;

            if(Math.abs(center - height/2)/height < 0.17) {
                // textBoxRef.current!.className += " bg-red-200";
                setTyping(true);
            }

        });

    }, []);

    useEffect(() => {
        
        if (!typing) return;

        const current = stages[index];
        
        const timeout = setTimeout(() => {
        if (deleting) {
            if (subIndex > 0) setSubIndex(subIndex - 1);
            else {
                setIndex((i) => (i+1)%stages.length);
                setDeleting(false)
            };
        } else {
            if (subIndex < current.length) setSubIndex(subIndex + 1);
            else setDeleting(true);
        }
        }, 75);

        return () => clearTimeout(timeout);
  }, [subIndex, deleting, typing]);

    useEffect(() => {
        setText(stages[index].substring(0, subIndex));
    }, [subIndex, index]);

    return <section id="Courses">
        <div className="bg-gray-50 max-w-7xl mx-auto mt-64 px-4 sm:px-6 lg:px-8" >
            <div className="text-center mb-16">
            <h2 ref={textBoxRef} className="text-3xl md:text-5xl font-bold text-gray-900 after:content-[''] after:block after:w-full after:h-1 after:bg-blue-500 after:mx-auto after:mt-6">
                {text}
                <span className="inline-block w-[2px] h-[1em] bg-gray-900 animate-blink align-middle ml-1"></span>
            </h2>
            </div>
        </div>
    </section>

}

export default Typer;