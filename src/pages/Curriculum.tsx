import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Eye, 
  BookOpen, 
  Presentation, 
  Award, 
  Brain, 
  Users, 
  Calendar, 
  Globe, 
  Code, 
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Building2,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";

const Curriculum = () => {
  const { t } = useTranslation();
  
  const materials = [
    {
      title: t('curriculum.materials.agenticAI.title'),
      filename: "AGentic Ai final presentation.pdf",
      description: t('curriculum.materials.agenticAI.description'),
      type: t('curriculum.materials.agenticAI.type'),
      category: t('curriculum.materials.agenticAI.category')
    },
    {
      title: t('curriculum.materials.architecture.title'),
      filename: "Architecture-Overview (1).pdf",
      description: t('curriculum.materials.architecture.description'),
      type: t('curriculum.materials.architecture.type'),
      category: t('curriculum.materials.architecture.category')
    },
    {
      title: t('curriculum.materials.github.title'),
      filename: "Github.pdf",
      description: t('curriculum.materials.github.description'),
      type: t('curriculum.materials.github.type'),
      category: t('curriculum.materials.github.category')
    },
    {
      title: t('curriculum.materials.networking.title'),
      filename: "Networking.pdf",
      description: t('curriculum.materials.networking.description'),
      type: t('curriculum.materials.networking.type'),
      category: t('curriculum.materials.networking.category')
    },
    {
      title: t('curriculum.materials.projectManagement.title'),
      filename: "project-management (1).pdf",
      description: t('curriculum.materials.projectManagement.description'),
      type: t('curriculum.materials.projectManagement.type'),
      category: t('curriculum.materials.projectManagement.category')
    },
    {
      title: t('curriculum.materials.vibeCoding.title'),
      filename: "Vibe-Coding-on-Lovable-AI-for-Absolute-Beginners.pdf",
      description: t('curriculum.materials.vibeCoding.description'),
      type: t('curriculum.materials.vibeCoding.type'),
      category: t('curriculum.materials.vibeCoding.category')
    }
  ];

  const programActivities = [
    {
      icon: Brain,
      title: t('curriculum.activities.aiTools.title'),
      description: t('curriculum.activities.aiTools.description'),
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: t('curriculum.activities.realProject.title'),
      description: t('curriculum.activities.realProject.description'),
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: t('curriculum.activities.projectCycle.title'),
      description: t('curriculum.activities.projectCycle.description'),
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: t('curriculum.activities.aiChatbot.title'),
      description: t('curriculum.activities.aiChatbot.description'),
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Presentation,
      title: t('curriculum.activities.industryTalks.title'),
      description: t('curriculum.activities.industryTalks.description'),
      color: "bg-gradient-to-br from-red-500 to-red-600"
    }
  ];

  const trainingFormat = [
    {
      icon: Users,
      title: t('curriculum.format.briefing.title'),
      description: t('curriculum.format.briefing.description'),
      step: "1"
    },
    {
      icon: Target,
      title: t('curriculum.format.teams.title'),
      description: t('curriculum.format.teams.description'),
      step: "2"
    },
    {
      icon: Clock,
      title: t('curriculum.format.guidance.title'),
      description: t('curriculum.format.guidance.description'),
      step: "3"
    },
    {
      icon: Presentation,
      title: t('curriculum.format.presentation.title'),
      description: t('curriculum.format.presentation.description'),
      step: "4"
    },
    {
      icon: GraduationCap,
      title: t('curriculum.format.graduation.title'),
      description: t('curriculum.format.graduation.description'),
      step: "5"
    }
  ];

  const coaches = [
    {
      name: t('curriculum.coaches.team.title'),
      description: t('curriculum.coaches.team.description'),
      icon: Users,
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      name: t('curriculum.coaches.experience.title'),
      description: t('curriculum.coaches.experience.description'),
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      name: t('curriculum.coaches.industries.title'),
      description: t('curriculum.coaches.industries.description'),
      icon: Building2,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      name: t('curriculum.coaches.bilingual.title'),
      description: t('curriculum.coaches.bilingual.description'),
      icon: Globe,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              {t('curriculum.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('curriculum.title')} <span className="text-amber-600">{t('curriculum.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('curriculum.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium">
                        {material.category}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{material.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{material.type}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{material.description}</p>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                      onClick={() => window.open(`/materials/${material.filename}`, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t('curriculum.buttons.viewPDF')}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-amber-200 text-amber-700 hover:bg-amber-50"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = `/materials/${material.filename}`;
                        link.download = material.filename;
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What Students Will Do */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('curriculum.sections.activities.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('curriculum.sections.activities.subtitle')}
            </p>
          </div>

          {/* Week 1 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border-l-8 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('curriculum.weeks.week1.title')}</h3>
                  <p className="text-blue-600 font-semibold mt-1">{t('curriculum.weeks.week1.goal')}</p>
                </div>
              </div>
              <div className="space-y-3">
                {t('curriculum.weeks.week1.topics', { returnObjects: true }).map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 border-l-8 border-green-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('curriculum.weeks.week2.title')}</h3>
                  <p className="text-green-600 font-semibold mt-1">{t('curriculum.weeks.week2.goal')}</p>
                </div>
              </div>
              <div className="space-y-3">
                {t('curriculum.weeks.week2.topics', { returnObjects: true }).map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Week 3 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8 border-l-8 border-amber-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('curriculum.weeks.week3.title')}</h3>
                  <p className="text-amber-600 font-semibold mt-1">{t('curriculum.weeks.week3.goal')}</p>
                </div>
              </div>
              <div className="space-y-3">
                {t('curriculum.weeks.week3.topics', { returnObjects: true }).map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Schedule */}
      <div className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('curriculum.schedule.title')}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t('curriculum.schedule.description')}
                </p>
                
                {/* Logistics Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('curriculum.schedule.logistics.frequency')}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Clock className="w-5 h-5 mr-2" />
                    {t('curriculum.schedule.logistics.onlineTeaching')}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Code className="w-5 h-5 mr-2" />
                    {t('curriculum.schedule.logistics.workshopProject')}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Target className="w-5 h-5 mr-2" />
                    {t('curriculum.schedule.logistics.totalDaily')}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold">
                  <Clock className="w-5 h-5 mr-2" />
                  {t('curriculum.schedule.flexible')}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Training Format */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('curriculum.sections.format.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('curriculum.sections.format.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {trainingFormat.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-6 h-6 text-amber-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Leading AI Coaches */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('curriculum.sections.coaches.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('curriculum.sections.coaches.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach, index) => {
              const IconComponent = coach.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${coach.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{coach.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{coach.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>


      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('curriculum.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('curriculum.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
              >
                <Award className="w-5 h-5 mr-2" />
                {t('curriculum.cta.buttons.join')}
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-200 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
                onClick={() => window.open('mailto:Jiayun@xpectrum-ai.com')}
              >
                <Presentation className="w-5 h-5 mr-2" />
                {t('curriculum.cta.buttons.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Curriculum;
