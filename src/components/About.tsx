import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

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
            style={{ perspective: 1000 }}
          >
            <div
              className="relative w-full h-[300px] cursor-pointer"
              onClick={() => setIsFlipped1(!isFlipped1)}
            >
              <motion.div
                animate={{ rotateY: isFlipped1 ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full"
              >
                <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <p className="text-xl leading-relaxed text-foreground/80">
                      Hi there! I'm a passionate developer with a love for creating beautiful and functional web experiences. I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#FFDEE2] to-[#D3E4FD] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <p className="text-xl leading-relaxed text-foreground/80">
                      With years of experience in web development, I've worked on various projects ranging from small business websites to large-scale enterprise applications. I'm always eager to learn and adapt to new technologies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div
              className="relative h-[250px] cursor-pointer"
              onClick={() => setIsFlipped2(!isFlipped2)}
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ rotateY: isFlipped2 ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full"
              >
                <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">✨</span>
                        <span>Frontend Development</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">🛠️</span>
                        <span>Backend Development</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">📱</span>
                        <span>Responsive Design</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">🎨</span>
                        <span>UI/UX Implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#D6BCFA] to-[#9b87f5] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">⚛️</span>
                        <span>React & Next.js</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">🎨</span>
                        <span>Tailwind CSS</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">📱</span>
                        <span>React Native</span>
                      </li>
                      <li className="flex items-center space-x-3 text-lg text-white">
                        <span className="text-2xl">🚀</span>
                        <span>Node.js & Express</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div
              className="relative h-[150px] cursor-pointer"
              onClick={() => setIsFlipped3(!isFlipped3)}
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ rotateY: isFlipped3 ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full"
              >
                <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#FEF7CD] to-[#F2FCE2] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Current Focus</h3>
                    <p className="text-lg text-foreground/80">
                      Currently exploring advanced React patterns and diving deep into modern web architecture.
                    </p>
                  </CardContent>
                </Card>
                <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#F2FCE2] to-[#FEF7CD] border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Learning Goals</h3>
                    <p className="text-lg text-foreground/80">
                      Mastering microservices architecture and exploring AI integration in web applications.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;