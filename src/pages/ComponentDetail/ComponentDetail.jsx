import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import styles from "./ComponentDetail.module.css";
import { useComponentData } from "@hooks/useComponentData";
import ComponentHeader from "@components/ComponentHeader/ComponentHeader";
import DetailsSection from "@components/DetailsSection/DetailsSection";
import InfoPanel from "@components/InfoPanel/InfoPanel";
import ComponentImage from "@/components/common/ComponentImage/ComponentImage";
import BackButton from "@/components/common/Buttons/BackButton";
import ProgressIndicator from "@components/common/ProgressIndicator/ProgressIndicator";

export default function ComponentDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const progress = location.state?.progress;

  const { componentData, loading, error } = useComponentData(slug);
  if (loading) {
    return (
      <main className={styles.detailPage}>
        <p>Loading...</p>
      </main>
    );
  }

  if (error) {
    return <Navigate to="*" replace />;
  }

  if (!componentData) {
    return <Navigate to="*" replace />;
  }

  return (
    <>
      <main className={styles.detailPage}>
        <BackButton />
        <div className={styles.contentHeaderGrid}>
          <div className={styles.leftColumn}>
            <ComponentHeader
              name={componentData.name}
              startDate={componentData.startDate}
              endDate={componentData.endDate}
            />

            {progress !== undefined && (
              <ProgressIndicator progress={progress} />
            )}

            <h2 className={styles.sectionTitle}>Description</h2>
          </div>
          {componentData.image && (
            <ComponentImage
              src={componentData.image}
              alt={`${componentData.name} course cover image`}
              size="large"
            />
          )}
        </div>

        <div className={styles.contentGrid}>
          <DetailsSection data={componentData.description_data} />
          <InfoPanel
            startDate={componentData.startDate}
            endDate={componentData.endDate}
            learningMode={componentData.learningForm}
            componentName={componentData.name}
          />
        </div>
      </main>
    </>
  );
}
