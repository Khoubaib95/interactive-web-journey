import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-up">
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Hi there! I'm a passionate developer with a love for creating beautiful and functional web experiences. I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">What I Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✨ Frontend Development</li>
                <li>🛠️ Backend Development</li>
                <li>📱 Responsive Design</li>
                <li>🎨 UI/UX Implementation</li>
              </ul>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Current Focus</h3>
              <p className="text-gray-700">
                Currently exploring advanced React patterns and diving deep into modern web architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;