import React from "react";

const EmptyFeedback: React.FC = () => (
  <div className="empty-feedback">
    <img src="/empty-state.png" alt="No data available" />
    <p>No businesses available in the visible area.</p>
  </div>
);

export default EmptyFeedback;
