import Image from "next/image";
import rogersArena from '@/public/rogers_arena.jpg';
import nhlLogo from '@/public/NHL.svg';
import { fugaz } from "./fonts";
import Button from "./components/site-button";
import { checkCookiesAccepted, cookiesAccepted, setHighScoreCookie } from "./data/cookies";
import CookiesPopup from "./components/cookies-popup";

export default async function Home() {
  const cookies = await checkCookiesAccepted();

  const handleCookies = async (input: boolean) => {
    'use server';
    if (input) {
      await cookiesAccepted();
      await setHighScoreCookie(0);
    } else return;
  }

  return (
    <main className="min-h-screen">
      <div className="absolute top-0 h-screen w-full overflow-hidden">
        <Image src={rogersArena} alt="Rogers Arena" className="h-full w-full object-cover" />
        <div className="absolute h-full w-full top-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-screen w-full flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className={`${fugaz.className} w-min flex items-center justify-center gap-2 text-2xl md:scale-150`}>
          <h1 className="text-sec">HIGHER</h1>
          <Image src={nhlLogo} alt="NHL logo" width={75} height={75} />
          <h1 className="text-red-500">LOWER</h1>
        </div>
        <div className="text-center px-8">
          <h2 className="mb-4 text-lg">Who has better stats?</h2>
          <p>A clone of the popular Higher Lower game by Gabritrav01 that uses NHL player stats from the NHL API. The player list is updated before and after every season.</p>
        </div>
        <div className="w-1/2 flex flex-col md:flex-row gap-4">
          <Button variant="contained" href="/game?gameMode=points">POINTS</Button>
          <Button variant="contained" href="/game?gameMode=goals">GOALS</Button>
          <Button variant="contained" href="/game?gameMode=assists">ASSISTS</Button>
        </div>
      </div>
      {!cookies && <CookiesPopup clickFn={handleCookies} />}
    </main>
  );
}
