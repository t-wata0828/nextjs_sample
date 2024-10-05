import React from "react";

type AboutHeaderProps = {
  title: string;
  description: string;
  count: number;
  reset: () => void;
};

const AboutHeader: React.FC<AboutHeaderProps> = ({
  title,
  description,
  count,
  reset,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <br />
      <p>カウント: {count}</p>
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default AboutHeader;