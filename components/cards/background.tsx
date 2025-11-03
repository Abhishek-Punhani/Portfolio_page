import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Hailing from &nbsp;
          <span className="text-white underline">
            Malout, Sri Muktsar Sahib, Punjab
          </span>
          , my journey in technology began with a strong academic foundation.
          Excelling in competitive exams like JEE Advanced and achieving top
          ranks in coding platforms fueled my passion for problem-solving and
          innovation. <br />
          <br />
          <span className="text-white underline">At IIT BHU</span>
          &nbsp; pursuing Electrical Engineering, I immersed myself in &nbsp;
          <span className="text-white underline">full-stack development</span>
          &nbsp;, mastering technologies from MERN and Next.js to Flask and
          Django. My interests span &nbsp;
          <span className="text-white underline">
            blockchain, algorithmic trading, and AI-driven solutions
          </span>
          &nbsp; , leading to projects that blend cutting-edge tech with
          real-world impact. <br />
          <br />
          Beyond coding, I actively contribute to the tech community through
          internships, hackathons, and leadership roles at COPS and Averera.
          From building scalable microservices to predictive models for sports
          analytics, I&apos;m driven by the challenge of turning complex ideas
          into elegant, efficient solutions. <br />
          <br />
          <span className="text-white italic">
            Committed to continuous learning and innovation, I aim to leverage
            technology to solve meaningful problems and inspire the next
            generation of developers.
          </span>
        </p>
      </div>
    </Card>
  );
}
