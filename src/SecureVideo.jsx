import React from "react";

const SecureVideo = ({ src, title, description, tools }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-2xl shadow-md hover:bg-zinc-700 transition-colors">
      {/* Video aman */}
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-xl"
        onContextMenu={(e) => e.preventDefault()}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
      />

      {/* Info video */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm opacity-70 mb-3">{description}</p>

        {/* Tag tools */}
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-zinc-700 text-xs px-3 py-1 rounded-md"
              >
                #{tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecureVideo;
