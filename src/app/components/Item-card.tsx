import Image from 'next/image';

interface Cat {
  name: string;
  imgCat: string;
  description: string;
}
export default function ItemCard({ name, imgCat, description }: Cat) {
  return (
    <div className="px-4 py-4 m-2 bg-white rounded shadow-lg">
      <Image
        src={imgCat}
        alt={name}
        className="w-full rounded-lg img"
        width={250}
        height={250}
      />
      <div className="px-2 py-2 text-center ">
        <p className="mb-2 text-xl font-bold text-gray-700">{name}</p>
        <p className="text-base text-gray-700 h-20 text-justify">
          {description}
        </p>
      </div>
      <div className="px-2 py-4 text-center">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-tr-lg rounded-bl-lg shadow-md hover:bg-blue-700">
          Detail
        </button>
      </div>
    </div>
  );
}
