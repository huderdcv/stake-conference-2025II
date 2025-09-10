import { JSX } from 'react';

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const FeatureItem = ({ title, description, icon }: Props) => {
  return (
    <div className="feature">
      {icon}
      <p className="feature-title">{title}</p>
      <p className="feature-description">{description}</p>
    </div>
  );
};
