import React from 'react';

const MyDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const hour = new Date().getHours(); // 0-23

  let greeting = '';
  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour >= 17 && hour < 21) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }
  return (
    <div className="p-3">
      <h2 className="text-2xl font-semibold text-primary">
        Hi <span>{user?.name}, </span>
        <span>{greeting} !</span>
      </h2>
      <section className="shadow-md rounded-md p-6 my-10 bg-primary/10"></section>
    </div>
  );
};

export default MyDashboard;
