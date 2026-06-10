import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Reveal } from "@/components/Reveal";
import { Poster } from "@/components/Poster";
import { ScrollProgress } from "@/components/ScrollProgress";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <ScrollProgress />
      <Link
        href="/work"
        className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-[var(--teal)] transition mb-12"
      >
        ← Back to work
      </Link>

      <Reveal>
        <header className="mb-12">
          <Poster
            slug={project.slug}
            title={project.title}
            category={project.category}
            aspect="wide"
            className="mb-10"
            image={project.image}
          />
          <div className="flex flex-wrap gap-3 text-sm text-foreground/50 mb-4">
            <span>{project.year}</span>
            <span>·</span>
            <span className="text-[var(--teal)]">{project.category}</span>
            {project.client && (
              <>
                <span>·</span>
                <span>{project.client}</span>
              </>
            )}
          </div>
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-foreground/70">{project.summary}</p>
        </header>
      </Reveal>

      <div className="grid gap-12 sm:grid-cols-3">
        <Reveal as="div" delay={100} className="sm:col-span-1 space-y-6 text-sm">
          <Meta label="Role" value={project.role} />
          {project.client && <Meta label="Client" value={project.client} />}
          <Meta label="Category" value={project.category} />
          <Meta label="Year" value={String(project.year)} />
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground underline-grow transition"
            >
              {l.label} ↗
            </a>
          ))}
        </Reveal>

        <div className="sm:col-span-2 space-y-10">
          <Reveal delay={160}>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </Reveal>

          {project.gallery && project.gallery.length > 0 && (
            <Reveal as="section" delay={200}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((g) => (
                  <div
                    key={g.src}
                    className="relative aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted-bg)]"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {project.tracks && project.tracks.length > 0 && (
            <Reveal as="section" delay={220}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Tracks
              </h2>
              <AudioPlayer tracks={project.tracks} />
            </Reveal>
          )}

          {project.spotifyAlbumId && (
            <Reveal as="section" delay={280}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Listen on Spotify
              </h2>
              <SpotifyEmbed type="album" id={project.spotifyAlbumId} />
            </Reveal>
          )}

          {project.spotifyArtistId && (
            <Reveal as="section" delay={280}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Listen on Spotify
              </h2>
              <SpotifyEmbed type="artist" id={project.spotifyArtistId} />
            </Reveal>
          )}

          {project.spotifyPlaylistId && (
            <Reveal as="section" delay={340}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Playlist
              </h2>
              <SpotifyEmbed
                type="playlist"
                id={project.spotifyPlaylistId}
              />
            </Reveal>
          )}
        </div>
      </div>

      <nav className="mt-24 border-t border-[var(--border)] pt-8 flex items-center justify-between">
        <span className="text-sm text-foreground/50">Next project</span>
        <Link
          href={`/work/${next.slug}`}
          className="font-display text-2xl tracking-tight inline-flex items-center gap-2 group"
        >
          {next.title}
          <span className="transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </nav>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-foreground/40 uppercase tracking-[0.18em] text-xs mb-1">
        {label}
      </div>
      <div className="text-foreground/80">{value}</div>
    </div>
  );
}
