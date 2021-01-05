import React, { Component } from 'react';

class RecTabs extends Component {
    render() { 
        const bestSongsInTheWorld = [
            {
                title: 'Life is a Highway',
                artist: 'Rascall Flatts',
                url: 'https://www.songsterr.com/a/wsa/rascal-flatts-life-is-a-highway-tab-s78918t2',
                id: '78918',
                image: 'https://www.etonline.com/sites/default/files/images/2020-01/gettyimages-170002171.jpg'
            },
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
                title: 'Turmoil and Tinfoil',
                artist: 'Billy Strings',
                url: 'https://www.songsterr.com/a/wsa/billy-strings-turmoil-and-tinfoil-tab-s473758t0',
                id: '473758',
                image: 'https://www.pollstar.com/Image/Photos/2020/01/adc6def3-6d31-44d0-aa7e-b366f925e374-boi.jpg',
            },
            {
                title: 'Free Bird',
                artist: 'Lynyrd Skynyrd',
                url: 'https://www.songsterr.com/a/wsa/lynyrd-skynyrd-free-bird-tab-s21t3',
                id: '21',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Lynyrd_Skynyrd_band_%281973%29.jpg',
            },
            {
                title: 'Sweet Child O\' Mine',
                artist: 'Guns N\' Roses',
                url: 'https://www.songsterr.com/a/wsa/guns-n-roses-sweet-child-o-mine-tab-s23t2',
                id: '23',
                image: 'https://guitar.com/wp-content/uploads/2020/07/slash-guns-n-roses@1400x1050.jpg',
            },
            {
                title: 'Voodoo Child',
                artist: 'Jimi Hendrix',
                url: 'https://www.songsterr.com/a/wsa/jimi-hendrix-voodoo-child-tab-s39275t0',
                id: '39275',
                image: 'https://media1.popsugar-assets.com/files/thumbor/9qbDJGxepr8vZC2nF3fEEBI5mAU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/19/985/n/1922283/5a0da2df5c6c8568d92aa0.02986671_/i/Jimi-Hendrix-Impact-Music-Industry.jpg',
            },
            {
                title: 'American Idiot',
                artist: 'Green Day',
                url: 'https://www.songsterr.com/a/wsa/green-day-american-idiot-tab-s214t3',
                id: '214',
                image: 'https://i.guim.co.uk/img/media/55760e085efd29851aaa9039781334c63e478c85/0_300_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4900fb962c83b5e2f0c1f904985a55c',
            },
            {
                title: 'In Too Deep',
                artist: 'Sum 41',
                url: 'https://www.songsterr.com/a/wsa/sum-41-in-too-deep-tab-s90377t3',
                id: '90377',
                image: 'https://i.scdn.co/image/3ad9fb703dffe649bec3ec92abccbb280276316b',
            },
            {
                title: 'Jammin',
                artist: 'Bob Marley',
                url: 'https://www.songsterr.com/a/wsa/bob-marley-jammin-tab-s12709t0',
                id: '12709',
                image: 'https://images.theconversation.com/files/144359/original/image-20161103-25349-1jdv0b3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            },
            {
                title: 'Sweet Home Alabama',
                artist: 'Lynyrd Skynyrd',
                url: 'https://www.songsterr.com/a/wsa/lynyrd-skynyrd-sweet-home-alabama-tab-s58984t0',
                id: '58984',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Lynyrd_Skynyrd_band_%281973%29.jpg',
            },
            {
                title: 'Hotel California',
                artist: 'The Eagles',
                url: 'https://www.songsterr.com/a/wsa/the-eagles-hotel-california-tab-s447t5',
                id: '447',
                image: 'https://cdn.britannica.com/50/198850-050-46C563B5/Eagles-Bernie-Leadon-Don-Henley-Glenn-Frey.jpg',
            },
            {
                title: 'Back In Black',
                artist: 'AC/DC',
                url: 'https://www.songsterr.com/a/wsa/ac-dc-back-in-black-tab-s1024t2',
                id: '1024',
                image: 'https://www.rollingstone.com/wp-content/uploads/2020/07/acdc-essential-songs.jpg',
            },
            {
                title: 'Killing In The Name Of',
                artist: 'Rage Against The Machine',
                url: 'https://www.songsterr.com/a/wsa/rage-against-the-machine-killing-in-the-name-of-tab-s393865t1',
                id: '393865',
                image: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/F2Q4Y6BBUREITOQI2F4BBNUUFU.jpg',
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
                title: 'Rock You Like A Hurricane',
                artist: 'Scorpions',
                url: 'https://www.songsterr.com/a/wsa/scorpions-rock-you-like-a-hurricane-tab-s337t2',
                id: '337',
                image: 'https://images.discovery-prod.axs.com/2017/08/scorpions_08-21-17_7_599b30e5558d3.jpg',
            },
            {
                title: 'Boulevard Of Broken Dreams',
                artist: 'Green Day',
                url: 'https://www.songsterr.com/a/wsa/green-day-boulevard-of-broken-dreams-tab-s92866t3',
                id: '92866',
                image: 'https://i.guim.co.uk/img/media/55760e085efd29851aaa9039781334c63e478c85/0_300_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4900fb962c83b5e2f0c1f904985a55c',
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
            {
                title: 'Watch It Fall',
                artist: 'Billy Strings',
                url: 'https://www.songsterr.com/a/wsa/billy-strings-watch-it-fall-tab-s476793t0',
                id: '476793',
                image: 'https://www.pollstar.com/Image/Photos/2020/01/adc6def3-6d31-44d0-aa7e-b366f925e374-boi.jpg',
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
        // const song7 = shuffled[6]
        
        return ( 
            <div>
               
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
            </div>
            </div>
        );
    }
}
 
export default RecTabs;