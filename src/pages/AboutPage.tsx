import Page from '../structure/Page';

const AboutPage: React.FC = () => {
  const numbers = Array.from({ length: 5 }, (_, index) => 1 + index);

  return (
    <Page>
      <div className='relative px-60'>
        <div className="flex flex-col items-center custom-height">
          <p className="text-text-50 font-black text-4xl py-4">Om Oss</p>
          <p className="mr-auto">Hackerspace NTNU er et studentdrevet prosjekt åpent for alle studenter uansett studieretning eller Hackerspace-medlemsskap. Vi tilbyr en kreativ arena der studenter fra forskjellige linjer kan få hjelp til å realisere idéene sine i et engasjert og inkluderende miljø. Hos oss finner du ny teknologi til din disposisjon, blant annet droner, 3D-printere og Virtual Reality-utstyr.
            Om du er en førsteklassing som trenger hjelp med ditt første Arduino-prosjekt eller en fjerdeklassing som ønsker å lage en 3D-modell av Trondheim, kan vi stille med både utstyr og kompetanse. Vi holder også regelmessig kurs for både nybegynnere og viderekomne innen mange spennende emner.</p>
          <p className="mr-auto">Kom innom for å se hva vi driver med og slå av en prat.Du finner oss i andre etasje i A-blokka på Realfagbygget, NTNU Gløshaugen.</p>
        </div>
        <div className="flex flex-col items-end custom-height py-10">
          <p className="text-2xl"> Vis i kart</p>
        </div>
        <div className="flex flex-col itens-right custom-height py-4">
          <p className="text-3xl">FAQ's</p>
          <p>Hvordan blir jeg medlem?</p>
          <p>Kan jeg bruke 3D-printer?</p>
          <p>Kan jeg prøve VR spill/utstyr?</p>
        </div>
        <div className="flex flex-col items-center custom-height py-16">
          <p className="text-3xl mb-10">Våre aktive grupper</p>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full h-24 rounded-lg  mb-4"></div>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full h-24 rounded-lg  mb-4"></div>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full h-24 rounded-lg  mb-4"></div>
        </div>
      </div>
    </Page>
  )
}

export default AboutPage