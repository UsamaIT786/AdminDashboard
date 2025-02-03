import React from "react";
import Image from "next/image";
const Dashboard = () => {
  return (

    <div className="bg-black">





        
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex flex-col flex-1">




        {/* Navbar */}


        
        {/* Dashboard Content */}
        <main className="p-6">
        <h1
  id="h1"
  className=" lg:text-6xl md:text-4xl sm:text-3xl text-yellow-300 font-sans font-bold"
>
  Admin-Dashboard
</h1>

          <h2 className="text-2xl text-purple-500 font-bold  p-3 mt-2 font-sans">Furniro Market Place Builder </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Cards */}
            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">Total Sales</h2>
              <p className="text-xl font-bold">$12,345</p>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">Delet Orders</h2>
              <p className="text-xl font-bold">20</p>
            </div>


            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">Pending Orders</h2>
              <p className="text-xl font-bold">100</p>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">Order Completed</h2>
              <p className="text-xl font-bold">300</p>
            </div>



            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">New Orders</h2>
              <p className="text-xl font-bold">56</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg hover:bg-green-300">
              <h2 className="text-lg font-medium">Customers</h2>
              <p className="text-xl font-bold">1,234</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
