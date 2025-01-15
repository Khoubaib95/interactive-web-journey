import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 gradient-text text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <p className="text-xl leading-relaxed text-foreground/80">
                  Hi there! I'm a passionate developer with a love for creating beautiful and functional web experiences. I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.
                </p>
                <p className="mt-6 text-xl leading-relaxed text-foreground/80">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">What I Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-lg text-foreground/80">
                    <span className="text-2xl">✨</span>
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-foreground/80">
                    <span className="text-2xl">🛠️</span>
                    <span>Backend Development</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-foreground/80">
                    <span className="text-2xl">📱</span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-foreground/80">
                    <span className="text-2xl">🎨</span>
                    <span>UI/UX Implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Current Focus</h3>
                <p className="text-lg text-foreground/80">
                  Currently exploring advanced React patterns and diving deep into modern web architecture.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;