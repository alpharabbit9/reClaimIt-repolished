const Statistics = () => {
    const stats = [
      {
        label: 'Total Items Reported',
        value: '5,245',
      },
      {
        label: 'Items Successfully Reunited',
        value: '3,102',
      },
      {
        label: 'Total Users Registered',
        value: '8,431',
      },
    ];
  
    return (
      <div className="bg-orange-50  text-gray-700 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Platform Statistics</h2>
          <p className="text-center mb-10 ">
            Discover the impact of our platform in helping people reconnect with their belongings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-white bg-orange-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg ">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Statistics;