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
          <p className="text-3xl py-4">FAQ's</p>
          <p style={{ borderColor: '#45D91C', borderWidth: '2px', borderStyle: 'solid', borderRadius: '20px', padding: '10px', marginBottom: '10px', maxWidth: '350px' }}>Hvordan blir jeg medlem?</p>
          <p style={{ borderColor: '#45D91C', borderWidth: '2px', borderStyle: 'solid', borderRadius: '20px', padding: '10px', marginBottom: '10px', maxWidth: '350px' }}>Kan jeg bruke 3D-printer?</p>
          <p style={{ borderColor: '#45D91C', borderWidth: '2px', borderStyle: 'solid', borderRadius: '20px', padding: '10px', marginBottom: '10px', maxWidth: '350px' }}>Kan jeg prøve VR spill/utstyr?</p>
        </div>
        <div className="flex flex-col items-center custom-height py-16">
          <p className="text-3xl mb-10">Våre aktive grupper</p>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full rounded-lg  mb-4 min-h-32">
            <p className='text-3xl mb-2'>Ledelsen</p>
            <p className="mb-2">Ledelsen består av Leder, Nestleder og Økonomiansvarlig i Hackerspace. Disse sørger for at Hackerspace NTNU driftes optimalt og gjennomfører avgjørelser og planlegging av drift med styret. </p>
            <p className="mb-2">Leder: Thomas Jakob Gabrielsen</p>
            <p className="mb-2">Nestleder: Carl Johan Gützkow</p>
            <p className="mb-2">Økonomiansvarlig: Joakim Borge Hunskår</p>
            <div className="flex flex-row items-center space-x-8 mb-2'">
              <p className="text-2xl">E-post</p>
              <p className="text-2xl">Medlemmer</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full rounded-lg  mb-4 min-h-32">
            <p className='text-3xl mb-2'>DevOps</p>
            <p className="mb-2">Hovedoppgavene til DevOps er å utvikle og drifte Hackerspace sin nettside, men vi jobber også med drift av infrastruktur, databaser, servere, og har ansvar for diverse dingser.</p>
            <p className="mb-2">Leder: Njål Brynhildarson Telstø Nestleder: Michael Brusegard </p>
            <p className="mb-2">Nestleder: Michael Brusegard </p>
            <div className="flex flex-row items-center space-x-8 mb-2'">
              <p className="text-2xl">E-post</p>
              <p className="text-2xl">Medlemmer</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#313131' }} className=" p-4 w-full rounded-lg  mb-4 min-h-32">
            <p className='text-3xl mb-2'>Spill <span style={{ fontStyle: 'italic', color: '#45D91C' }}>-Prosjekt</span></p>
            <p className="mb-2">Det har i mange år vært interesse for å utvikle spill på Hackerspace og vi har i like mange år holdt på med en spillutviklingsgruppe for å tilfredsstille folket.</p>
            <p className="mb-2"> Den aktive spillutviklingsgruppen begynte med sitt nyeste prosjekt høsten 2020. Prosjektet går ut på et couch co-op, tower defense spill hvor målet er like mye å beskytte deg fra de uendelige angripende monstrene som det er å forsvare deg mot dine medspillere.</p>
            <p className="mb-2">Målet for prosjektet er å produsere et spill som skal delta på Norwegian game awards. Så gled dere til de gøye, sprø og kaotiske eventyrene som dere vil ha i dette prosjektet!</p>
            <p className="mb-2">Leder: Fredrik Lillemoen Eiding</p>
            <p className="mb-2">Nestleder: Aleksandra Grunnreis Grålumstuen</p>
            <div className="flex flex-row items-center space-x-8 mb-2'">
              <p className="text-2xl">E-post</p>
              <p className="text-2xl">Medlemmer</p>
            </div>
          </div>
        </div>
      </div>
    </Page >
  )
}

export default AboutPage