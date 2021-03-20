import React, { Component } from 'react';

class RecTabs extends Component {
    render() { 
        const bestSongsInTheWorld = [
            {
                title: 'Skinny Love',
                artist: 'Bon Iver',
                url: 'https://www.songsterr.com/a/wsa/bon-iver-skinny-love-tab-s32167t0',
                id: '32167',
                image: 'https://media.npr.org/assets/img/2016/12/21/boniver_wide-77af73e6b2d1e60a1dc04bdc8b255f11d4852746.jpg?s=1400',
            },
            {
                title: 'Re: Stacks',
                artist: 'Bon Iver',
                url: 'https://www.songsterr.com/a/wsa/bon-iver-re-stacks-tab-s66534t0',
                id: '66534',
                image: 'https://media.npr.org/assets/img/2016/12/21/boniver_wide-77af73e6b2d1e60a1dc04bdc8b255f11d4852746.jpg?s=1400',
            },
            {
                title: 'Only Love',
                artist: 'Ben Howard',
                url: 'http://songsterr.com/a/wsa/ben-howard-only-love-tab-s386347t0',
                id: '386347',
                image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/B4A6NaW-3ySbCEUi7fMZDvRVodc=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/KEWDWCFA6QI6JFOT2S7WAIOUGA.jpg',
            },
            {
                title: 'Promise',
                artist: 'Ben Howard',
                url: 'https://www.songsterr.com/a/wsa/ben-howard-promise-tab-s402686t0',
                id: '402686',
                image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/B4A6NaW-3ySbCEUi7fMZDvRVodc=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/KEWDWCFA6QI6JFOT2S7WAIOUGA.jpg',
            },
            {
                title: 'The Shadow Proves the Sunshine',
                artist: 'Switchfoot',
                url: 'https://www.songsterr.com/a/wsa/switchfoot-the-shadow-proves-the-sunshine-tab-s410511t2',
                id: '410511',
                image: 'https://www.stereoboard.com/images/artistimages/switchfoot.jpg',
            },
            {
                title: 'Sweet Child O\' Mine',
                artist: 'Guns N\' Roses',
                url: 'https://www.songsterr.com/a/wsa/guns-n-roses-sweet-child-o-mine-tab-s23t2',
                id: '23',
                image: 'https://guitar.com/wp-content/uploads/2020/07/slash-guns-n-roses@1400x1050.jpg',
            },
            {
                title: 'Jessica',
                artist: 'The Allman Brothers Band',
                url: 'https://www.songsterr.com/a/wsa/the-allman-brothers-band-jessica-tab-s445t1',
                id: '445',
                image: 'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/21theallmanbrothersband.jpg?itok=kXRQFW6F',
            },
            {
                title: 'Pride and Joy',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-pride-and-joy-tab-s240t1',
                id: '240',
                image: 'https://downbeat.com/images/news/_full/GG_SRV_credit_%C2%A9PaulNatkin.jpg',
            },
            {
                title: 'Little Wing',
                artist: 'Jimi Hendrix',
                url: 'https://www.songsterr.com/a/wsa/jimi-hendrix-little-wing-tab-s321t0',
                id: '321',
                image: 'https://media1.popsugar-assets.com/files/thumbor/9qbDJGxepr8vZC2nF3fEEBI5mAU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/19/985/n/1922283/5a0da2df5c6c8568d92aa0.02986671_/i/Jimi-Hendrix-Impact-Music-Industry.jpg',
            },
            {
                title: 'While My Guitar Gently Weeps',
                artist: 'The Beatles',
                url: 'https://www.songsterr.com/a/wsa/the-beatles-while-my-guitar-gently-weeps-tab-s373t2',
                id: '373',
                image: 'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg',
            },
            {
                title: 'Cocaine',
                artist: 'Eric Clapton',
                url: 'https://www.songsterr.com/a/wsa/eric-clapton-cocaine-tab-s374t1',
                id: '374',
                image: 'https://miro.medium.com/max/1024/0*yOynPZAWJJwgK7Ab.jpg',
            },
            {
                title: 'Tears in Heaven',
                artist: 'Eric Clapton',
                url: 'https://www.songsterr.com/a/wsa/eric-clapton-tears-in-heaven-tab-s4t2',
                id: '4',
                image: 'https://miro.medium.com/max/1024/0*yOynPZAWJJwgK7Ab.jpg',
            },
            {
                title: 'Stairway to Heaven',
                artist: 'Led Zeppelin',
                url: 'https://www.songsterr.com/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1',
                id: '27',
                image: 'https://cdn.cnn.com/cnn/interactive/2018/10/entertainment/led-zeppelin-cnnphotos/media/01.jpg',
            },
            {
                title: 'Over The Hills And Far Away',
                artist: 'Led Zeppelin',
                url: 'https://www.songsterr.com/a/wsa/led-zeppelin-over-the-hills-and-far-away-tab-s11714t0',
                id: '11714',
                image: 'https://cdn.cnn.com/cnn/interactive/2018/10/entertainment/led-zeppelin-cnnphotos/media/01.jpg',
            },
            {
                title: 'Texas Flood',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-texas-flood-tab-s8709t1',
                id: '8709',
                image: 'https://downbeat.com/images/news/_full/GG_SRV_credit_%C2%A9PaulNatkin.jpg',
            },
            {
                title: 'Scuttle Buttin',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-scuttle-buttin-tab-s36550t2',
                id: '36550',
                image: 'https://downbeat.com/images/news/_full/GG_SRV_credit_%C2%A9PaulNatkin.jpg',
            },
            {
                title: 'Another Brick In The Wall',
                artist: 'Pink Floyd',
                url: 'https://www.songsterr.com/a/wsa/pink-floyd-another-brick-in-the-wall-tab-s303t4',
                id: '303',
                image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg',
            },
            {
                title: 'Comfortably Numb',
                artist: 'Pink Floyd',
                url: 'https://www.songsterr.com/a/wsa/pink-floyd-comfortably-numb-tab-s271t2',
                id: '271',
                image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg',
            },
]

        // console.log(bestSongsInTheWorld.length)
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
          
              // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        }
        
        let shuffled = shuffle(bestSongsInTheWorld)
        const song1 = shuffled[0]
        const song2 = shuffled[1]
        const song3 = shuffled[2]
        const song4 = shuffled[3]
        const song5 = shuffled[4]
        const song6 = shuffled[5]
        const song7 = shuffled[6]
        
        return ( 
            <div>
               <h2 id="featured_tabs">Featured Tabs</h2>
            <div id="rec_tabs_line">
                <a href={song1.url} target="_blank" rel="noreferrer">
                <div className='each_rec_song'>
                <img className="tab_image" src={song1.image} alt="" />
                <br/>
                <p className="song_title" >{song1.title}</p>
                <p className="song_artist">{song1.artist}</p>
            </div></a>
            <a href={song2.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song2.image} alt="" />
                <br/>
                <p className="song_title" >{song2.title}</p>
                <p className="song_artist">{song2.artist}</p>
            </div></a>
            <a href={song3.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song3.image} alt="" />
                <br/>
                <p className="song_title" >{song3.title}</p>
                <p className="song_artist">{song3.artist}</p>
            </div></a>
            <a href={song4.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song4.image} alt="" />
                <br/>
                <p className="song_title" >{song4.title}</p>
                <p className="song_artist">{song4.artist}</p>
            </div></a>
            <a href={song5.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song5.image} alt="" />
                <br/>
                <p className="song_title" >{song5.title}</p>
                <p className="song_artist">{song5.artist}</p>
            </div></a>
            <a href={song6.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song6.image} alt="" />
                <br/>
                <p className="song_title" >{song6.title}</p>
                <p className="song_artist">{song6.artist}</p>
            </div></a>
            <a href={song6.url} target='_blank'>
                <div className='each_rec_song'>
                <img className="tab_image" src={song7.image} alt="" />
                <br/>
                <p className="song_title" >{song7.title}</p>
                <p className="song_artist">{song7.artist}</p>
            </div></a>
            </div>
            </div>
        );
    }
}
 
export default RecTabs;