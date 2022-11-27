$(document).ready(function(){

    var setList = [
        {
            id: 0,
            index: 0,
            name: "Ocean",
            artist: "Thaehan",
            cover: "./assets/images/song_covers/Ocean.webp",
            path: "./assets/songs/Ocean.mp3"
        }
        ,
        {
            id: 1,
            index: 1,
            name: "Wait for you",
            artist: "Kurt Stewart",
            cover: "./assets/images/song_covers/wait for you.webp",
            path: "./assets/songs/Wait for you.mp3"
        }
        ,
        {
            id: 2,
            index: 2,
            name: "Bikes at the pier",
            artist: "NOGYMX",
            cover: "./assets/images/song_covers/bikes at the pier.webp",
            path: "./assets/songs/Bikes at the pier.mp3"
        }
        ,
        {
            id: 3,
            index: 3,
            name: "Rainy",
            artist: "COSMONKEY",
            cover: "./assets/images/song_covers/rainy.webp",
            path: "./assets/songs/Rainy.mp3"
        }
        ,
        {
            id: 4,
            index: 4,
            name: "Homies",
            artist: "Ouska",
            cover: "./assets/images/song_covers/homies.webp",
            path: "./assets/songs/Homies.mp3"
        }
        ,
        {
            id: 5,
            index: 5,
            name: "Silhouette",
            artist: "ENRA & dr. niar",
            cover: "./assets/images/song_covers/silhouette.webp",
            path: "./assets/songs/Silhouette.mp3"
        }
        ,
        {
            id: 6,
            index: 6,
            name: "Beneath The Trees",
            artist: "Mell-ø",
            cover: "./assets/images/song_covers/beneath the trees.webp",
            path: "./assets/songs/Beneath The Trees.mp3"
        }

    ]

    var radio_player = document.querySelector('.radio_container audio')

    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    function update_radio_container(obj){
        var song_name = obj.name
        var song_artist = obj.artist
        var song_cover = obj.cover

        document.querySelector(".radio_container_text span.name").innerHTML = song_artist
        document.querySelector(".radio_container_text span.artist").innerHTML = song_name
        document.querySelector(".img_play_container img").src = song_cover
    }
    
    function radio_play_init(){
        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        var playing_now_index = getRandomInt(setList.length - 1)
        var playing_now = setList[playing_now_index]
        var initial_vol = radio_player.getAttribute("initial-volume")

        radio_player.setAttribute("src", playing_now.path)
        radio_player.setAttribute("song_id", playing_now.id)
        radio_player.volume = initial_vol

        update_radio_container(playing_now)

    }

    function radio_play_next(){
        var playing_now = setList.filter((item)=>{
            return item.id == radio_player.getAttribute("song_id")
        })

        var playing_now_index = playing_now[0].index
        var playing_next_index = playing_now_index + 1 >= setList.length ? 0 : playing_now_index + 1
        var playing_next = setList[playing_next_index]

        console.log(playing_now_index, playing_next_index)

        
        radio_player.setAttribute("src", playing_next.path)
        radio_player.setAttribute("song_id", playing_next.id)
        radio_player.play()

        update_radio_container(playing_next)
        
    }

    function radio_play_prev(){
        var playing_now = setList.filter((item)=>{
            return item.id == radio_player.getAttribute("song_id")
        })

        var playing_now_index = playing_now[0].index
        var playing_prev_index = playing_now_index - 1 < 0 ? setList.length - 1 : playing_now_index - 1
        var playing_prev = setList[playing_prev_index]

        radio_player.setAttribute("src", playing_prev.path)
        radio_player.setAttribute("song_id", playing_prev.id)
        radio_player.play()

        update_radio_container(playing_prev)

    }

    radio_play_init()

    function radio_player_pause(){
        var vol = 0.20;
        var initial_vol = radio_player.getAttribute("initial-volume")
        var interval = 40;
        radio_player.volume = vol >= initial_vol ? initial_vol : vol;
        var fadeout = setInterval(
            function() {
                if (vol > 0.1) {
                    vol -= 0.01;
                    radio_player.volume = vol;
                }
                else {
                    // Stop the setInterval when 0 is reached
                    clearInterval(fadeout);
                    radio_player.pause()
                }
        }, interval);
        
    }

    function radio_player_unpause(){

        var vol = radio_player.volume
        var initial_vol = radio_player.getAttribute("initial-volume")
        var interval = 40;
        radio_player.volume = vol;

        radio_player.play()

        var fadeout = setInterval(
            function() {
                if (vol < initial_vol - 0.1) {
                    vol += 0.01;
                    radio_player.volume = vol;
                }
                else {
                    // Stop the setInterval when 0 is reached
                    clearInterval(fadeout);
                }
        }, interval);
    }

    radio_player.addEventListener('ended', (event) => {
        radio_play_next()
        document.querySelector(".radio_container").classList.add("next_song")
        setInterval(()=>{
            document.querySelector(".radio_container").classList.remove("next_song")
        }, 4000)
    });

    document.querySelector(".controls .play_pause").addEventListener("click", ()=>{
        if(!radio_player.paused){
            radio_player_pause()
        }else{
            radio_player_unpause()
        }
        document.querySelector(".radio_container").classList.toggle("paused")
    })

    document.querySelector(".radio_container").addEventListener("click", (e)=>{
        if(e.currentTarget.classList.contains("not_played")){
            e.currentTarget.classList.remove("not_played")
            radio_player_unpause()
        }
    })


    document.querySelector(".next_song").addEventListener("click", ()=>{
        radio_play_next()
    })

    document.querySelector(".prev_song").addEventListener("click", ()=>{
        radio_play_prev()
    })

    
})