"use client";

import { Fragment, useContext, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

import { NotificationContext } from '../context/notificationContext';

const duration = 5; // seconds

export default function Notification() {
  const { notification, stop } = useContext(NotificationContext);
  const [show, setShow] = useState(false);
//   console.log(!!notification.message);
  let notificationInterval: NodeJS.Timeout;

  useEffect(() => {
    if (notification.message) {
        setShow(true);
    
        if (notificationInterval) {
          clearTimeout(notificationInterval);
        }

        notificationInterval = setTimeout(() => {
            setShow(false);
            stop();
        }, duration * 1000);
    } 
  }, [notification.message]);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    { notification.type 
                        ? <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-2xl"/>
                        : <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-2xl"/>
                    }
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{ notification.title }</p>
                    <p className="mt-1 text-sm text-gray-500">{ notification.message }</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
