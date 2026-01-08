import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import DomainsPreview from "@/components/DomainsPreview";
import SEO from "@/components/SEO";
import { pageMetadata } from "@/config/metadata";

const Index = () => {
  return (
    <>
      <SEO
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
        keywords={pageMetadata.home.keywords}
      />
      <div className="min-h-screen bg-background">
        <Hero />
        <Purpose />
        <DomainsPreview />
      </div>
    </>
  );
};

export default Index;
