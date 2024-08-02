import React from 'react';

const Expand = ({ children, title, isOpen, onToggleText }) => {
  const iconClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggleText}>
          <i className={iconClass}></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

export default Expand;
