import { projectsList } from "../components/projects/list";
import type { ProjectIdType } from "../components/projects/project";

export default function generateProjectTranslations(lang: "en" | "fr") {
  const projectsTranslations = Object.fromEntries(
    (Object.keys(projectsList) as ProjectIdType[]).map((key) => [
      key,
      {
        name: projectsList[key].name[lang],
        description: projectsList[key].description[lang],
      },
    ])
  );
  return projectsTranslations;
}
