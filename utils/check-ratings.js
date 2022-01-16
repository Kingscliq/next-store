export const checkRatings = value => {
  switch (value) {
    case value >= 1.5 && value < 2:
      return 1.5;
    case value >= 2.5 && value < 3:
      return 2.5;
    case value > 3.5 && value < 4:
      return 3.5;
    case value > 4.5 && value < 5:
      return 4.5;
    default:
      return value;
  }
};
