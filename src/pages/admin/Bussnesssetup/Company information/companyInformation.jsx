
import React from "react";

const CompanyInformationForm = () => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="mb-0 text-capitalize d-flex gap-1">
          <h1 className=" text-sm font-bold">Company information</h1>
          
        </h5>
      </div>
      <div className="card-body ">
        <div className="row ">
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">Company Name</label>
              <input
                className="form-control outline-none hover:border-primary"
                type="text"
                name="company_name"
                defaultValue="6valley CMS"
                placeholder="New business"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">Phone</label>
              <input
                className="form-control outline-none hover:border-primary"
                type="text"
                name="company_phone"
                defaultValue="+00xxxxxxxxxxxx"
                placeholder="01xxxxxxxx"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">Email</label>
              <input
                className="form-control outline-none hover:border-primary"
                type="text"
                name="company_email"
                defaultValue="copy@6amtech.com"
                placeholder="Company@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex ">Country</label>
              <select
                id="country"
                name="country_code"
                className="form-control js-select2-custom outline-none hover:border-primary"
                defaultValue="US"
              >
                {/* Populate options here */}
                <option value="US">United States</option>
                {/* Add other countries similarly */}
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">Time zone</label>
              <select
                name="timezone"
                className="form-control js-select2-custom outline-none hover:border-primary"
                defaultValue="Asia/Magadan"
              >
                {/* Populate options here */}
                <option value="Asia/Magadan">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                {/* Add other time zones similarly */}
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex" htmlFor="language">Language</label>
              <select
                name="language"
                className="form-control js-select2-custom outline-none hover:border-primary"
                defaultValue="en"
              >
                <option value="en">English (En)</option>
                <option value="sa">Arabic (Sa)</option>
                <option value="bd">Bangla (Bd)</option>
                <option value="in">Hindi (In)</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">Company address</label>
              <input
                type="text"
                defaultValue="Kingston, New York 12401 United States"
                name="shop_address"
                className="form-control outline-none hover:border-primary"
                placeholder="Your shop address"
                required
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">
                Latitude
                <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title="Copy the latitude of your business location from Google Maps and paste it here">
                  <img width="16" src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt="" />
                </span>
              </label>
              <input
                className="form-control latitude disabled-input outline-none hover:border-primary"
                type="text"
                name="latitude"
                id="latitude"
                defaultValue="21.7679"
                placeholder="Latitude"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="form-group">
              <label className="title-color d-flex">
                Longitude
                <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title="Copy the longitude of your business location from Google Maps and paste it here">
                  <img width="16" src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt="" />
                </span>
              </label>
              <input
                className="form-control longitude disabled-input outline-none hover:border-primary"
                type="text"
                name="longitude"
                id="longitude"
                defaultValue="78.8718"
                placeholder="Longitude"
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="title-color d-flex justify-content-end">
                <span className="badge badge--primary-2">
                  Latitude:
                  <span id="showLatitude">21.7679</span>
                </span>
                <span className="mx-1 badge badge--primary-2" id="showLongitude">
                  Longitude:
                  <span id="showLongitude">78.8718</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default CompanyInformationForm;