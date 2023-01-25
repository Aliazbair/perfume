import { Card } from '../components/Card'
import { Text } from '../components/Text'
import {rings,flowers,watches,perfumes} from '../data/data';


export const Home = () => {
  return (
    <div className='py-20'>
      <h1>my Perfume List</h1>
      <div className='grid  md:grid-cols-5 gap-4'>
        {perfumes.map((perfume) => (
          <div key={perfume.number} className='shadow   px-2'>
            <img
              src='https://th.bing.com/th/id/OIP.ONIQWuv6PgTWO3CwmDaNpwHaJ4?w=146&h=194&c=7&r=0&o=5&pid=1.7'
              alt=''
              className='w-52 object-cover'
            />
            <h2>{perfume.name}</h2>
            <div className=''>
              <p>brand: {perfume.brand}</p>
              <p>type: {perfume.type}</p>
            </div>
            <p>size: {perfume.size}</p>
            <p>{perfume.notes}</p>
            <div>
              <div>${perfume.price}</div>
            </div>
          </div>
        ))}
      </div>

      <h1>my Perfume List</h1>
      <div className='grid  md:grid-cols-5 gap-4'>
        {rings.map((ring) => (
          <div key={ring.id} className='shadow   px-2'>
            <img
              src='https://www.sylviecollection.com/wp-content/uploads/2019/09/S1913S-YG.jpg'
              alt=''
              className='w-52 object-cover'
            />
            <h2>{ring.name}</h2>
            <div className=''>
              <p>type: {ring.type}</p>
            </div>

            <p>{ring.description}</p>
            <div>
              <div>${ring.price}</div>
            </div>
          </div>
        ))}
      </div>

      <h1>my Perfume List</h1>
      <div className='grid  md:grid-cols-5 gap-4'>
        {watches.map((watch) => (
          <div key={watch.id} className='shadow   px-2'>
            <img
              src='https://th.bing.com/th/id/R.c109aa68eaa47a0451b48cd160863e76?rik=GTLQN87iv7rigg&riu=http%3a%2f%2fwww.ablogtowatch.com%2fwp-content%2fuploads%2f2017%2f02%2fBell-Ross-BR-03-92-Horograph-BR-03-92-Horolum-1.jpg&ehk=iTaQZl%2fNAi8RQFnw%2bzQhrGji7hKO2KEShubLdKXy1rI%3d&risl=&pid=ImgRaw&r=0'
              alt=''
              className='w-52 object-cover'
            />
            <h2>{watch.name}</h2>
            <div className=''>
              <p>type: {watch.type}</p>
            </div>

            <p>{watch.description}</p>
            <div>
              <div>${watch.price}</div>
            </div>
          </div>
        ))}
      </div>
      
      <Text className='text-green-800 py-3 ' title='flowers List' />
      <div className='grid  md:grid-cols-3 gap-4'>
        {flowers.map((flower) => (
          <>
            <Card {...flower} link='Git It'>
              <div className='flex  items-center justify-between mb-5'>
                <p className='text-xl text-green-600 font-bold'>
                  {flower.price}
                </p>
                <p className='text-xl text-green-600 font-bold'>
                  {flower.type}
                </p>
              </div>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};
