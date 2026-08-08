import Icon from "./Icon";
import { mapsUrl, telUrl, whatsappUrl } from "@/lib/site";

/**
 * Fixed action bar on phones. Most visitors to a local fabrication site arrive
 * on mobile and want exactly three things: call, WhatsApp, directions.
 */
export default function MobileCallBar() {
  const item =
    "label flex flex-1 flex-col items-center justify-center gap-1.5 py-3 text-[9px] transition active:opacity-70";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px bg-white/15 pb-[env(safe-area-inset-bottom)] md:hidden">
      <a href={telUrl()} className={`${item} bg-rust text-white`}>
        <Icon name="phone" className="size-5" />
        Call now
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} bg-ink text-white`}
      >
        <Icon name="whatsapp" className="size-5" />
        WhatsApp
      </a>
      <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className={`${item} bg-ink text-white`}>
        <Icon name="pin" className="size-5" />
        Directions
      </a>
    </div>
  );
}
