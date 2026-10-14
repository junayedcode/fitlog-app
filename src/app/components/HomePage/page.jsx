
import Image from "next/image";
import Heroimg from "../../assets/banner.png";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex min-h-70 items-center justify-between gap-6 rounded-xl border border-[#22252b] bg-[#15171c] px-6 py-6 sm:px-10 md:min-h-90 md:px-12 lg:min-h-100 lg:px-14">
        <div className="flex-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#b9ff00]">
            Workout Library
          </p>

          <h1 className="mb-4 text-3xl leading-tight font-extrabold uppercase text-white sm:text-4xl md:text-5xl">
            Train With Intent. Log
            <br />
            Every Set.
          </h1>

          <p className="mb-5 max-w-md text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a
            lift, lock it into today's plan, and watch the week's
            work add up.
          </p>

          <Link
            href="/work"
            className="btn btn-sm rounded-md border-0 bg-[#b9ff00] px-5 text-xs font-bold uppercase text-black hover:bg-[#a4e600]"
          >
            Browse Workouts
          </Link>
        </div>

        <div className="flex w-[40%] shrink-0 items-center justify-center">
          <Image
            src={Heroimg}
            alt="Workout illustration"
            priority
            className="h-50 w-full max-w-75 object-contain sm:h-62.5 md:h-72.5"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
