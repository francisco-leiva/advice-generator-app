import { useEffect, useState } from 'react';
import axios from 'axios';
import IconDice from './components/IconDice';
import DividerMobile from './components/DividerMobile';
import DividerDesktop from './components/DividerDesktop';

function App() {
  const [data, setData] = useState([]);
  const [slipID, setSlipID] = useState(Math.floor(Math.random() * 225));

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.adviceslip.com/advice/${slipID}`
      );
      setData(response.data.slip);
    };

    getData();
  }, [slipID]);

  const handleOnClick = () => {
    setSlipID(Math.floor(Math.random() * 225));
  };

  return (
    <>
      <main className='container none h-[100svh] bg-dark-blue flex flex-col justify-center items-center'>
        <section className='w-80 max-h-96 px-4 pt-5 pb-0 flex flex-col justify-between items-center font-manrope bg-dark-grayish-blue rounded-xl  min-[375px]:w-[22rem] min-[425px]:w-[25rem] sm:w-[32rem] sm:px-6'>
          <div className='flex flex-col items-center'>
            <span className='text-xs text-neon-green uppercase tracking-[0.2rem] font-bold pt-4'>
              Advice #{data.id}
            </span>

            <p className='text-light-cyan text-2xl font-bold text-center py-6'>
              {'"'}
              {data.advice}
              {'"'}
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='sm:hidden'>
              <DividerMobile />
            </div>

            <div className='hidden sm:block'>
              <DividerDesktop />
            </div>

            <button
              onClick={handleOnClick}
              className='p-4 bg-neon-green rounded-full relative -bottom-7 md:hover:shadow-button md:hover:duration-200'
            >
              <IconDice />
            </button>
          </div>
        </section>

        <div className='text-light-cyan absolute bottom-2 text-center'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            rel='noreferrer'
            target='_blank'
            className='text-neon-green'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://github.com/francisco-leiva'
            rel='noreferrer'
            target='-blank'
            className='text-neon-green'
          >
            Francisco Leiva
          </a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
