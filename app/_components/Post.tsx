"use client";

interface PostProps {
  author: string;
  company: string;
  text: string;
  imageUrl: string;
  avatarUrl: string;
  logoUrl: string;
}

export default function Post({
  author,
  company,
  text,
  imageUrl,
  avatarUrl,
  logoUrl,
}: PostProps) {
  return (
    <div className="w-[859px] p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-[5px] bg-white">
      {/* HEADER */}
      <div className="w-full flex items-center gap-4">
        {/* Avatar */}
        <img
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          src={avatarUrl}
          alt={`${author} profile`}
        />

        {/* Text info */}
        <div className="flex flex-col justify-start items-start flex-1 min-w-0">
          {/* Row: name + dot + seguir + logo */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-black text-base font-semibold leading-5 tracking-tight whitespace-nowrap">
              {author}
            </span>
            <div className="w-[5px] h-[5px] bg-neutral-600 rounded-full" />
            <span className="text-sky-500 text-base font-semibold leading-5 cursor-pointer whitespace-nowrap">
              Seguir
            </span>
            <img
              className="w-10 h-7 object-contain ml-2 flex-shrink-0"
              src={logoUrl}
              alt="company logo"
            />
          </div>

          {/* Company */}
          <span className="text-black/70 text-base font-normal leading-5 tracking-tight break-words">
            {company}
          </span>
        </div>
      </div>

      {/* TEXT */}
      <div className="w-full p-2.5">
        <p className="text-black text-base font-medium leading-6 tracking-tight break-words whitespace-pre-line">
          {text}
        </p>
      </div>

      {/* IMAGE */}
      <div className="self-stretch p-2.5 flex flex-col justify-start items-start">
        <img
          className="w-full max-h-[546px] object-cover rounded-[6px]"
          src={imageUrl}
          alt="post content"
        />
      </div>
    </div>
  );
}
