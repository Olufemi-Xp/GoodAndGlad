import { videos } from "../content/site";

export default function VideoShowcase() {
  if (videos.length === 0) return null;
  return (
    <section className="video-section section-wrap" id="video" aria-labelledby="video-title">
      <div className="video-copy">
        <p className="eyebrow">A closer look</p>
        <h2 id="video-title">A little luxury,<br /><em>in motion.</em></h2>
        <p>Pause for a moment of beauty. Our short film captures the pleasure of choosing a scent that feels like you.</p>
        <span className="video-credit">{videos[0].credit}</span>
      </div>
      <div className="video-frame">
        <video controls preload="metadata" playsInline aria-label={videos[0].title}>
          <source src={videos[0].src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <span className="video-frame__label">{videos[0].title}</span>
      </div>
    </section>
  );
}
