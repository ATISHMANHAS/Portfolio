import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Data Science & Analytics",
    description: "Deliver data-driven solutions that improve efficiency and drive growth through advanced analytics and machine learning.",
    icon: "📊",
  },
  {
    title: "AI-Driven Applications",
    description: "Develop intelligent applications using computer vision, automation, and machine learning technologies.",
    icon: "🤖",
  },
  {
    title: "Automation Tools",
    description: "Create custom automation solutions for repetitive tasks and workflow optimization.",
    icon: "⚡",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

