import React from "react";
import { formatDate } from "@utils/dateFormatter";
import Badge from "@components/common/Badge/Badge";
import styles from "./InfoBox.module.css";

export default function InfoBox({ startDate, endDate, learningMode }) {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  return (
    <section className={styles.infoBoxSection}>
      <dl>
        <div>
          <dt>Start date</dt>
          <dd>{formattedStartDate}</dd>
        </div>

        <div>
          <dt>End date</dt>
          <dd>{formattedEndDate}</dd>
        </div>

        <div>
          <dt>Learning mode</dt>
          <dd>
            <Badge type={learningMode} />
          </dd>
        </div>
      </dl>
    </section>
  );
}
