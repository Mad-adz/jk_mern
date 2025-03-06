// import { ResourceCard } from "../../components";
// import { resources } from "../../constants";

import { ResourceCard } from "@/components";
import { resources } from "@/constants";

const ResourcesSection = () => {
  return (
    <section className="py-8 bg-yellow-50/50">
      <div className="container">
        <h3 className="text-3xl font-bold mb-16">Explore Our Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="mb-16">
              <ResourceCard
                title={resource.title}
                description={resource.description}
                url={resource.url}
                image={resource.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;