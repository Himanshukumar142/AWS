export default async function handler(req, res) {
  try {
    const response = await fetch("http://18.223.33.197");
    const data = await response.text();

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Error connecting to backend");
  }
}