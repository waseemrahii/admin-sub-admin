import React from "react";
import Switcher from "../../../../components/FormInput/Switcher";
import CompanyInformationForm from "../Company information/companyInformation";
import BusinessInformationCard from "../BussinessInformation/bussinessInformation";
import AppDownloadInfoCard from "../appCard/appCard";
import WebsiteColorCard from "../appCard/colourCard";
import WebsiteHeaderLogoCard from "../appCard/headerLogoCard";
import WebsiteFooterLogoCard from "../appCard/footerCard";
import WebsiteFaviconCard from "../appCard/FaviconCard";
import LoadingGifCard from "../appCard/loadingGifCard";
import AppLogoHeader from "../appCard/appLogoCard";

const MaintenanceCard = () => {
  return (
    <>
    <div className="border mb-2 rounded-lg shadow-sm">
      <div className=" p-3 shadow-lg rounded-t-lg">
        <h5 className="text-lg font-medium flex items-center mb-0">
          <h1 className="  text-sm font-bold"> System Maintenance</h1> {/* Replace with the relevant icon */}
         
        </h5>
      </div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="md:w-2/3 xl:w-3/4">
            <p className="m-0">
              *By turning on maintenance mode, control all your system & functions.
            </p>
          </div>
          <div className="md:w-1/3 xl:w-1/4">
            <div className="flex justify-between items-center border rounded px-3 py-2 ">
              <h5 className="text-md font-semibold mb-0">Maintenance Mode</h5>
              <label className="switch ml-2 mb-0">
                <input
                  type="checkbox"
                  id="maintenanceModeSwitch"
                  data-status="off"
                  className="switcher_input maintenance-mode-show"
                  data-warning="Do you want to turn off the maintenance mode?"
                  data-route="https://6valley.6amtech.com/admin/business-settings/maintenance-mode"
                />
                <span className=""><Switcher/></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CompanyInformationForm/>
    <BusinessInformationCard/>
    <AppDownloadInfoCard/>
<div className="flex flex-col md:flex-row gap-4"> 
    <WebsiteColorCard/>
    < WebsiteHeaderLogoCard/>
    </div>
    <div className="flex flex-col md:flex-row gap-4 mt-3">
    <WebsiteFooterLogoCard/>
    <WebsiteFaviconCard/>
    </div>
    <div className="flex flex-col md:flex-row gap-4 mt-3">
    <LoadingGifCard/>
    <AppLogoHeader/>
    </div>
    <div className="flex justify-end">
  <button 
    className="px-4 py-3 bg-primary hover:bg-primary-dark mt-3 rounded-md" 
    style={{ color: "white" }}
  >
    Save Information
  </button>
</div>

    </>
  );
};

export default MaintenanceCard;
