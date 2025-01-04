import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <main className="relative w-full max-w-[800px] aspect-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/gem-luminscence.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </main>
    </div>
  );
}
