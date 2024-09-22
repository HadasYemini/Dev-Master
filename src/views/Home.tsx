import { useLanguage } from '../context/LanguageContext'; 

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-teal-100 to-teal-200 p-8">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
        {t.home.title}
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl text-center leading-relaxed">
        {t.home.description}
      </p>
      <section className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.experience.title}</h2>
        <p className="text-gray-700 mb-4">{t.home.experience.description1}</p>
        <p className="text-gray-700 mb-4">{t.home.experience.description2}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.skills.title}</h2>
        <p className="text-gray-700 mb-4">{t.home.skills.technologies}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.additionalSkills.title}</h2>
        <p className="text-gray-700 mb-4">{t.home.additionalSkills.creativity}</p>
        <p className="text-gray-700">{t.home.additionalSkills.skills}</p>
      </section>
    </div>
  );
}
