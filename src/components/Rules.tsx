import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useBoolean from '../hooks/useBoolean';
import { IconClose, ImageRules } from './svgs';

const Rules = () => {
  const {
    value: isModalOpen,
    setTrue: openModal,
    setFalse: closeModal,
  } = useBoolean(false);

  return (
    <div className='flex p-12 sm:p-8'>
      <button
        type='button'
        onClick={openModal}
        className='ml-auto mr-auto rounded-lg border py-3 px-10 text-lg leading-none tracking-widest text-white sm:ml-auto sm:mr-0'
      >
        RULES
      </button>

      <Transition
        show={isModalOpen}
        as={Fragment}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-50 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-50 opacity-0'
      >
        <Dialog
          as='div'
          onClose={closeModal}
          className='fixed inset-0 z-10 overflow-y-auto'
        >
          <div className='flex min-h-screen items-center justify-center'>
            <Dialog.Overlay className='fixed inset-0 bg-black/50' />
            <div className='relative flex min-h-screen w-full flex-col items-center justify-center gap-28 space-y-10 bg-white p-8 sm:min-h-max sm:w-auto sm:gap-0 sm:rounded-lg'>
              <div className='flex w-full items-center justify-center sm:justify-between'>
                <Dialog.Title
                  as='h3'
                  className='text-3xl font-bold text-textDark'
                >
                  RULES
                </Dialog.Title>
                <button
                  type='button'
                  onClick={closeModal}
                  className='hidden sm:block'
                >
                  <IconClose />
                </button>
              </div>
              <div className='sm:px-6'>
                <ImageRules />
              </div>
              <button className='sm:hidden' type='button' onClick={closeModal}>
                <IconClose />
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Rules;
