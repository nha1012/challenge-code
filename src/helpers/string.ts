export const handlePrice = (value: string | number) =>
  Number(value).toLocaleString("en") + " đ"

export const renderSchedule = (schedules: [])=>{
  let schedule: string;
  schedule = schedules.join(', ');
  return schedule;
}

