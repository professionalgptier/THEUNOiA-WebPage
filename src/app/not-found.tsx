import Link from "next/link";
import Nav from "@/components/Nav";
import OceanCanvas from "@/components/animation/OceanCanvas";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Footer from "@/components/sections/shared/Footer";
import { ROUTES, THREE_PARTS } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative z-[1]">
        <section className="animated-gradient relative overflow-hidden min-h-[80vh] flex items-center px-[8vw] pt-[150px] pb-[100px] text-ivory">
          <OceanCanvas variant="soft" />
          <div className="relative z-10 max-w-[640px]">
            <Eyebrow>Uncharted waters</Eyebrow>
            <h1 className="font-head text-[clamp(40px,7vw,84px)] font-semibold leading-[1.05] mt-4 mb-6">
              This shore does not exist.
            </h1>
            <p className="text-[18px] opacity-85 leading-[1.65] mb-10">
              The page you were looking for has drifted away.
            </p>
            <Button href={ROUTES.home} variant="primary">
              Back to the surface
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
