import { ExperienceList } from "../components/curriculum-vitae/experience/data";
import type { ExperienceIdType } from "../components/curriculum-vitae/experience/type";
import { skillsList } from "../components/curriculum-vitae/skills/data";
import { projectsList } from "../components/projects/list";
import type { ProjectIdType } from "../components/projects/project";
import { stackItem } from "../components/stack/data";
import type { StackIdType, StackType } from "../components/stack/stack";
import { timelineElementList } from "../components/timeline/data";
import type { TimelineIdType } from "../components/timeline/types";

export function generateProjectTranslations(lang: "en" | "fr") {
  const projectsTranslations = Object.fromEntries(
    (Object.keys(projectsList) as ProjectIdType[]).map((key) => [
      key,
      {
        name: projectsList[key].name[lang],
        description: projectsList[key].description[lang],
      },
    ])
  );
  return projectsTranslations as Record<ProjectIdType, { name: string; description: string }>;
}

export function generateTimelineTranslations(lang: "en" | "fr") {
  const timelinesTranslations = Object.fromEntries(
    (Object.keys(timelineElementList) as TimelineIdType[]).map((key) => [
      key,
      {
        name: timelineElementList[key].name[lang],
        type: timelineElementList[key].type[lang],
        location: timelineElementList[key].location[lang],
        school: timelineElementList[key].school[lang],
      },
    ])
  );
  return timelinesTranslations as Record<
    TimelineIdType,
    { name: string; location: string; school: string; type: string }
  >;
}

export function generateStackTranslations(lang: "en" | "fr") {
  const stackTranslations = Object.fromEntries(
    (Object.keys(stackItem) as StackIdType[]).map((key) => [
      key,
      {
        description: stackItem[key].description[lang],
        reason: stackItem[key].reason[lang],
        replacement:
          "replacement" in stackItem[key]
            ? ((stackItem[key] as StackType).replacement?.reason[lang] ?? "")
            : "",
      },
    ])
  );
  return stackTranslations as Record<
    keyof typeof stackItem,
    { name: string; description: string; reason: string; replacement: string }
  >;
}

export function generateExperienceTranslations(lang: "en" | "fr") {
  const experienceTranslations = Object.fromEntries(
    (Object.keys(ExperienceList) as ExperienceIdType[]).map((key) => [
      key,
      {
        name: ExperienceList[key].name[lang],
        company: ExperienceList[key].company[lang],
        location: ExperienceList[key].location[lang],
        tasks: {
          "0": ExperienceList[key].tasks[0]?.[lang] || "",
          "1": ExperienceList[key].tasks[1]?.[lang] || "",
          "2": ExperienceList[key].tasks[2]?.[lang] || "",
          "3": ExperienceList[key].tasks[3]?.[lang] || "",
        },
      },
    ])
  );
  return experienceTranslations as Record<
    ExperienceIdType,
    {
      name: string;
      company: string;
      location: string;
      tasks: { "0": string; "1": string; "2": string; "3": string };
    }
  >;
}

export function generateSkillsTranslations(lang: "en" | "fr") {
  const skillsTranslations = Object.fromEntries(
    skillsList.map((skill, index) => [String(index), skill[lang]])
  );
  return skillsTranslations as Record<string, string>;
}
