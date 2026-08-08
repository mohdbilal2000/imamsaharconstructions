import Icon from "./Icon";
import { mapsUrl, telUrl, whatsappUrl } from "@/lib/site";

/**
 * Fixed action bar on phones. Most visitors to a local fabrication site arrive
 * on mobile and want exactly three things: call, WhatsApp, directions.
 */
export default function MobileCallBar() {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-bold tracking-tight transition active:scale-95";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-steel-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="flex divide-x divide-white/10">
        <a href={telUrl()} className={`${item} text-ember-300`}>
          <Icon name="phone" className="size-5" />
          Call Now
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-emerald-300`}
        >
          <Icon name="whatsapp" className="size-5" />
          WhatsApp
        </a>
        <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className={`${item} text-steel-200`}>
          <Icon name="pin" className="size-5" />
          Directions
        </a>
      </div>
    </div>
  );
}
