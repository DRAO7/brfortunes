// app/admin/_components/AdminFeed.tsx
"use client";

import { useState } from "react";
import AddPost from "./AddPost";
import AddPostModal from "./AddPostModal";
import Post from "../../_components/Post";

type DbPost = {
  id: number;
  title: string | null;
  content: string | null;
  avatarUrl: string | null;
  logoUrl: string | null;
  imageUrl: string | null;
};

interface AdminFeedProps {
  dbPost: DbPost | null;
}

export default function AdminFeed({ dbPost }: AdminFeedProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="w-full flex justify-center py-10">
        <div className="w-[859px] flex flex-col gap-10">
          <AddPost onOpenModal={() => setOpenModal(true)} />

          {dbPost && (
            <Post
              author={dbPost.title ?? "Autor desconhecido"}
              company="—"
              avatarUrl={dbPost.avatarUrl ?? "/placeholder-avatar.png"}
              logoUrl={dbPost.logoUrl ?? "/placeholder-logo.png"}
              imageUrl={dbPost.imageUrl ?? "/placeholder-image.png"}
              text={dbPost.content ?? ""}
            />
          )}

          <Post
            author="Alceu Elias Feldmann"
            company="Grupo Fertipar"
            avatarUrl="alceu.png"
            logoUrl="/parana.png"
            imageUrl="/fertipar.png"
            text={`“Setembro é soja no chão”. De Passo Fundo - RS a Vilhena - RO, é iniciada a corrida da Soja. “Fé em Deus e pé na tábua”. 
                    Enquanto os produtores iniciam um ciclo de caixa longo e angustiante, repleto de riscos e variáveis complexas (vento, chuva etc), a Fertipar ganha em todos os cenários. 
                    Os fertilizantes já foram aplicados e as duplicadas já foram emitidas.`}
          />

          <Post
            author="Thiago Camargo Ramos"
            company="Kabum!"
            avatarUrl="tiagoCamargo.png"
            logoUrl="/sp.png"
            imageUrl="/kabum.png"
            text={`Os irmãos Thiago e Leandro Ramos venderam a KaBuM! para a Magalu em 2021 por R$ 3,5 bi (dinheiro + ações). Depois, acusaram Itaú BBA e Magalu de conflito de interesses e prejuízo com a queda das ações. A Magalu os demitiu por justa causa em 2023, alegando concorrência desleal e mau uso de recursos. Eles abriram disputa arbitral para rever a venda, enquanto a Magalu nega irregularidades.
                    Receberam apenas 1bi. Porém já foi o suficente para se locomover com conforto e segurança.`}
          />
        </div>
      </section>

      <AddPostModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
