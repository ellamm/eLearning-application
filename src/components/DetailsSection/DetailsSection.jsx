import React from "react";

export default function DetailsSection({ data }) {
  return (
    <section aria-labelledby="description-heading">
      <h2 id="description-heading" className="srOnly">
        Course Details
      </h2>
      <dl>
        {data.map((item) => (
          <div key={item.name}>
            <dt>{item.name}</dt>
            <dd>{item.content}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
