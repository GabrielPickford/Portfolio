import Image from "next/image";
interface MoreinfoProps {
  showMore: boolean;
  click: () => void;
}

const Moreinfo = ({ showMore, click }: MoreinfoProps) => {
  return (
    <div
      className={`flex flex-col w-full items-center text-light-yellow mt-5 mb-20 transition-all duration-500 ease-out ${showMore ? "max-h-[9999px] overflow-visible" : "max-h-0 overflow-hidden"
        }`}
    >
      <section className="flex flex-col items-center w-full">
        <p className="font-alt text-base w-1/2 p-5 bg-red-500">
          My name is Gabriel Tambare, I am 22 years old and I was born in Santa Cruz, Bolivia, although I spent my childhood in Madrid, Spain.
          Currently, I am studying Computer Engineering at the UAGRM in Santa Cruz.
          <br /><br />
          Regarding my work experience, I started working at the age of 18 while at university, mostly in office environments, although I have also had experience in finance.
          I have the skills to work in a team and collaborate with different areas within a company.
          <br /><br />
          Outside of my studies, I have passions that are an integral part of my life.
          Boxing is more than a sport for me, it is a passion that has taught me discipline and determination.
          <br /><br />
          I am also passionate about music and I know how to play several instruments,
          having done concerts and presentations in high school.
        </p>
        <Image
          className=" border-4 border-orange-500 h-84 w-96 object-cover"
          src="/assets2/about2.png"
          width={2000}
          height={2000}
          alt="portrait" />
      </section>
      <button
        type="button"
        className="text-yellow-500 border-b-2 border-transparent mt-12 w-16 hover:border-yellow-500"
        onClick={click}
      >
        {showMore ? "Hide" : "More"}
      </button>
    </div>
  );
};

export default Moreinfo;
