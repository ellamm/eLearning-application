const TYPE_LABELS = {
  COURSE: "Course",
  LEARNING_PATH: "Learning Path",
  MEDIA_ITEM: "Media",
  Course: "Course",
  "Learning Path": "Learning Path",
  "Media Item": "Media",
};

const TYPE_CLASSES = {
  COURSE: "typeCourse",
  LEARNING_PATH: "typeLearningPath",
  MEDIA_ITEM: "typeMediaItem",
  Course: "typeCourse",
  "Learning Path": "typeLearningPath",
  "Media Item": "typeMediaItem",
};

export const getTypeLabel = (type) => {
  return TYPE_LABELS[type] || type;
};

export const getTypeClassName = (type) => {
  return TYPE_CLASSES[type] || "typeCourse";
};
