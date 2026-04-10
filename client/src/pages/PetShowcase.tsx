import React from 'react';
import { PetDisplay } from '@/components/PetDisplay';
import { EXAMPLE_PETS } from '@/lib/petSprites';

export default function PetShowcase() {
  const meemee = EXAMPLE_PETS.meemee;
  const kokleong = EXAMPLE_PETS.kokleong;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-2 font-mono">
          Pixel Pet Evolution Showcase
        </h1>
        <p className="text-center text-gray-300 mb-12 font-mono text-sm">
          SVG-based pixel art with animations • Stage 0-8 evolution
        </p>

        {/* Fire Dragon Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-orange-400 mb-8 font-mono">
            🔥 {meemee.petName} (Fire Dragon - Designer Pet)
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Color palettes, brush strokes, and design elements throughout evolution
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {meemee.svgs.map((svg, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 border-2 border-orange-600 bg-gray-950 rounded flex items-center justify-center mb-2 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                <p className="text-xs text-center text-gray-400 font-mono">
                  {meemee.stageNames[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ice Phoenix Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-400 mb-8 font-mono">
            ❄️ {kokleong.petName} (Ice Phoenix - Designer Pet)
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Geometric precision patterns and elegant design elements throughout evolution
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {kokleong.svgs.map((svg: string, index: number) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 border-2 border-blue-600 bg-gray-950 rounded flex items-center justify-center mb-2 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                <p className="text-xs text-center text-gray-400 font-mono">
                  {kokleong.stageNames[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animation Info */}
        <div className="bg-gray-800 border-2 border-gray-700 rounded p-6 mt-12">
          <h3 className="text-lg font-bold text-white mb-3 font-mono">✨ Animation Features</h3>
          <ul className="text-gray-300 text-sm space-y-2 font-mono">
            <li>✓ Idle bobbing animations (slow, medium, fast)</li>
            <li>✓ Glow effects (gold, cosmic purple/pink)</li>
            <li>✓ Evolution stage transitions</li>
            <li>✓ Legendary and Cosmic form special effects</li>
            <li>✓ Pixel-perfect SVG rendering</li>
            <li>✓ Role-based thematic details (design & writing elements)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
