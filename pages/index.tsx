import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import AddressSection from "components/page/homepage/AddressSection";
import ContactForm from "components/page/homepage/ContactForm";
import FeaturesSection from "components/page/homepage/FeaturesSection";
import HeroSection from "components/page/homepage/HeroSection";
import NewsLetterSection from "components/page/homepage/NewsLetterSection";
import ServiceSection from "components/page/homepage/ServiceSection";
import StatisticsSection from "components/page/homepage/StatisticsSection";
import TestemonialSection from "components/page/homepage/TestemonialSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatisticsSection />
      <FeaturesSection />
      <TestemonialSection />
      <ContactForm />
      <AddressSection />
      <NewsLetterSection />
    </MainLayout>
  );
}
