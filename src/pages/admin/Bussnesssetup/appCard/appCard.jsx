import React, { useState } from 'react';
import Switcher from '../../../../components/FormInput/Switcher';

const AppDownloadInfoCard = () => {
  const [appStoreEnabled, setAppStoreEnabled] = useState(true);
  const [playStoreEnabled, setPlayStoreEnabled] = useState(true);

  const handleToggle = (store) => {
    if (store === 'appStore') {
      setAppStoreEnabled(!appStoreEnabled);
    } else if (store === 'playStore') {
      setPlayStoreEnabled(!playStoreEnabled);
    }
  };

  return (
    <div className="card mb-3 border border-gray-300 rounded-lg shadow-lg">
      <div className="card-header p-3 bg-white shadow-md">
        <h5 className="mb-0 text-lg font-semibold flex gap-2 items-center">
          <h1 className=" text-sm font-bold"> App download info </h1>
        </h5>
      </div>
      <div className="card-body p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Apple Store Section */}
          <div className="space-y-3">
            <div className="flex gap-2 items-center text-capitalize mb-3">
              <img width="22" src="https://6valley.6amtech.com/public/assets/back-end/img/apple.png" alt="Apple Store" />
              Apple store:
            </div>

            <div className="bg-aliceblue p-3 rounded">
              <div className="flex justify-between  items-center w-full gap-4 mb-2">
                <span className="text-gray-700 text-sm font-medium flex gap-1 items-center">
                  Download link
                  <span className="cursor-pointer" title="If enabled the download button from the App Store will be visible in the Footer section">
                    <img width="16" src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt="Info" />
                  </span>
                </span>

                {/* <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appStoreEnabled}
                    onChange={() => handleToggle('appStore')}
                    className="toggle-switch hidden"
                  />
                 
                  <span className="w-10 h-5 bg-gray-300 rounded-full shadow-inner flex-shrink-0 transition-transform duration-200 relative">
                    <span className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform ${appStoreEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                  </span>
                </label> */}
                <div className='ml-10'>
                 <Switcher/>
                 </div>
              </div>

              <input
                type="url"
                name="app_store_download_url"
                className="form-input w-full p-2 border rounded"
                value="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=19"
                placeholder="Ex: https://www.apple.com/app-store/"
              />
            </div>
          </div>

          {/* Google Play Store Section */}
          <div className="space-y-3">
            <div className="flex gap-2 items-center text-capitalize mb-3">
              <img width="22" src="https://6valley.6amtech.com/public/assets/back-end/img/play_store.png" alt="Play Store" />
              Google play store:
            </div>

            <div className="bg-aliceblue p-3 rounded">
              <div className="flex justify-between items-center gap-2 mb-2">
                <span className="text-gray-700 text-sm font-medium flex gap-1 items-center">
                  Download link
                  <span className="cursor-pointer" title="If enabled the Google Play Store will be visible in the website footer section">
                    <img width="16" src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt="Info" />
                  </span>
                </span>

                {/* <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={playStoreEnabled}
                    onChange={() => handleToggle('playStore')}
                    className="toggle-switch hidden"
                  />
                  <span className="w-10 h-5 bg-gray-300 rounded-full shadow-inner flex-shrink-0 transition-transform duration-200 relative">
                    <span className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform ${playStoreEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                  </span>
                </label> */}
                <div>
                    <Switcher/>
                </div>
              </div>

              <input
                type="url"
                name="play_store_download_url"
                className="form-input w-full p-2 border rounded"
                value="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=19"
                placeholder="Ex: https://play.google.com/store/apps"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadInfoCard;
