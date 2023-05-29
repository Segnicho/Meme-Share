"use client"
import { useFetchMemesQuery } from "@/features/memeSlice";
import MemeCard from "@/components/MemeCard";
import Loading from "@/components/Loading";
import NotFound from "@/public/img/404.jpg";
import Image from "next/image";

export default function Home() {
  const { data: memes, isLoading, isError } = useFetchMemesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div>
        <Image src={NotFound} alt="not found" className="w-full h-screen" />
      </div>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-center font-bold">Hello there</h1>
      {memes && (
        <div className="flex justify-center items-center gap-2 flex-col">
          {memes.map((meme) => (
            <MemeCard key={meme._id} photo={meme.photo!} tags={meme.tags!} />
          ))}
        </div>
      )}
    </main>
  );
}
