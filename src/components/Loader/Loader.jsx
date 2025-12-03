const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-xl font-semibold animate-pulse loading loading-infinity"></p>
      </div>
    </div>
  );
};

export default Loader;
