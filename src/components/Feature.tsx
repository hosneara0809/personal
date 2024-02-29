import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
            title="Senior Web Designer"
            des="oversaw the creation of user interfaces and online sites.Over 50 web pages were designed and constructed, resulting in a 30% increase in user interaction.cooperative work atmosphere."
            icon={<SiProgress />}
          />
          <Card
            title="UI/UX Designer"
            des="worked on enhancing the interface and user experience of different Google products.worked on the Google Docs landing page revamp, which raised the CTR by 10%.worked together with cross-functional teams to guarantee that every Google product offers a consistent user experience.
            "
            icon={<AiFillAppstore />}
          />
          
          <Card
            title="Web Developer"
            des="Designed and developed web pages for Apple's official website.Designed the landing page for the iPhone X launch, which received over 1 million visits on the first day.Developed a new checkout flow that reduced cart abandonment by 3%.Collaborated with the marketing team to design web pages for various marketing campaigns."
            icon={<AiFillAppstore />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
