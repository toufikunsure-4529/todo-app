import React from "react";

const NoticeComponent = ({ notice }) => {
  return (
    <div className="bg-yellow-200 border-l-4 border-yellow-400 px-4 py-3 rounded mb-4">
      <p className="text-yellow-800 font-bold">Notice:</p>
      <p className="text-gray-800">{notice}</p>
    </div>
  );
};

export default NoticeComponent;
