import { Linkedin } from "lucide-react";

interface StudentCardProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export function StudentCard({
  name,
  role,
  image,
  linkedin,
}: StudentCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-2 border-primary shadow-lg"
      />

      <h3 className="mt-5 text-xl font-semibold">
        {name}
      </h3>

      <p className="text-sm text-muted-foreground mt-1">
        {role}
      </p>

      <div className="flex gap-3 mt-5">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 hover:bg-primary/10 transition"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
