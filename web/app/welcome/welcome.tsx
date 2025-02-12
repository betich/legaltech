export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 text-black">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-2xl text-black font-semibold">Legaltech</h1>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 space-y-4">
            <p className="leading-6 text-gray-700 text-center">
              What&apos;s next?
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "/matcher",
    text: "Matcher",
    icon: <></>,
  },
  {
    href: "/evidence",
    text: "Evidence",
    icon: <></>,
  },
];
