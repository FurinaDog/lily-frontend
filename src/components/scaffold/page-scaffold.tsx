import type { RouteScaffold } from "@/types/site";
import { scaffoldMessages } from "@/config/messages";

type PageScaffoldProps = {
  readonly route: RouteScaffold;
  readonly dynamicLabel?: string;
};

export function PageScaffold({ route, dynamicLabel }: PageScaffoldProps) {
  return (
    <main className="surface rounded-[1.75rem] p-8 sm:p-10">
      <p className="eyebrow text-[var(--color-accent)]">{route.section}</p>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">{route.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            {route.purpose}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel-muted)] px-4 py-3 font-mono text-sm text-[var(--color-muted)]">
          {dynamicLabel ?? route.path}
        </div>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel-muted)] p-6">
          <h2 className="text-xl font-semibold">
            {scaffoldMessages.pageScaffold.implementationNote}
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            {scaffoldMessages.pageScaffold.implementationGuidance}
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            {route.figmaScope}
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel-muted)] p-6">
          <h2 className="text-xl font-semibold">
            {scaffoldMessages.pageScaffold.issueSlices}
          </h2>
          <ul className="mt-4 grid gap-3">
            {route.implementationAreas.map((area) => (
              <li
                key={area}
                className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-muted)]"
              >
                {area}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
