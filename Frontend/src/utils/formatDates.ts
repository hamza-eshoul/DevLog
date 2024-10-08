const formatDate = (dateToFormat: Date): string => {
  const date = new Date(dateToFormat);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export { formatDate };
