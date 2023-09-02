import * as S from "./location.styles";

export default function Location() {
  return (
    <S.LocationContainer>
      <S.LocationTitle>Como chegar</S.LocationTitle>
      <S.Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9048091905975!2d-46.774246!3d-23.5359259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff13b38eee7f%3A0x6f3696ac9e614944!2sR.%20Dr.%20Ant%C3%B4nio%20Jos%C3%A9%20Luciano%2C%20263%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006010-110!5e0!3m2!1spt-BR!2sbr!4v1693578499261!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></S.Map>
    </S.LocationContainer>
  );
}
