import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/SectionBackground";

export function Registration() {
  return (
    <SectionBackground className="py-24">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-background/80 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Secure Your Spot</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Registration is open to students and researchers passionate about quantum technology.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your academic email" 
                className="flex-1 h-12 px-4 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                required
              />
              <Button type="submit" size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By applying, you agree to the Code of Conduct.
            </p>
          </form>
        </motion.div>
      </div>
    </SectionBackground>
  );
}
