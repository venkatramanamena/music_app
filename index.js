var mp=[
    {
        "id": "1",
        "track": "Without You",
        "artist": "Avicii",
        "albumCover": "https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3"
    },
    {
        "track": "Youngblood",
        "artist": " 5 Seconds of Summer",
        "albumCover": "https://pm1.narvii.com/6806/3e2b13347653f657cefb76e8da003cf49e17adeav2_hq.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/5+Seconds+Of+Summer+-+Youngblood+(+).mp3",
        "id": "2"
    },
    {
        "track": "I'm a Mess",
        "artist": "Bebe Rexha",
        "albumCover": "https://images.genius.com/bdb01bd972ae95534994ea013e7a3e2e.1000x1000x1.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Bebe+Rexha+-+I+m+A+Mess.mp3",
        "id": "3"
    },
    {
        "track": "Where we started",
        "artist": "Lost Sky",
        "albumCover": "https://i.kfs.io/album/global/36258062,0v1/fit/500x500.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Lost+Sky+-+Where+We+Started+feat.+Jex.mp3",
        "id": "4"
    },
    {
        "track": "Ignite",
        "artist": "Alan Walker & K-391",
        "albumCover": "https://cdns-images.dzcdn.net/images/cover/326d976522e03136299c17cbd06bcfd4/264x264.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Alan+Walker+%26+K-391+-+Ignite+ft.+Julie+Bergan+%26+Seungri.mp3",
        "id": "5"
    },
    {
        "track": "East of Eden",
        "artist": "Zella Day",
        "albumCover": "https://avatar-ex-swe.nixcdn.com/song/2018/06/18/3/3/7/1/1529309298798.jpg",
        "file": "https://play.imusicvn.com/stream/ppvQNcGb2Q77",
        "id": "6"
    },
    {
        "track": "Superhero",
        "artist": "Unknown Brain",
        "albumCover": "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/59/09/96/59099665-fd91-ac78-04c1-a6675907926d/source/1200x1200bb.jpg",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Unknown+Brain+-+Superhero+(feat.+Chris+Linton)+%5BNCS+Release%5D.mp3",
        "id": "7"
    },
    {
        "id": "8",
        "track": "Headlights",
        "artist": "Alan walker",
        "albumCover": "https://djmaza.live/siteuploads/thumb/sft10/4502_resize2x_200x200.webp",
        "file": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3"
    }

]
var left_col = document.getElementById("left_col");
var right_col =document.getElementById("right_col");

var music = document.getElementById("music");

    left_col.innerHTML=`
    <img src="https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg">
    <audio id="music0">
    <source src="https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3">
   </audio>
    <div id="width">
    <div
    id="inner_width">
    </div>
    </div>
    <p id="time"></p>
    <div  id="icons">
    <i class="fa-solid fa-shuffle"></i>
    <i id="backwardplay" onclick="back(${0})" class="fa-solid fa-backward-step"></i>
    <i id="songplay" title="play" onclick="playmusic1(${0})" class="fa-regular fa-circle-play"></i>
    <i id="forwardplay" onclick="forward(${0})" class="fa-solid fa-forward-step"></i>
    <i onclick="repeat(${0})"  class="fa-solid fa-repeat"></i>
    </div>
    <h3 style="margin:10px 0;opacity:0.8;font-weight:800">${mp[0].track}</h3>
    <p style="margin:10px 0;opacity:0.5;font-weight:600">${mp[0].artist}</p>`
for(var i = 0;i<mp.length;i++)
{
    right_col.innerHTML +=`
    <div id="rightcol2" onclick="playmusic(${mp[i].id})">
    <div id="right_img">
        <img id="rimg" src="${mp[i].albumCover}">
    </div>
    <div id="details">
        <h3 style="margin:0px 0 0 0px;opacity:0.7;font-weight:600;">${mp[i].track}</h3>
        <p style="margin:17px 0;opacity:0.6;font-weight:200">${mp[i].artist}</p>
    </div>
    
</div>
<div id="underline">

</div>
    `
}


