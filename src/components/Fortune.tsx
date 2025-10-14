import { useRef, useState, useEffect } from "react";

type TimeTable = number[][];
type ColorTable = string[][];
type VisTable = boolean[][];

const Fortune = () => {
  const pallet = [
    "#1B262C",
    "#0F4C75",
    "#3282B8",
    "#3AB0FF",
    "#00B7C2",
    "#4C669F",
    "#6A4C93",
    "#9B5DE5",
    "#5BC0EB",
    "#8AC6D1",
  ];

  const randInt = (max: number) => Math.floor(max * Math.random());
  const choice = () => pallet[randInt(pallet.length)];

  const generateColorTable = (rows: number, cols: number): ColorTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => choice())
    );

  const generateVisTable = (rows: number, cols: number): VisTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => true)
    );

  const generateTimeTable = (rows: number, cols: number): TimeTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => randInt(10) * 100)
    );

  const [gridSize, setGridSize] = useState({ rows: 10, cols: 10 });
  
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) setGridSize({ rows: 10, cols: 10 });
      else setGridSize({ rows: 10, cols: 10 });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [colorTable, setColorTable] = useState<ColorTable>(
    generateColorTable(gridSize.rows, gridSize.cols)
  );
  const [visTable, setVisTable] = useState<VisTable>(
    generateVisTable(gridSize.rows, gridSize.cols)
  );

  const refreshCountRef = useRef(0);
  const dtRef = useRef(0);
  const timeTableRef = useRef<TimeTable>(
    generateTimeTable(gridSize.rows, gridSize.cols)
  );

  const clearScreen = () => {
    if (dtRef.current > 1000) {
      dtRef.current = 0;
      return;
    }
    dtRef.current += 100;

    for (let i = 0; i < gridSize.rows; i++) {
      for (let j = 0; j < gridSize.cols; j++) {
        if (dtRef.current > timeTableRef.current[i][j]) {
          setVisTable((vis) => {
            const newVis = vis.map((row) => [...row]);
            newVis[i][j] = false;
            return newVis;
          });
        }
      }
    }

    setTimeout(clearScreen, 100);
  };

  const refresh = () => {
    setColorTable(generateColorTable(gridSize.rows, gridSize.cols));
    refreshCountRef.current += 1;

    if (refreshCountRef.current < 10)
      return setTimeout(refresh, 100);

    refreshCountRef.current = 0;
    timeTableRef.current = generateTimeTable(gridSize.rows, gridSize.cols);
    setTimeout(clearScreen, 100);
  };

  const handleRefresh = () => {
    setVisTable(generateVisTable(gridSize.rows, gridSize.cols));
    refresh();
  };

  const text = `در قالب سلسله‌رویدادهای «مسیر»، دانشجویان فرصت گفتگو با اساتید گروه‌های مختلف مانند ریاضی کاربردی، آمار و علوم کامپیوتر را دارند تا مسیر تحصیلی و شغلی خود را بهتر بشناسند.
در این جلسات درباره انتخاب واحد، زیرگرایش‌ها، مهارت‌های لازم برای بازار کار و آینده شغلی صحبت می‌شود.`;

  return (
    <section id="Fortune" className="w-full px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
        <div className="md:w-1/3 text-center md:text-right text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">آینده خود را پیش‌بینی کن</h2>
          <p>{text}</p>
        </div>

        <div
          className="relative flex-shrink w-full md:w-2/3 aspect-[1/1]
                     max-w-[600px] md:max-w-[600px] bg-gray-100 rounded-2xl shadow-lg overflow-hidden"
          style={{
            height: window.innerWidth < 768 ? 300 : 600,
          }}
        >
          <div id='fortune_content' className="absolute w-4/5" >
            <p className="text-xl md:text-3xl mr-5 mt-5">مهندسی بک اند</p>
            <p className="text-lg md:text-xl mr-5 mt-5 text-gray-500">توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اندتوضیحات مهندسی بک اند توضیحات مهندسی بک اندتوضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اندتوضیحات مهندسی بک اند توضیحات مهندسی بک اند توضیحات مهندسی بک اند</p>
          </div>
          <div className="absolute grid w-full h-full"
               style={{
                 gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                 gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
               }}>
            {colorTable.flat().map((color, i) => (
              <div
                key={i}
                style={{
                  opacity: visTable.flat()[i] ? 1 : 0,
                  backgroundColor: color,
                //   transition: "opacity 0.2s",
                }}
              ></div>
            ))}
          </div>

          <button
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            onClick={handleRefresh}
          >
            محاسبه کن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fortune;
