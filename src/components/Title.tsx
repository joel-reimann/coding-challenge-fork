import React from 'react';

function Title({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Title;
