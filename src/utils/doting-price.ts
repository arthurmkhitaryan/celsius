export const dotingPrice = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
