import React from "react";
import { Spin } from 'antd'
  

const LazyLoader: React.FC<{ onPage?: boolean }> = ({ onPage }) => {
  
  
const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;
  return (
    <>
      <div
      className={`grid place-content-center ${
        onPage ? "h-[60svh]" : "h-[100svh]"
      } `}
    >
        {/* <img src={Logo} alt="" className="w-[50%] mx-auto loader" /> */}
        <Spin tip="Loading" size="small">
        {content}
      </Spin>
      <p className="text-center font-medium text-lg mt-1">Loading...</p>
    </div>
    </>
  );
};

export default LazyLoader;
