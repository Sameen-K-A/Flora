import { Marquee } from "@/components/ui/marquee"

export default function WelcomeMarquee() {
  return (
    <Marquee
      pauseOnHover={true}
      className="bg-black text-background text-xs py-1"
    >
      <span className="mx-6">
        Welcome to <strong>Flora</strong> — Your one-stop multipurpose shopping destination!
      </span>
      <span className="mx-6">
        Shop all products with a <strong>minimum 15% OFF</strong> — Grab your favorites now!
      </span>
      <span className="mx-6">
        Fast delivery • Great deals • Endless variety — Only on <strong>Flora</strong>!
      </span>
    </Marquee>
  )
}