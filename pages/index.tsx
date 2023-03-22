import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import BookingSection from "components/page/homepage/BookingSection";
import CategoriesSection from "components/page/homepage/CategoriesSection";
import ExperienceSection from "components/page/homepage/ExperienceSection";
import HeroSection from "components/page/homepage/HeroSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ExperienceSection />
      <BookingSection />
    </MainLayout>
  );
}
