export default function randomIdGenerator(length) {
  let randomNumber = Math.floor(Math.random() * 16);
  return randomNumber * length;
}
