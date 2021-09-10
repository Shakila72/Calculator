const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');// change to run server html
//   res.end('Hello World');
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> </title>
    <title>Document </title>
    <link rel="stylesheet" href="template.css">
    <style>
        body{
    font-family: Arial, Helvetica, sans-serif;
}
nav
{


    width: 100%;
    height: 60px;
    border: 1px solid black;
    box-sizing: border-box;
   background-color: white;
    overflow: auto;


}
ul
{
    float: right;
    margin-right: 20px;
    position: sticky;

}

li
{
    list-style-type: none;

    display: inline-block;
    padding: 5px;
    margin: 0 5px;

}

#sign-in
{
    text-decoration: none;
    color: black;
    /* position: absolute;
    left: 1150px; */


}
#sign-up
{

    background-color: rgb(53, 53, 214);
    color: white;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    /* position: relative; */

}

.container
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    border: 20px  solid purple;
    border-bottom:hidden;
}
.h
{
    width: 430px;

    background-color: rgb(202, 223, 240);

    padding-left: 20px;



}
.container2
{
    display: flex;

    margin-top: 0px;
    border: 1px solid black;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;


    justify-self: center;

}
img{
    margin-right: 3px;

    width: 1010px;
    height: 310px;

}
#p2
{
    padding-left: 30px;
    padding-top: 20px;
}
        label
        {


            padding-top: 5px;
            margin-left: 5px;
            font-size: 25px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <nav >
        <label >Eventy</label>
        <ul class="nav-right">
            <li><a href="" id="sign-in">Sign in</a></li>
           <li> <a href="" id="sign-up">Sign up</a></li>

        </ul>
    </nav>
    <div class="container">

        <div ><img src="health.png" alt="Health Image" id="box1"></div>

        <div class="h">
            <h4>Health Seminar</h4>
            <p>Starting date:2021 july 01</p>
            <p>Organized By Least Civic Center</p>
            <p><b>Vip</b> [$100.00]</p>
            <p> <b> Child General</b> </p>
            <p> <b> Admission (Ages 4-12)</b></p>
            <hr>
            <p> <b> health care</b> ($20.40)</p>

        </div>
    </div>

    <div class="container2">
        <div>
            <h4>About this event</h4>
                <p id="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, dolores doloremque laboriosam accusamus officiis rem soluta voluptatum? Itaque delectus, voluptatibus accusantium autem perspiciatis nobis placeat voluptas possimus maxime repellat mollitia aperiam ratione est sapiente. Reiciendis eius quo temporibus hic voluptas. Voluptatum labore non ipsam, neque accusamus voluptas facere quisquam dicta blanditiis, eveniet commodi nam nisi quo. Pariatur, tenetur fugiat rerum, quam veniam ipsam vero cum tempora suscipit fugit reprehenderit? Veritatis aspernatur dolore in libero placeat velit nulla. Vel doloremque minima voluptatibus eum, totam odit laborum repellendus libero omnis incidunt? Libero iure quo nihil. Et eligendi quasi maxime, incidunt a vero vel, quas laborum suscipit quam nihil inventore cum quisquam labore deleniti beatae dolor, amet corrupti velit! Laudantium nesciunt vero cumque perferendis, voluptates repellendus deserunt officiis, soluta commodi cupiditate quaerat pariatur iste illum omnis </p>
        </div>
        <div>
            <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem quis quidem ipsa voluptates optio numquam non voluptas excepturi, ullam quod provident corrupti sit consectetur a aliquid, at error. Suscipit ea ad illo? Aut, expedita nihil? Hic amet fuga officiis neque nesciunt qui reiciendis ratione assumenda deleniti nisi minima, eaque aliquid magni veritatis porro eveniet, voluptatem ad quaerat asperiores non laborum excepturi corporis laudantium velit? Ullam debitis aspernatur amet illum.</p>
        </div>

    </div>


</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});