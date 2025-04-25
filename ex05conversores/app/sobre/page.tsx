import Image from 'next/image';
import foto from '../../public/foto.jpg'; // certifique-se de que a imagem está aqui

export default function Sobre() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Sobre o Desenvolvedor</h1>

      <Image
  src={foto}
  alt="Foto de Carlos Borba"
  width={180}
  height={180}
  className="rounded-full border-4 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300"
/>

      <p>
        Olá! Meu nome é Carlos Borba, tenho 31 anos, sou bacharel em Direito e agora estou cursando
        Sistemas para Internet na Universidade Católica de Pernambuco. <br /><br />
        Estou desenvolvendo este app como parte dos meus estudos em programação front-end e utilizei
        <strong> Next.js </strong> e <strong> Tailwind CSS </strong> para desenvolver este projeto.
      </p>
    </main>
  );
}
