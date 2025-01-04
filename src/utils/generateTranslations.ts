import type { StackIdType, StackType } from "@/components/stack/stack";
import { projectsList } from "../components/projects/list";
import type { ProjectIdType } from "../components/projects/project";
import { stackItem } from "../components/stack/data";
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
