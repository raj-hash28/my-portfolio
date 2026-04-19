"use client";

import { useState } from 'react';

export default function AIPredictor() {
  const [experience, setExperience] = useState(5);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ years_experience: experience }),
      });
      
      const data = await response.json();
      setPrediction(data.predicted_salary);
    } catch (error) {
      console.error("Failed to fetch prediction", error);
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Live AI <span className="text-emerald-400">Demo</span>
        </h2>
        <p className="text-slate-400 mb-10">
          Test out my Salary Prediction API in real-time. Adjust the years of experience below.
        </p>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
          <label className="block text-lg font-medium text-slate-300 mb-4">
            Years of Experience: <span className="text-emerald-400 font-bold">{experience}</span>
          </label>
          
          <input 
            type="range" 
            min="0" 
            max="30" 
            step="0.5"
            value={experience}
            onChange={(e) => setExperience(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-8"
          />

          <button 
            onClick={handlePredict}
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {loading ? "Running Model..." : "Predict Salary"}
          </button>

          {prediction !== null && (
            <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-emerald-500/30">
              <p className="text-slate-400 text-sm mb-1">AI Prediction</p>
              <p className="text-4xl font-bold text-emerald-400">
                ${prediction.toLocaleString()}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}