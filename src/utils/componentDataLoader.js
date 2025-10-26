import reactFundamentals from "@data/components/react-fundamentals.json";
import fullstackPath from "@data/components/fullstack-developer-path.json";
import uxVsUi from "@data/components/ux-vs-ui.json";
import uiDesign from "@data/components/ui-design-principles.json";
import dataViz from "@data/components/data-visualization.json";
import agile from "@data/components/agile-management.json";
import accessibility from "@data/components/accessibility.json";
import leadership from "@data/components/leadership-essentials.json";
import css from "@data/components/modern-css.json";
import python from "@data/components/intro-to-python.json";
import communication from "@data/components/communication-skills.json";
import timeManagement from "@data/components/time-management.json";
import healthyHabits from "@data/components/healthy-habits.json";
import { slugify } from "@utils/slugify.js";

const componentDataMap = {
  1: reactFundamentals,
  2: fullstackPath,
  3: uxVsUi,
  4: uiDesign,
  5: dataViz,
  6: agile,
  7: accessibility,
  8: leadership,
  9: css,
  10: python,
  11: communication,
  12: timeManagement,
  13: healthyHabits,
};

const slugToIdMap = {
  "react-fundamentals": 1,
  "full-stack-developer-path": 2,
  "microlearning-ux-vs-ui": 3,
  "ui-design-principles": 4,
  "introduction-to-data-visualization": 5,
  "agile-project-management": 6,
  "building-accessible-web-apps": 7,
  "leadership-essentials": 8,
  "modern-css-techniques": 9,
  "introduction-to-python": 10,
  "communication-skills-for-teams": 11,
  "time-management-workshop": 12,
  "healthy-habits-challenge": 13,
};

export function getComponentDataById(id) {
  const data = componentDataMap[id];

  if (!data) {
    throw new Error(`Component with ID ${id} not found`);
  }

  return data;
}

export function getComponentDataBySlug(slug) {
  const id = slugToIdMap[slug];
  if (!id) {
    throw new Error(`Component with slug "${slug}" not found`);
  }

  return getComponentDataById(id);
}

export function getSlugFromName(name) {
  return slugify(name);
}
