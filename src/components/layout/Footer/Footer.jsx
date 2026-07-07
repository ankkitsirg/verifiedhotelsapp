import { APP } from "@/constants/app";
import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/constants/footer";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white">
            {APP.name}
          </h2>

          <p className="mt-4 max-w-md leading-7">
            StayTrue helps travelers discover hotels through
            verified reviews, authentic guest photos and our
            AI-powered Reality Score.
          </p>

          <div className="mt-6 flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3">
            {FOOTER_LINKS.company.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Support
          </h3>

          <ul className="space-y-3">
            {FOOTER_LINKS.support.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Discover
          </h3>

          <ul className="space-y-3">
            {FOOTER_LINKS.discover.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} {APP.name}. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;