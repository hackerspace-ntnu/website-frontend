import Page from '../structure/Page';

const EventPage: React.FC = () => {
    const numbers = Array.from({ length: 5 }, (_, index) => 1 + index);

    return (
        <Page>
            <div className='relative px-60'>
                <div className="flex flex-row items-center space-x-8'">
                    <p className="text-text-50 font-black text-4xl">Ny artikkel</p>
                    <p className="text-text-50 font-black text-4xl">Nytt arrangement</p>
                </div>
            </div>
            <div className='relative px-60'>
                <div className="flex flex-col custom-height">
                    <p className="text-text-50 font-black text-4xl py-4">Arrangementer</p>
                </div>
            </div>
        </Page>
    )
}

export default EventPage
