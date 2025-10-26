import React from "react";
import { Link } from "react-router-dom";
import { getTypeLabel } from "@utils/componentTypeUtils";
import styles from "./ComponentTile.module.css";
import ComponentImage from "@/components/common/ComponentImage/ComponentImage/ComponentImage";
import Badge from "@components/common/Badge/Badge";
import ProgressIndicator from "@components/common/ProgressIndicator/ProgressIndicator";
import { getSlugFromName } from "@utils/componentDataLoader";

function ComponentTile({ image, name, subtitle, type, progress }) {
  const typeLabel = getTypeLabel(type);
  const slug = getSlugFromName(name);
  return (
    <Link
      to={`/component/${slug}`}
      className={styles.tileComponent}
      state={{ progress }}
      aria-label={`View details for ${name} a ${typeLabel} with ${progress}% progress`}
    >
      <ComponentImage src={image} alt={`${name} course thumbnail`} />

      <div className={styles.tileDetails}>
        <h3 className={styles.tileTitle}>{name}</h3>
        <p className={styles.tileSubtitle}>{subtitle}</p>
        <Badge type={type} />
      </div>
      <ProgressIndicator progress={progress} variant="circular" />
    </Link>
  );
}

export default React.memo(ComponentTile);
