import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2B', (req, res) => {
  const str = req.query.fullname;
  console.log(str);

 if (str != undefined) {
    var target = " ";
    var n = 0, pos = -1, ch_name = 0, p_name = 0;
    while (((pos = str.indexOf(target, pos + 1)) != -1)) {

      if (n > 2) {
        n++;
        break;
      }

      n++;
      p_name = pos + 1;

      if (n == 1) {
        ch_name = pos + 1;
      }
    }


    switch (n) {
      case 0:
        res.send(str);
        break;

      case 1:
        res.send(str.substring(ch_name) + " " + str.substr(0, 1) + ".");
        break;

      case 2:
        res.send(str.substring(p_name) + " " + str.substr(0, 1) + ". " + str.substr(ch_name, 1) + ".");
        break;

      default:
        res.send("Invalid fullname");
        break;
    }

  } else {res.send("Invalid fullname")};
  //res.send(str.length);
})


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
