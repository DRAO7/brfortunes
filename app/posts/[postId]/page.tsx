// app/posts/[postId]/page.tsx

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  return (
    // full viewport, scrollable horizontally if needed
    <div className="min-h-screen w-full bg-white overflow-auto relative">
      {/* badge just to prove routing */}
      <div className="fixed top-4 left-4 z-50 bg-black text-white px-3 py-1 rounded text-sm">
        Post Id: {postId}
      </div>

      {/* scaler: 0.75 makes 1024px -> 768px (fits laptop) */}
      <div className="w-[2666px] h-[1024px] origin-top-left scale-[0.75] md:scale-[0.75] lg:scale-[0.75] relative bg-white overflow-hidden mx-auto">
        {/* your whole absolute layout from before */}
        <div className="w-80 h-48 px-1 py-12 left-[187px] top-[74.39px] absolute origin-top-left -rotate-7 bg-black inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start">
            <span className="text-neutral-50 text-3xl font-normal font-['Lora'] tracking-[3.20px]">
              KABUM x MAGALU
              <br />
            </span>
            <span className="text-neutral-50 text-3xl font-normal font-['Lora'] leading-10 tracking-[3px]">
              TRANSAÇÃO
              <br />
            </span>
            <span className="text-neutral-50 text-3xl font-normal font-['Lora'] tracking-[3.20px]">
              COMPLICADA
            </span>
          </div>
        </div>

        <div className="left-[1240px] top-[146px] absolute justify-start text-neutral-400 text-xs font-semibold font-['Poppins'] leading-4">
          2022
        </div>
        <div className="left-[1310px] top-[146px] absolute justify-start text-neutral-400 text-xs font-semibold font-['Poppins'] leading-4">
          2021
        </div>

        <div className="w-32 h-11 left-[976px] top-[174px] absolute">
          <div className="left-[20.51px] top-0 absolute justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-6">
            Receita Operacional
            <br />
            Líquida
          </div>
          <div className="w-80 h-0 left-0 top-[52px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-200" />
        </div>

        <div className="w-24 h-6 left-[1176px] top-[186px] absolute text-right justify-start text-indigo-800 text-base font-semibold font-['Poppins'] leading-6">
          + R$3.3bi
        </div>
        <div className="w-44 h-7 left-[1367px] top-[746px] absolute text-right justify-start text-indigo-800 text-3xl font-semibold font-['Poppins'] leading-6">
          + R$3.3bi
        </div>
        <div className="w-24 h-6 left-[1258px] top-[186px] absolute text-right justify-start text-indigo-800 text-base font-semibold font-['Poppins'] leading-6">
          + R$3.3bi
        </div>

        <div className="w-80 h-56 left-[1441px] top-[187px] absolute">
          <div className="w-60 h-40 left-[31.18px] top-[57px] absolute bg-indigo-700 rounded-[10px] shadow-[0px_4px_30px_0px_rgba(54,41,183,0.07)]" />
          <div className="w-64 h-44 left-[18.90px] top-[35px] absolute bg-rose-500 rounded-[10px] shadow-[0px_4px_30px_0px_rgba(54,41,183,0.07)]" />
          <div className="w-80 h-52 left-0 top-0 absolute">
            <div className="w-80 h-52 left-0 top-0 absolute bg-blue-600" />
            <div className="w-80 h-52 left-0 top-0 absolute bg-blue-100" />
            <div className="w-80 h-80 left-[-123.60px] top-[-25.15px] absolute bg-violet-950" />
            <div className="w-44 h-48 left-[211.12px] top-[-59.88px] absolute bg-blue-400" />
            <div className="left-[19.31px] top-[21.42px] absolute justify-start text-white text-2xl font-normal font-['Poppins']">
              Fun Coupons
            </div>
            <div className="left-[19.31px] top-[92.82px] absolute justify-start text-white text-sm font-medium font-['Poppins'] leading-4">
              Dividendos 2022 e 2021
            </div>
            <div className="w-12 h-7 left-[15.45px] top-[121.96px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-6">
              4756
            </div>
            <div className="w-10 h-7 left-[159.33px] top-[121.96px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-6">
              9018
            </div>
            <div className="w-8 h-1.5 left-[70.49px] top-[133.05px] absolute bg-white" />
            <div className="w-8 h-1.5 left-[114.45px] top-[133.04px] absolute bg-white" />
            <div className="left-[19.31px] top-[149.94px] absolute justify-start text-white text-xl font-semibold font-['Poppins'] leading-7">
              R$ 117.000.000
            </div>
          </div>
        </div>

        <div className="w-56 h-12 left-[956px] top-[248px] absolute">
          <div className="left-[36.57px] top-0 absolute justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-6">
            Custos e Despesas
          </div>
          <div className="w-80 h-0 left-0 top-[52px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-200" />
        </div>

        <div className="left-[1188px] top-[248px] absolute text-right justify-start text-rose-500 text-base font-semibold font-['Poppins'] leading-6">
          - $3.1bi
        </div>
        <div className="left-[1274px] top-[248px] absolute text-right justify-start text-rose-500 text-base font-semibold font-['Poppins'] leading-6">
          - $3.1bi
        </div>

        <img
          className="w-40 h-24 left-[657px] top-[256px] absolute"
          src="https://placehold.co/165x93"
          alt=""
        />

        <div className="w-48 h-7 left-[964px] top-[312px] absolute">
          <div className="left-[31.65px] top-0 absolute justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-6">
            Lucro Líquido
          </div>
          <div className="w-80 h-0 left-0 top-[52px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-200" />
        </div>

        <div className="w-24 h-6 left-[1175px] top-[316px] absolute text-right justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-6">
          R$178m
        </div>
        <div className="w-24 h-6 left-[1255px] top-[316px] absolute text-right justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-6">
          R$197m
        </div>

        <img
          className="w-24 h-12 left-[1659px] top-[325px] absolute"
          src="https://placehold.co/91x50"
          alt=""
        />

        <div className="w-24 h-32 py-6 left-[499px] top-[348px] absolute bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-red-700 inline-flex justify-center items-center gap-2.5">
          <div className="w-24 h-32 text-center justify-start text-red-700 text-xs font-normal font-['Libre_Baskerville'] leading-5">
            Thiago e Leandro Ramos fundaram o Kabum em Limeira-SP em 2003
          </div>
        </div>

        <img
          className="w-60 h-32 left-[612px] top-[348px] absolute"
          src="https://placehold.co/237x133"
          alt=""
        />
        <img
          className="w-44 h-28 left-[286px] top-[371px] absolute"
          src="https://placehold.co/169x106"
          alt=""
        />

        <div className="w-36 h-11 left-[968px] top-[376px] absolute">
          <div className="left-[23.06px] top-0 absolute justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-6">
            Dividendos pagos
          </div>
        </div>
        <div className="w-24 h-6 left-[1175px] top-[376px] absolute text-right justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-6">
          R$58m
        </div>
        <div className="w-24 h-6 left-[1254px] top-[376px] absolute text-right justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-6">
          R$59m
        </div>

        <img
          className="w-[462px] h-52 left-[1881px] top-[442px] absolute rounded-[5px]"
          src="https://placehold.co/462x203"
          alt=""
        />
        <div className="w-24 h-0 left-[393.27px] top-[424.78px] absolute origin-top-left -rotate-[16.30deg] border-2 border-red-700" />
        <div className="w-1.5 h-1.5 left-[391px] top-[421px] absolute bg-red-700 rounded-full" />

        <img
          className="w-72 h-52 left-[319px] top-[493px] absolute"
          src="https://placehold.co/273x205"
          alt=""
        />

        <div className="w-40 h-6 left-[1324px] top-[650px] absolute justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-6">
          ALERTA DE LIQUIDEZ
        </div>
        <div className="w-80 left-[960px] top-[640px] absolute justify-start text-indigo-800 text-base font-semibold font-['Poppins'] leading-6">
          Recebimento de 1 bilhão de reais a vista
          <br />
          pelos irmãos na venda da totalidade das ações da Kabum para o Magalu
        </div>
        <div className="w-40 h-20 left-[1333px] top-[669px] absolute text-center justify-center text-green-900 text-3xl font-bold font-['Lora'] leading-[50.83px] tracking-[2.80px]">
          CA$H
        </div>
        <div className="w-80 left-[1881px] top-[674px] absolute justify-start text-indigo-800 text-base font-semibold font-['Poppins'] leading-6">
          Em 2022. a TOPGUN HOLDING LTDA de Thiago camargo registrou o pássaro
          Gulfstream G
        </div>

        <div className="w-28 h-10 py-3.5 left-[397px] top-[810px] absolute bg-black rounded-[5px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-pink-50 text-3xl font-normal font-['Lora'] leading-[50.83px] tracking-[2.80px]">
            2003
          </div>
        </div>
        <div className="w-28 h-10 py-3.5 left-[1895px] top-[819px] absolute bg-black rounded-[5px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-pink-50 text-3xl font-normal font-['Lora'] leading-[50.83px] tracking-[2.80px]">
            2022
          </div>
        </div>
        <div className="w-28 h-10 py-3.5 left-[1047px] top-[819px] absolute bg-black rounded-[5px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-pink-50 text-3xl font-normal font-['Lora'] leading-[50.83px] tracking-[2.80px]">
            2021
          </div>
        </div>

        <div className="w-80 h-20 left-[1140px] top-[942px] absolute text-center justify-center text-black text-3xl font-normal font-['Lora'] leading-[50.83px] tracking-[2.80px]">
          LINHA DO TEMPO
        </div>
        <div className="w-[800px] h-0 left-[219px] top-[984px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-black" />
        <div className="w-[800px] h-0 left-[1555px] top-[983px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-black" />
        <div className="w-[914.04px] h-0 left-[219px] top-[943.04px] absolute origin-top-left -rotate-90 outline outline-2 outline-offset-[-1px] outline-black" />
      </div>
    </div>
  );
}
