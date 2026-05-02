import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pfp from "@/assets/orbeez-pfp.png";
import { Button } from "@/components/ui/button";
import { Star, Users, Briefcase, MessageSquare, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbeez — Staffing & Community Management" },
      {
        name: "description",
        content:
          "Orbeez — 15-year-old staffing, moderation and community management specialist for Minecraft and Roblox servers.",
      },
      { property: "og:title", content: "Orbeez — Staffing & Community Management" },
      {
        property: "og:description",
        content: "Paid staffing and management for Minecraft and Roblox communities.",
      },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    platform: "Minecraft",
    server: "Boxmc",
    duration: "1 month",
    role: "Helper",
    members: "4k members",
  },
  {
    platform: "Minecraft",
    server: "Kingsmp",
    duration: "3 months",
    role: "Helper / Moderator",
    members: "1k members",
  },
];

const reviews = [
  {
    name: "Buttercream_fp",
    relation: "Co-worker",
    rating: 9.25,
    text: "Taught me a lot about what I know and how to moderate, a good guy.",
  },
  {
    name: "Rewxndzz",
    relation: "Community member",
    rating: 10,
    text: "Great staff, helped a lot and was very nice!",
  },
];

function Index() {
  const [tab, setTab] = useState<"bio" | "experience" | "reviews">("bio");

  const scrollTo = (id: string, t: typeof tab) => {
    setTab(t);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* HERO */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-12 text-center md:pt-24">
        <div
          className="relative mb-8"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "var(--gradient-hero)", opacity: 0.6 }}
          />
          <img
            src={pfp}
            alt="Orbeez profile picture"
            width={192}
            height={192}
            className="relative h-40 w-40 rounded-full border-4 object-cover md:h-48 md:w-48"
            style={{
              borderColor: "oklch(0.7 0.27 320 / 0.6)",
              animation: "glow-pulse 4s ease-in-out infinite",
            }}
          />
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Hey there, I'm
        </p>
        <h1
          className="mb-4 text-6xl font-bold md:text-8xl"
          style={{
            background: "var(--gradient-hero)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Orbeez
        </h1>
        <p className="mb-2 max-w-xl text-lg text-foreground/90 md:text-xl">
          15 y/o · Staffing, Community Management & Ownership
        </p>
        <p className="mb-8 max-w-xl text-sm text-muted-foreground md:text-base">
          Minecraft & Roblox · Paid services
        </p>

        {/* Section nav buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant={tab === "bio" ? "default" : "secondary"}
            onClick={() => scrollTo("bio", "bio")}
            className="gap-2"
          >
            <Users className="h-4 w-4" /> Bio
          </Button>
          <Button
            size="lg"
            variant={tab === "experience" ? "default" : "secondary"}
            onClick={() => scrollTo("experience", "experience")}
            className="gap-2"
          >
            <Briefcase className="h-4 w-4" /> Experience
          </Button>
          <Button
            size="lg"
            variant={tab === "reviews" ? "default" : "secondary"}
            onClick={() => scrollTo("reviews", "reviews")}
            className="gap-2"
          >
            <Star className="h-4 w-4" /> Reviews
          </Button>
        </div>
      </section>

      {/* BIO */}
      <Section id="bio" title="Bio" icon={<Users className="h-5 w-5" />}>
        <div
          className="rounded-3xl border p-8 backdrop-blur-sm md:p-10"
          style={{
            backgroundColor: "oklch(0.22 0.06 290 / 0.6)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            Hey there, I'm <span className="font-semibold text-primary">Orbeez!</span> I'm{" "}
            <span className="font-semibold text-accent">15 years old</span> and I'm great at
            staffing, community management and ownership.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            I only do staffing and management on{" "}
            <span className="font-medium text-foreground">Minecraft</span> and{" "}
            <span className="font-medium text-foreground">Roblox</span> — paid, of course.
          </p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" icon={<Briefcase className="h-5 w-5" />}>
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((e) => (
            <div
              key={e.server}
              className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "oklch(0.22 0.06 290 / 0.7)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {e.platform}
                </span>
                <span className="text-xs text-muted-foreground">{e.duration}</span>
              </div>
              <h3 className="mb-1 text-2xl font-bold">{e.server}</h3>
              <p className="mb-3 text-sm text-accent">{e.role}</p>
              <p className="text-sm text-muted-foreground">{e.members}</p>
            </div>
          ))}
          <div
            className="rounded-2xl border-2 border-dashed p-6 md:col-span-2"
            style={{ borderColor: "oklch(0.78 0.22 200 / 0.4)" }}
          >
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold text-accent">No Roblox experience yet</span> — but I
              can assure you I'm great at it.
            </p>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" title="Reviews" icon={<Star className="h-5 w-5" />}>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "oklch(0.22 0.06 290 / 0.7)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const fillRatio = Math.max(0, Math.min(1, r.rating / 2 - i));
                  return (
                    <div key={i} className="relative h-5 w-5">
                      <Star className="absolute inset-0 h-5 w-5 text-muted-foreground/30" />
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${fillRatio * 100}%` }}
                      >
                        <Star className="h-5 w-5 fill-accent text-accent" />
                      </div>
                    </div>
                  );
                })}
                <span className="ml-2 text-sm font-semibold text-accent">
                  {r.rating}/10
                </span>
              </div>
              <p className="mb-4 text-base italic text-foreground/90">"{r.text}"</p>
              <div className="border-t pt-3" style={{ borderColor: "oklch(0.35 0.08 290 / 0.3)" }}>
                <p className="font-semibold text-primary">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {r.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Many other reviews lost with my old Discord account.
        </p>
      </Section>

      {/* DISCORD CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <div
          className="relative overflow-hidden rounded-3xl border p-10 text-center"
          style={{
            background: "var(--gradient-hero)",
            boxShadow: "var(--shadow-neon)",
          }}
        >
          <MessageSquare className="mx-auto mb-4 h-10 w-10 text-primary-foreground" />
          <h2 className="mb-3 text-3xl font-bold text-primary-foreground md:text-4xl">
            Let's work together
          </h2>
          <p className="mb-6 text-primary-foreground/85">
            Hop in my Discord to chat about staffing your server.
          </p>
          <a
            href="https://discord.gg/tcttj57spK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground transition-transform hover:scale-105"
          >
            Join Discord <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Orbeez · Built with passion
      </footer>
    </main>
  );
}

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12 md:py-16"
      style={{ animation: "fade-up 0.8s ease both" }}
    >
      <div className="mb-8 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="text-primary-foreground">{icon}</div>
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
