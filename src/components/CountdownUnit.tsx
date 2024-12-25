'use client'

interface CountdownUnitProps {
  value: number;
  label: string;
}

export default function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="text-4xl font-bold text-red-600 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}