import React, { useState } from "react";
import ProfileTab from "./components/ProfileTab";
import OrdersTab from "./components/OrdersTab";
import YourPlantsTab from "./components/YourPlantsTab";
import YourWishlistTab from "./components/YourWishlistTab";
import Modal from "../../components/modal/Modal";
import AddressModalForm from "./components/Profile/AddressModalForm";
import useProfileData from "./hooks/useProfileData";
import { ACCOUNT_TABS, DEFAULT_USER_AVATAR } from "../../appConstant";

type TabType = "profile" | "orders" | "plants" | "wishlist";

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const {
    user,
    userName,
    activeModal,
    activeAddressModal,
    userAddress,
    onUserNameChangeHandler,
    cancelButtonHandler,
    addressModalCloseHandler,
    onUserAddressChangeHandler,
    addNewAddressButtonHandler,
    editAddressButtonHandler,
    deleteAddressButtonHandler,
    deleteButtonHandler,
    cancelDeleteButtonHandler,
  } = useProfileData();

  const cancelButtonObj = {
    Delete: cancelDeleteButtonHandler,
    Save: ()=>{},
    Clear: ()=>{}
  }

  const confirmButtonObj = {
    Delete: deleteButtonHandler,
    Save: ()=>{},
    Clear: ()=>{}
  }

  const TabPanels = {
    profile: (
      <ProfileTab
        user={user}
        userName={userName}
        onUserNameChangeHandler={onUserNameChangeHandler}
        addNewAddressButtonHandler={addNewAddressButtonHandler}
        editAddressButtonHandler={editAddressButtonHandler}
        deleteAddressButtonHandler={deleteAddressButtonHandler}
      />
    ),
    orders: <OrdersTab />,
    plants: <YourPlantsTab />,
    wishlist: <YourWishlistTab />,
  };

  const toggleTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: TabType,
  ) => {
    e.preventDefault();
    setActiveTab(id);
  };

  return (
    <main className="bg-brand-off-white py-8 sm:py-12 px-4 flex-grow">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
        {/* LEFT SIDEBAR (Desktop View) */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-28 bg-white p-6 rounded-lg shadow-sm border">
            {/* User Info */}
            <div className="text-center mb-6">
              <img
                src={user?.avatar || DEFAULT_USER_AVATAR}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-brand-green">
                {user?.name || "DEFAULT_USER"}
              </h2>
              <p className="text-sm text-gray-500">
                {user?.email || "DEFAULT_USER_EMAIL"}
              </p>
            </div>
            <hr className="mb-6" />
            {/* Navigation */}
            <nav>
              <ul className="space-y-2" id="desktop-nav-links">
                {ACCOUNT_TABS.map((tab) => {
                  return (
                    <li key={tab.id}>
                      <a
                        onClick={(e) => {
                          toggleTab(e, tab.id as TabType);
                        }}
                        data-target="profile-panel"
                        className={`flex items-center gap-3 p-3 rounded-md ${activeTab === tab.id ? "text-white bg-brand-green" : "hover:bg-gray-100"}`}
                      >
                        <i className={`${tab.icon} w-5`}></i>
                        <span>{tab.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* MOBILE & TABLET NAVIGATION */}
        <div className="lg:hidden mb-8">
          {/* User Info Card */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border mb-4">
            <img
              src={user?.avatar || DEFAULT_USER_AVATAR}
              alt="User Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-brand-green">
                {user?.name || ""}
              </h2>
              <p className="text-sm text-gray-500">
                {user?.email || "DEFAULT_USER_EMAIL"}
              </p>
            </div>
          </div>
          {/* Tabs */}
          <div className="w-full overflow-x-auto">
            <div id="mobile-nav-links" className="flex border-b">
              {ACCOUNT_TABS.map((tab) => {
                return (
                  <a
                    key={tab.id}
                    onClick={(e) => {
                      toggleTab(e, tab.id as TabType);
                    }}
                    data-target="profile-panel"
                    className={`flex-shrink-0 px-4 py-2 text-sm font-semibold border-b-2 ${activeTab === tab.id ? "border-brand-green text-brand-green" : "text-gray-500 hover:text-brand-green"}`}
                  >
                    {tab.mobileLabel}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT PANELS */}
        <div className="lg:col-span-3">{TabPanels[activeTab]}</div>
      </div>
      {activeModal ? (
        <Modal
          cancelButtonHandler={cancelButtonObj[activeModal]}
          confirmButtonHandler={confirmButtonObj[activeModal]}
          primaryModalType={activeModal}
        />
      ) : (
        <></>
      )}

      {activeAddressModal ? (
        <AddressModalForm
          addressState={userAddress}
          cancelModalHandler={cancelButtonHandler}
          closeModalHandler={addressModalCloseHandler}
          inputChangeHandler={onUserAddressChangeHandler}
          activeAddressModal={activeAddressModal}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Account;