function playmusic(id){
    sessionStorage.setItem("index",JSON.stringify(id));
    var ind = JSON.parse(sessionStorage.getItem("index"));
    sessionStorage.setItem("forwardindeex",JSON.stringify(id-1));
    console.log(ind);
    left_col.innerHTML=`
    <img src="${mp[ind-1].albumCover}">
    <audio id="music${ind-1}">
    <source src="${mp[ind-1].file}">
   </audio>
    <div id="width">
    <div
    id="inner_width">
    </div>
    </div>
    <p id="time"></p>
    <div  id="icons">
    <i class="fa-solid fa-shuffle"></i>
    <i id="backwardplay" onclick="back(${ind-1})" class="fa-solid fa-backward-step"></i>
    <i id="songplay" title="play" onclick="playmusic1(${ind-1})" class="fa-regular fa-circle-play"></i>
    <i id="forwardplay" onclick="forward(${ind-1})" class="fa-solid fa-forward-step"></i>
    <i onclick="repeat(${ind-1})"  class="fa-solid fa-repeat"></i>
    </div>
    <h3 style="margin:10px 0;opacity:0.8;font-weight:800">${mp[ind-1].track}</h3>
    <p style="margin:10px 0;opacity:0.5;font-weight:600">${mp[ind-1].artist}</p>`
    
}
var running = JSON.parse(sessionStorage.getItem("played"));
if(running==null)
{
    sessionStorage.setItem("played",false);
}
function playmusic1(id)
{
    var runstatus = JSON.parse(sessionStorage.getItem("played"));
    if(runstatus==false)
    {
        sessionStorage.setItem("played",true);
        var songplay = document.getElementById("songplay");
        songplay.className = "fa-regular fa-circle-pause"
    
        var music = document.getElementById(`music${id}`);
        

        var progress = document.getElementById("inner_width");
        music.addEventListener("timeupdate",function()
        {
            var time = document.getElementById("time");
            // time.innerText=(parseInt(music.currentTime)/60)+".0"+"/"+(parseInt(music.duration))/60;
            progress.style.width = (music.currentTime/music.duration)*100+"%";
        });

        music.play();
    }
    else if(runstatus==true)
    {
        sessionStorage.setItem("played",false);
        var songplay = document.getElementById("songplay");
        songplay.className = "fa-regular fa-circle-play"
    
        var music = document.getElementById(`music${id}`);
        music.pause();
    }
    
  

}
function forward(id)
{
    // var fd = JSON.parse(sessionStorage.getItem("forwardindeex"));

    var music = document.getElementById(`music${id+1}`);
    left_col.innerHTML=`
    <img src="${mp[id+1].albumCover}">
    <audio id="music${id+1}">
    <source src="${mp[id+1].file}">
   </audio>
    <div id="width">
    <div
    id="inner_width">
    </div>
    </div>
    <p id="time"></p>
    <div  id="icons">
    <i class="fa-solid fa-shuffle"></i>
    <i id="backwardplay" onclick="back(${id+1})" class="fa-solid fa-backward-step"></i>
    <i id="songplay" title="play" onclick="playmusic1(${id+1})" class="fa-regular fa-circle-play"></i>
    <i id="forwardplay" onclick="forward(${id+1})" class="fa-solid fa-forward-step"></i>
    <i onclick="repeat(${id+1})" class="fa-solid fa-repeat"></i>
    </div>
    <h3 style="margin:10px 0;opacity:0.8;font-weight:800">${mp[id+1].track}</h3>
    <p style="margin:10px 0;opacity:0.5;font-weight:600">${mp[id+1].artist}</p>`
   
    
}
function back(id)
{
    if(id==0)
    {
        left_col.innerHTML=`
        <img src="https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg">
        <audio id="music0">
        <source src="https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3">
       </audio>
        <div id="width">
        <div
        id="inner_width">
        </div>
        </div>
        <p id="time"></p>
        <div  id="icons">
        <i  class="fa-solid fa-shuffle"></i>
        <i id="backwardplay" onclick="back(${0})" class="fa-solid fa-backward-step"></i>
        <i id="songplay" title="play" onclick="playmusic1(${0})" class="fa-regular fa-circle-play"></i>
        <i id="forwardplay" onclick="forward(${0})" class="fa-solid fa-forward-step"></i>
        <i onclick="repeat(${0})"  class="fa-solid fa-repeat"></i>
        </div>
        <h3 style="margin:10px 0;opacity:0.8;font-weight:800">${mp[0].track}</h3>
        <p style="margin:10px 0;opacity:0.5;font-weight:600">${mp[0].artist}</p>`

    }
    else{
        var music = document.getElementById(`music${id-1}`);
        left_col.innerHTML=`
        <img src="${mp[id-1].albumCover}">
        <audio id="music${id-1}">
        <source src="${mp[id-1].file}">
       </audio>
        <div id="width">
        <div
        id="inner_width">
        </div>
        </div>
        <p id="time"></p>
        <div  id="icons">
        <i class="fa-solid fa-shuffle"></i>
        <i id="backwardplay" onclick="back(${id-1})" class="fa-solid fa-backward-step"></i>
        <i id="songplay" title="play" onclick="playmusic1(${id-1})" class="fa-regular fa-circle-play"></i>
        <i id="forwardplay" onclick="forward(${id-1})" class="fa-solid fa-forward-step"></i>
        <i onclick="repeat(${id-1})" class="fa-solid fa-repeat"></i>
        </div>
        <h3 style="margin:10px 0;opacity:0.8;font-weight:800">${mp[id-1].track}</h3>
        <p style="margin:10px 0;opacity:0.5;font-weight:600">${mp[id-1].artist}</p>`
    }
}

function repeat(id)
{
 
    var runstatus = JSON.parse(sessionStorage.getItem("played"));

        sessionStorage.setItem("played",true);
        var songplay = document.getElementById("songplay");
        songplay.className = "fa-regular fa-circle-pause"
    
        var music = document.getElementById(`music${id}`);
        music.play();
    
    var music = document.getElementById(`music${id}`);
    
    music.currentTime=0;
    music.play();
    
music.addEventListener("timeupdate",function()
{
    
    var progress = document.getElementById("inner_width");
    // time.innerText=(parseInt(music.currentTime)/60)+".0"+"/"+(parseInt(music.duration))/60;
    progress.style.width = (music.currentTime/music.duration)*100+"%";
});
    
}





