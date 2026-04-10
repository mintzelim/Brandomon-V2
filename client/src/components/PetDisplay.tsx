import React from 'react';

interface PetDisplayProps {
  petSvg: string;
  petName: string;
  stageName: string;
  size?: 'small' | 'medium' | 'large';
}

export const PetDisplay: React.FC<PetDisplayProps> = ({
  petSvg,
  petName,
  stageName,
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-40 h-40',
    large: 'w-64 h-64',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-800 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden`}
        dangerouslySetInnerHTML={{ __html: petSvg }}
      />
      <div className="text-center">
        <p className="text-sm font-bold text-gray-200">{petName}</p>
        <p className="text-xs text-gray-400">{stageName}</p>
      </div>
    </div>
  );
};
