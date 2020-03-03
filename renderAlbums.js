// need help on this. Use forEach? Having a hard time accessing nested array objects.
// probably use nested for loop?

// function renderAlbums(albums) {
//     return `
//         <div>
//         <h1>Artists</h1>
//         ${albums.map(renderAlbum)} 
//         </div>
//         `
// }


function renderAlbums(albums) {

    var renderAlbumsHTML = albums.map(renderAlbum);

    var albumHTML = 
    `
        <div class="album">
            ${renderAlbumsHTML.join("")}
        </div>
    `;
    return albumHTML;
};



function renderAlbum(album) {
    
    return `
        <div class="card color-black bg-light py-3 px-3" style="width: 600px">
            <h1>${album.artist}</h1>
            <hr>
            <div class="card-body-right">
            <br>
            <h3>Rotten Tomatoes</h3>
            
       </div>
       `;
}


function albums() {

    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}