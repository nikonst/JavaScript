const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

const data = await Deno.readFile("capitalCities.txt")

console.log(decoder.decode(data))

const newCapital = encoder.encode("Berlin")
await Deno.writeFile("capitalCities.txt", newCapital)
