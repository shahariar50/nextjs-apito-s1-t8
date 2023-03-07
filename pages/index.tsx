import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import AddressSection from "components/page/homepage/AddressSection";
import CategoriesSection from "components/page/homepage/CategoriesSection";
import ContactForm from "components/page/homepage/ContactForm";
import ExperienceSection from "components/page/homepage/ExperienceSection";
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
      <FeaturesSection />
      <CategoriesSection />
      <ExperienceSection />
      <ServiceSection />
      <StatisticsSection />
      <TestemonialSection />
      <ContactForm />
      <AddressSection />
      <NewsLetterSection />
    </MainLayout>
  );
}
