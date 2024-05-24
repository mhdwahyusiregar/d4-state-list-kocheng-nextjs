// import Image from 'next/image';
import ItemCard from './components/Item-card';

export default function Home() {
  let linkImage = 'https://cdn2.thecatapi.com/images/';
  // let linkDescription = 'https://api.thecatapi.com/v1/breeds';
  return (
    <main>
      <section id="list" className="w-screen py-8 mx-auto bg-gray-200">
        <div className="mb-8 text-center">
          <h1 className="w-full my-2 text-5xl font-bold text-gray-700">
            List kocheng
          </h1>
          <div className="mb-4">
            <div className="w-1/4 h-1 mx-auto bg-blue-500 rounded opacity-75"></div>
          </div>
          <p className="m-4 text-lg text-gray-600">
            Berikut adalah List kocheng terkuat di Bumi :
          </p>
        </div>
        <div className="grid grid-cols-1 m-8 sm:grid-cols-2 lg:grid-cols-4">
          <ItemCard
            name="Bambino"
            imgCat={`${linkImage}5AdhMjeEu.jpg`}
            description="The Bambino is a breed of cat that was created as a cross between the Sphynx and the Munchkin breeds."
          />
          <ItemCard
            name="Aegean"
            imgCat={`${linkImage}ozEvzdVM-.jpg`}
            description="Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats."
          />
          <ItemCard
            name="merican Bobtail"
            imgCat={`${linkImage}hBXicehMA.jpg`}
            description="American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. "
          />
          <ItemCard
            name="Australian Mist"
            imgCat={`${linkImage}_6x-3TiCA.jpg`}
            description="The Australian Mist thrives on human companionship. Tolerant of even the youngest of children."
          />
        </div>
      </section>
    </main>
  );
}
