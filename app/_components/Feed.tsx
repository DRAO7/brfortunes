"use client";

import Post from "./Post";

export default function Feed() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[859px] flex flex-col gap-10">
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
  );
}
