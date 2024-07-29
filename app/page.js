import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-medium">
          <h1 className="text-6xl font-bold text-primary">GPTravel</h1>
          <p className="py-6 text-lg leading-loose">
            GPTravel: Your AI-powered guide for personalized travel and tour
            recommendations.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
