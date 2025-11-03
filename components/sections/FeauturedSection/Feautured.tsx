import FeaturedCard from "../../cards/feautured/feautured-card";
import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/*Heading*/}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/*Featured Projects Grid*/}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featuredData && featuredData.length > 0 ? (
          featuredData.map((featured, i) => (
            <div
              key={i}
              className="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <FeaturedCard
                title={featured.title}
                tag={featured.tag}
                description={featured.description}
                githubUrl={featured.githubUrl}
                deployUrl={featured.deployUrl}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-300/60">
              No projects found. Please check the data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
