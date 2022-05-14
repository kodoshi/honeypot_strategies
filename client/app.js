const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const path = require("path");
require("dotenv").config();

function random_filepath() {
  const filepath_array = [
    "brain_scan_123.jpg",
    "head_scan_125.png",
    "heart_scan_124.jpeg",
  ];
  //return random file path
  const rand_res =
    filepath_array[Math.floor(Math.random() * filepath_array.length)];
  return path.join(__dirname, "files") + "/" + rand_res.toString();
}

const upload = async () => {
  try {
    const rand_res = random_filepath();
    const file = fs.createReadStream(rand_res);
    const title = "My file";

    const form = new FormData();
    form.append("title", title);
    form.append("file", file);

    const resp = await axios.post(`${process.env.SERVER_URL}`, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    if (resp.status === 200) {
      return "Upload complete";
    }
  } catch (err) {
    return new Error(err.message);
  }
};

setInterval(() => {
  upload().then((resp) => console.log(resp));
}, `${process.env.TIMER_VALUE}`); //every X seconds
