const HomeContent = () => {
  return (
    <section className="flex-1 flex flex-col px-6">
      <div className="flex justify-between items-start -mt-2">
        {/* "this is me" — arrow goes diagonally up-left to name */}
        <div className="ml-[12%]">
          <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="180" y1="140"
              x2="2" y2="2"
              stroke="rgb(161, 161, 170)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line x1="2" y1="2" x2="16" y2="2" stroke="rgb(161, 161, 170)" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="2" x2="6" y2="16" stroke="rgb(161, 161, 170)" strokeWidth="2" strokeLinecap="round" />
            <text
              x="90"
              y="172"
              fill="rgb(161, 161, 170)"
              fontSize="16"
              fontStyle="italic"
              fontFamily="var(--font-geist-mono), monospace"
            >
              this is me
            </text>
          </svg>
        </div>

        {/* "this is my resume" — arrow goes diagonally up-right to resume */}
        <div className="mr-[6%]">
          <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="40" y1="140"
              x2="238" y2="2"
              stroke="rgb(161, 161, 170)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line x1="238" y1="2" x2="224" y2="2" stroke="rgb(161, 161, 170)" strokeWidth="2" strokeLinecap="round" />
            <line x1="238" y1="2" x2="234" y2="16" stroke="rgb(161, 161, 170)" strokeWidth="2" strokeLinecap="round" />
            <text
              x="0"
              y="172"
              fill="rgb(161, 161, 170)"
              fontSize="16"
              fontStyle="italic"
              fontFamily="var(--font-geist-mono), monospace"
            >
              this is my resume
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
