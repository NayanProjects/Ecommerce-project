
import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import {
  UserRound,
  Package,
  Heart,
  MapPin,
  CreditCard,
  LockKeyhole,
  LogOut,
  Box,
  Truck,
  Clock3,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "./Mycontext";

const Account = ({ cartcount }) => {
  const [activeTab, setActiveTab] = useState("My Profile");
  const {Wishlistdata}=useContext(Mycontext);
  const menuItems = [
    { name: "My Profile", icon: UserRound },
    { name: "My Orders", icon: Package },
    { name: "Wishlist", icon: Heart, count: `${Wishlistdata.length}` },
    { name: "Addresses", icon: MapPin },
    { name: "Payment Methods", icon: CreditCard },
    { name: "Change Password", icon: LockKeyhole },
  ];
console.log(Wishlistdata.length);
{
 Wishlistdata.map((el)=>{
  console.log(el);
 }) 
}
  const stats = [
    { label: "Total Orders", value: "6", icon: Box },
    { label: "Wishlist Items", value: `${Wishlistdata.length}`, icon: Heart },
    { label: "Saved Addresses", value: "2", icon: MapPin },
  ];

  const orders = [
    {
      id: "#FZ182736",
      name: "boAt Rockerz 550 Headphones",
      date: "29 Oct 2026",
      price: "$56.53",
      status: "Delivered",
      type: "delivered",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150",
    },
    {
      id: "#FZ182511",
      name: "Nike Air Max Sneakers",
      date: "24 Oct 2026",
      price: "$154.40",
      status: "Shipped",
      type: "shipped",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150",
    },
    {
      id: "#FZ181990",
      name: "Wildcraft Laptop Backpack",
      date: "20 Oct 2026",
      price: "$39.61",
      status: "Processing",
      type: "processing",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      {/* Existing Navbar */}
      <Navbar2 cartcount={cartcount} />

      <div className="mx-auto max-w-[1450px] px-4 py-7 sm:px-6 lg:px-10">

        {/* Breadcrumb */}
        {/* <div className="mb-5 flex items-center gap-2 text-sm">
          <span className="text-gray-500">Home</span>
          <ChevronRight size={15} />
          <span className="text-blue-600">Account</span>
        </div> */}
                  <div className="text-[#374151] flex items-center ">
            <NavLink to="/">Home</NavLink>
            <ChevronRight size={20} />
            <NavLink to="/Account">Account</NavLink>
          </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-gray-900">
            My Account
          </h1>
          <p className="mt-1 text-gray-500">
            Manage your profile, orders and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[300px_1fr]">

          {/* Sidebar */}
          <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                N
              </div>

              <div className="min-w-0">
                <h2 className="font-bold text-gray-900">Nayan VM</h2>
                <p className="truncate text-sm text-gray-500">
                  nayanvm26@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
                      active
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={21} />
                      <span>{item.name}</span>
                    </div>

                    {item.count && (
                      <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs text-white">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="my-5 border-t border-gray-100" />

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-500 hover:bg-red-50">
              <LogOut size={21} />
              Logout
            </button>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">

            {/* Welcome Banner */}
            <div className="relative mb-5 flex min-h-[160px] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 px-7 py-7">

              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900">
                  Hello, Nayan!
                </h2>

                <p className="mt-2 text-gray-600">
                  Manage your orders, wishlist, addresses and account
                  settings all in one place.
                </p>
              </div>

              <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue-200/50" />

              <div className="absolute bottom-0 right-10 hidden items-end gap-3 sm:flex">
                <div className="flex h-24 w-20 items-center justify-center rounded-t-lg border border-blue-200 bg-white shadow-lg">
                  <Package size={35} className="text-blue-600" />
                </div>

                <div className="flex h-32 w-24 items-center justify-center rounded-t-lg bg-blue-600 shadow-lg">
                  <Package size={40} className="text-white" />
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.value}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Orders */}
            <section className="mb-7">

              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recent Orders
                </h2>

                <button
                  onClick={() => setActiveTab("My Orders")}
                  className="flex items-center gap-1 font-semibold text-blue-600"
                >
                  View All <ArrowRight size={17} />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                {orders.map((order, index) => (
                  <div
                    key={order.id}
                    className={`flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between ${
                      index !== orders.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="h-16 w-16 rounded-xl bg-gray-100 object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {order.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Order {order.id}
                        </p>
                        <p className="text-xs text-gray-500">
                          Placed on {order.date}
                        </p>
                      </div>
                    </div>

                    <p className="font-bold text-gray-900">
                      {order.price}
                    </p>

                    <div
                      className={`flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
                        order.type === "delivered"
                          ? "bg-green-50 text-green-600"
                          : order.type === "shipped"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {order.type === "delivered" ? (
                        <CheckCircle2 size={15} />
                      ) : order.type === "shipped" ? (
                        <Truck size={15} />
                      ) : (
                        <Clock3 size={15} />
                      )}

                      {order.status}
                    </div>

                    <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Account Settings */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Account Settings
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    icon: UserRound,
                    title: "Edit Profile",
                    desc: "Update your personal details",
                    tab: "My Profile",
                  },
                  {
                    icon: MapPin,
                    title: "Manage Addresses",
                    desc: "Add or edit delivery addresses",
                    tab: "Addresses",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Change Password",
                    desc: "Update your account password",
                    tab: "Change Password",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveTab(item.tab)}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <Icon
                          size={30}
                          className="shrink-0 text-blue-600"
                        />

                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={20}
                        className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      />
                    </button>
                  );
                })}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
