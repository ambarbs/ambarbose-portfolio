import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';

function publicAssetExists(path: string) {
  return existsSync(join(process.cwd(), 'public', path.replace(/^\//, '')));
}

export function ProjectVisual({
  name,
  image,
  status,
}: {
  name: string;
  image: string;
  status: string;
}) {
  if (publicAssetExists(image)) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
        <Image
          src={image}
          alt={`${name} screenshot`}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg border border-slate-200 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(135deg,#f8fafc,#eef6ff)] p-5">
      <div className="flex h-full flex-col justify-between rounded-md border border-white/80 bg-white/75 p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl font-semibold text-slate-950">{name}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Portfolio project preview
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700 sm:px-3">
            {status}
          </span>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] gap-4">
          <div className="space-y-2.5">
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 w-5/6 rounded-full bg-sky-100" />
            <div className="h-2 w-2/3 rounded-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-slate-100 bg-slate-50" />
            <div className="rounded-md border border-sky-100 bg-sky-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
