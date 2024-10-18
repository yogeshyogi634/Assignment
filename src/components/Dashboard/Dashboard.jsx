import React from "react";
import { statsData, orderData } from "../../data";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-6 p-8 lg:p-10 xl:p-14 w-full text-white">
      <h1 className="text-2xl font-semibold my-4 lg:my-6">
        Good afternoon, Erica
      </h1>
      <div className="flex items-center justify-between">
        <h4>Overview</h4>
        <select
          className="text-white bg-neutral-700 border-dark p-2 rounded-md shadow-xl"
          defaultValue="Last week"
        >
          <option>Today</option>
          <option>Last week</option>
          <option>Last month</option>
        </select>
      </div>

      {/* Overview Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
        {statsData.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      {/* Recent Orders Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent orders</h2>
        <div className="rounded-lg overflow-x-auto">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

{
  /* Overview Stats Section */
}
const StatsCard = ({ stat }) => (
  <div className="flex flex-col gap-6 p-6 lg:p-4 xl:p-6">
    <hr className="mb-4 border-b-gray-400 border-b-[0.2px] opacity-10" />
    <h2 className="text-sm text-gray-100">{stat.title}</h2>
    <p className="text-3xl font-medium	">{stat.value}</p>
    <p className="text-neutral-500 text-sm">
      <span
        className={`${
          stat.changeType === "increase" ? "bg-green-500" : "bg-pink-500"
        } p-1 rounded-md text-white `}
      >
        {stat.change}
        <br
          className=" flex 
         lg:hidden"
        />
      </span>
      <br
        className=" flex 
         lg:hidden"
      />
      &nbsp;{stat.description}
    </p>
  </div>
);

{
  /* Recent Orders Section */
}
const OrderTable = () => (
  <table className="w-full text-left">
    <thead>
      <tr className="text-neutral-400 text-sm lg:text-base border-b border-gray-700">
        <th className="py-3 px-6 lg:px-2 ">Order number</th>
        <th className="py-3 px-6 lg:px-2 ">Purchase date</th>
        <th className="py-3 px-6 lg:px-2 ">Customer</th>
        <th className="py-3 px-6 lg:px-2 ">Event</th>
        <th className="py-3 px-6 lg:px-2 ">Amount</th>
      </tr>
    </thead>
    <tbody>
      {orderData.map((order, index) => (
        <OrderRow key={index} order={order} />
      ))}
    </tbody>
  </table>
);

const OrderRow = ({ order }) => (
  <tr className="border-b border-gray-700">
    <td className="py-3 px-6 lg:px-2 text-xs lg:text-base">
      {order.orderNumber}
    </td>
    <td className="py-3 px-6 lg:px-2 text-xs lg:text-base text-neutral-500">
      {order.date}
    </td>
    <td className="py-3 px-6 lg:px-2 text-xs lg:text-base">
      {order.customerName}
    </td>
    <td className="py-3 px-6 lg:px-2 text-xs lg:text-base flex items-center gap-2">
      <div className="w-6 h-6 lg:w-8 lg:h-8 ">
        <img
          src={order.image}
          alt="images"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {order.eventName}
    </td>

    <td className="py-3 px-6 lg:px-2 text-xs lg:text-base">{order.amount}</td>
  </tr>
);

export default Dashboard;
