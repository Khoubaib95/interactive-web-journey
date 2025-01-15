import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "Coming Soon",
      description: "Blog posts will be available soon",
      date: "2024",
    },
    {
      title: "Stay Tuned",
      description: "More content is on the way",
      date: "2024",
    },
  ];

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog Posts
      </motion.h1>
      
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;