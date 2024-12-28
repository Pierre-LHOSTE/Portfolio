import { projectsList } from "../projects/list";
import ProjectStacks from "../projects/stacks/ProjectStacks";
import { stackItem } from "../stack/list";
import type { StackIdType } from "../stack/stack";
import Tooltip from "../tooltip/Tooltip";
import type { FooterColumnsType } from "./type";

export const portfolioFooter: FooterColumnsType = {
  title: "Designed and built",
  urls: [
    {
      title: "From scratch",
      url: "https://www.github.com/vingt-douze",
    },
    {
      title: (
        <>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            With Next.js
          </a>{" "}
          <Tooltip
            content={
              <ProjectStacks
                stacks={projectsList.portfolio.technologies.map(
                  (stack) => stackItem[stack as StackIdType]
                )}
              />
            }
          >
            (and so others)
          </Tooltip>
        </>
      ),
      url: "",
    },
    {
      title: "Hosted on Vercel",
      url: "https://vercel.com/",
    },
  ],
};

export const contactFooter: FooterColumnsType = {
  title: "Contact",
  urls: [
    {
      title: "vingt-douze@protonmail.com",
      url: "mailto:vingt-douze@protonmail.com",
    },
    {
      title: "LinkedIn profile",
      url: "https://www.linkedin.com/in/pierre-lhoste/",
    },
    {
      title: "Bluesky profile",
      url: "https://bsky.app/profile/212.lol",
    },
  ],
};
