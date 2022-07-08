import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiOutlineX } from "react-icons/hi";
import Link from 'next/link'

export default function ButtonGagalDaftar() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
        <>
             <button type="submit" name="daftar" id="register"onClick={openModal} className="btn-primary text-center bg-blue-500 rounded-xl border-2 border-blue-500 px-8 py-2 text-white text-sm sm:text-base font-semibold sm:hover:bg-blue-600 sm:hover:border-blue-600 w-full">
                Daftar
            </button>

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto bg-black bg-opacity-40"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex">
                <HiOutlineX className="p-1 rounded-full text-white bg-red-500 w-6 h-6 mr-2" />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Daftar Gagal!
                </Dialog.Title>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Akun anda sudah terdaftar, silahkan login.
                  </p>
                </div>

                <div className="mt-4">
                <Link href="/login">
                <a>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Ok
                  </button>
                  </a>
                </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}