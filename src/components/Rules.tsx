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
    <div className='flex p-8'>
      <button
        type='button'
        onClick={openModal}
        className='ml-auto rounded-lg border py-3 px-10 text-lg leading-none tracking-widest text-white'
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
            <div className='relative space-y-10 rounded-lg bg-white p-8'>
              <div className='flex items-center justify-between'>
                <Dialog.Title
                  as='h3'
                  className='text-3xl font-bold text-textDark'
                >
                  RULES
                </Dialog.Title>
                <button type='button' onClick={closeModal}>
                  <IconClose />
                </button>
              </div>

              <div className='px-6'>
                <ImageRules />
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Rules;
