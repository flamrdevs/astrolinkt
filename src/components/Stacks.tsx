import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";

const stacks = [
  {
    name: "Figma",
    category: "Design",
    icon: Simple.IconFigma,
    url: "https://www.figma.com",
  },
  {
    name: "Framer",
    category: "Design",
    icon: Simple.IconFramer,
    url: "https://www.framer.com",
  },
  {
    name: "Rive",
    category: "Design",
    icon: Simple.IconRive,
    url: "https://rive.app",
  },
  {
    name: "Arc",
    category: "Browser",
    icon: Simple.IconArc,
    url: "https://arc.net",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: Simple.IconNotion,
    url: "https://www.notion.so",
  },
  {
    name: "Calendly",
    category: "Calendar",
    icon: Simple.IconCalendly,
    url: "https://calendly.com",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Stacks</h2>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {stacks.map((stack) => {
          return (
            <li
              key={stack.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <stack.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {stack.category}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={stack.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
