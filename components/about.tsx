import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Python", level: 85 },
  { name: "C++", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Computer Vision", level: 75 },
]

const qualifications = [
  {
    degree: "Bachelor of Science (B.Sc.) in Mathematics",
    institution: "Cluster University of Jammu, Govt. Gandhi Memorial College, Jammu, India",
  },
  {
    degree: "Data Science with SQL Certificate",
    institution: "Edureka, Jammu, India",
  },
]

const certifications = [
  {
    name: "Data Science with SQL Certificate",
    link: "https://www.edureka.co/certificate/250041f94cde0258076a65cac36cb3d4.pdf",
  },
]

const projects = [
  {
    name: "YouTube Shorts Auto Clipper & Editor",
    description: "AI-powered tool that clips YouTube videos and edits them into shorts using yt-dlp stream clipping",
    link: "https://github.com/ATISHMANHAS/youtube-Agnet",
    tech: "Python, MoviePy, yt-dlp, FFmpeg"
  },
  {
    name: "Stock Market Analysis & Recommendation Tool",
    description: "End-to-end stock analysis system with Buy/Hold/Sell signals and automated reporting",
    link: "https://github.com/ATISHMANHAS/Stock_analysis",
    tech: "Python, Pandas, yFinance, Matplotlib, FPDF"
  },
  {
    name: "Library Management System",
    description: "Python-based system for managing books, users, and transactions efficiently",
    link: "https://github.com/ATISHMANHAS/library",
    tech: "Python, SQLite/MySQL"
  },
  {
    name: "Mouse Control Automation Tool",
    description: "Python-based automation tool for controlling mouse via hand gestures using computer vision",
    link: "#",
    tech: "Python, OpenCV, PyAutoGUI, MediaPipe"
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="mb-16 animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 animate-growWidth"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="relative border-l-2 border-muted-foreground pl-8 ml-4">
            {qualifications.map((qual, index) => (
              <div
                key={`${qual.degree}-${qual.year}`}
                className="mb-8 relative animate-slideInLeft"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary" />
                <div className="text-sm text-primary font-semibold">{qual.year}</div>
                <div className="text-xl font-medium">{qual.degree}</div>
                <div className="text-muted-foreground">{qual.institution}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="animate-fadeIn">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-sm text-primary mb-3"><strong>Tech:</strong> {project.tech}</p>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      View Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.name}>
                <CardContent className="p-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <div className="text-lg font-medium text-primary">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">View Certificate →</div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

