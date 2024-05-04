window.onload;

const printDate = () => {
  let userBirthday = document.getElementById("date").value;
  console.log(userBirthday);
  const userBirthdayArray = userBirthday.split("-");
  let currentDate = new Date();
  console.log(currentDate);

  console.log(currentDate.getFullYear() - userBirthday[0]);
};

const calculateTime = () => {};
