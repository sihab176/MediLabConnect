import { FaSearch, FaRegBuilding, FaRegCreditCard } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";

const steps = [
  {
    icon: FaSearch,
    step: "01",
    title: "Search Blood",
    description: "Enter your required blood group and location to find available blood banks near you.",
  },
  {
    icon: FaRegBuilding,
    step: "02",
    title: "Select Blood Bank",
    description: "Compare verified blood banks, check availability, and choose the most convenient option.",
  },
  {
    icon: FaRegCreditCard,
    step: "03",
    title: "Book & Pay Securely",
    description: "Complete your booking with secure online payment. Instant confirmation via SMS.",
  },
  {
    icon: MdOutlineInventory2,
    step: "04",
    title: "Receive Blood",
    description: "Pick up from the blood bank or get doorstep delivery in emergency cases.",
  },
];

const HowItWorks = () => {
  return (
    <section className=" mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get the blood you need in just 4 simple steps. 
            Our streamlined process ensures quick access to life-saving blood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-6 border border-gray-100 shadow-xl hover:bg-white  shadow-card hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-gray-300">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;