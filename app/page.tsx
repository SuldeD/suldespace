import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono flex items-center justify-center relative">
      <div className="absolute top-6 right-6 w-36 h-36 sm:w-48 sm:h-48 ">
        <Image
          src="/seo.png"
          alt="Profile picture"
          width={192}
          height={192}
          className="object-cover brightness-50 contrast-200 sepia-[0.8]"
          priority
        />
      </div>

      <div className="max-w-[32rem] w-full text-sm [&>p]:text-xs [&>p]:text-[#909090] [&_a]:text-xs [&_a]:text-[#909090]">
        <h1 className="font-normal mb-2">
          munkhsuld bayaraa<span className="caret">_</span>
        </h1>
        <p className="mb-4">suldespace</p>

        <div className="mb-8"></div>

        <h2 className="font-normal mb-2">today</h2>
        <p className="mb-8">
          i&apos;m the co-founder at{" "}
          <Link
            href="https://ghorde.com"
            className="text-[#909090]"
            target="_blank"
            rel="noopener noreferrer"
          >
            ghorde
          </Link>
          , making cool stuff that performs. Our team is passionate about
          creating innovative solutions and explores cutting-edge technologies
          to turn ambitious visions into reality.
        </p>

        <h2 className="font-normal mb-2">interests</h2>
        <p className="mb-8">
          Front-end Development, Design Systems, and the future of the web3.
        </p>

        <h2 className="font-normal mb-2">previously</h2>
        <p className="mb-8"> - infinite solutions, software engineer.</p>

        <h2 className="font-normal mb-2">hobbies</h2>
        <ul className="list-none p-0 space-y-1 mb-8">
          {[
            { href: "https://nextjs.org", text: "next.js" },
            { href: "https://vercel.com", text: "vercel" },
            { href: "https://ui.shadcn.com", text: "shadcn/ui" },
            { href: "https://v0.dev/", text: "v0.dev" },
          ].map((investment, index) => (
            <li key={index}>
              <Link
                href={investment.href}
                className="text-[#909090]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {investment.text}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="font-normal mb-2">connect</h2>
        <p className="mb-8">
          reach me at{" "}
          <a href="mailto:sulde.dev@gmail.com" className="text-[#909090]">
            sulde.dev@gmail.com
          </a>{" "}
          or follow my work on{" "}
          <Link
            href="https://github.com/SuldeD"
            className="text-[#909090] text-[0.85rem]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          .
        </p>

        <div className="text-left text-[#909090] mt-8 mb-4">[***]</div>

        <blockquote className="text-xs text-[#909090] italic">
          &quot;the reason to finish is to start something new.&quot; — rick
          rubin
        </blockquote>
      </div>
    </div>
  );
}
