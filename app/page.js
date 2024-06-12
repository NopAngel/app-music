import Navbar from "@/components/Navbar";
import Card from "@/components/ui/Card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("data").select("*");
  return (
    <main>
      <Navbar />
      <section>
        <SignedOut>
          <section className="xl:max-w-[80%] max-w-screen mx-auto mt-7 p-2 mb-7 bgImg bg-no-repeat flex rounded-xl">
            <section className="mt-6 mb-6 text-3xl font-semibold max-w-[600px] mx-auto text-center">
              <h1>Logueate para Aprovechar más veneficios de esta App.</h1>
            </section>

            <section></section>
          </section>
        </SignedOut>
        <SignedIn>
          <section className="xl:max-w-[80%] max-w-full mx-auto mt-7 p-2 mb-7 bgImg bg-no-repeat flex rounded-xl">
            <h1 className="mt-6 mb-6 text-3xl font-semibold max-w-[600px] mx-auto text-center">
              ¡Bienvenido de Nuevo!
            </h1>
          </section>
        </SignedIn>
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 xl:w-[70%] w-full mx-auto">
          {data.map((index) => (
            <div animate={{ scale: 1, x: 2 }}>
              <Card
                Title={index.title}
                Image={index.image}
                KeyCard={index.id}
                CreatedAt={index.created_at}
                ArtistImg={index.image_artist}
                Artist={index.artist_title}
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
