import React from 'react';
import Sidebar from "../Components/Sidebar";
 // Optional, if you want to style Pdfs separately

const Pdfs = () => {
  return (
    <div className="app-container">
      <Sidebar />
        <div className="content-area">
          <h2 className="page-title">📄 PDF Resources</h2>
          <p>Here you can access and manage your course PDFs.</p>
        </div>
      </div>
  );
};

export default Pdfs;
