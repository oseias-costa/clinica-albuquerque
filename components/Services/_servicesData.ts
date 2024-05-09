import implant from "../../public/img/implant.png";
import denture from "../../public/img/denture.png";
import lents from "../../public/img/lent.png";

export const servicesData = {
  subtitle: "Nossos serviços",
  services: [
    {
      id: "1",
      title: "Implante",
      icon: implant,
      content: 'Uma solução duradoura e natural para substituir dentes perdidos, devolvendo-lhe a confiança para sorrir.'
    },
    {
      id: "2",
      title: "Proteses",
      icon: denture,
      content: 'A prótese dentária é uma alternativa flexível que ajuda a manter a saúde oral e a autoestima.'
    },
    {
      id: "3",
      title: "Lentes de Contato",
      icon: lents,
      content: 'Ideal para quem deseja um sorriso impecável sem a necessidade de procedimentos extensos.'
    },
  ],
  button: "Veja todos os serviços",
};
