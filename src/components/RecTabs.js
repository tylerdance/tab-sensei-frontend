import React, { Component } from 'react';

class RecTabs extends Component {
    
    render() { 
        const bestSongsInTheWorld = [
            {
                title: 'Life is a Highway',
                artist: 'Rascall Flatts',
                url: 'https://www.songsterr.com/a/wsa/rascal-flatts-life-is-a-highway-tab-s78918t2',
                id: '78918'
            },
            {
                title: 'Skinny Love',
                artist: 'Bon Iver',
                url: 'https://www.songsterr.com/a/wsa/bon-iver-skinny-love-tab-s32167t0',
                id: '32167'
            },
            {
                title: 'Re: Stacks',
                artist: 'Bon Iver',
                url: 'https://www.songsterr.com/a/wsa/bon-iver-re-stacks-tab-s66534t0',
                id: '66534'
            },
            {
                title: 'Only Love',
                artist: 'Ben Howard',
                url: 'http://songsterr.com/a/wsa/ben-howard-only-love-tab-s386347t0',
                id: '386347'
            },
            {
                title: 'Promise',
                artist: 'Ben Howard',
                url: 'https://www.songsterr.com/a/wsa/ben-howard-promise-tab-s402686t0',
                id: '402686'
            },
            {
                title: 'The Shadow Proves the Sunshine',
                artist: 'Switchfoot',
                url: 'https://www.songsterr.com/a/wsa/switchfoot-the-shadow-proves-the-sunshine-tab-s410511t2',
                id: '410511'
            },
            {
                title: 'Turmoil and Tinfoil',
                artist: 'Billy Strings',
                url: 'https://www.songsterr.com/a/wsa/billy-strings-turmoil-and-tinfoil-tab-s473758t0',
                id: '473758'
            },
            {
                title: 'Free Bird',
                artist: 'Lynyrd Skynyrd',
                url: 'https://www.songsterr.com/a/wsa/lynyrd-skynyrd-free-bird-tab-s21t3',
                id: '21'
            },
            {
                title: 'Sweet Child O\' Mine',
                artist: 'Guns N\' Roses',
                url: 'https://www.songsterr.com/a/wsa/guns-n-roses-sweet-child-o-mine-tab-s23t2',
                id: '23'
            },
            {
                title: 'Voodoo Child',
                artist: 'Jimi Hendrix',
                url: 'https://www.songsterr.com/a/wsa/jimi-hendrix-voodoo-child-tab-s39275t0',
                id: '39275'
            },
            {
                title: 'American Idiot',
                artist: 'Green Day',
                url: 'https://www.songsterr.com/a/wsa/green-day-american-idiot-tab-s214t3',
                id: '214'
            },
            {
                title: 'In Too Deep',
                artist: 'Sum 41',
                url: 'https://www.songsterr.com/a/wsa/sum-41-in-too-deep-tab-s90377t3',
                id: '90377'
            },
            {
                title: 'Jammin',
                artist: 'Bob Marley',
                url: 'https://www.songsterr.com/a/wsa/bob-marley-jammin-tab-s12709t0',
                id: '12709'
            },
            {
                title: 'Sweet Home Alabama',
                artist: 'Lynyrd Skynyrd',
                url: 'https://www.songsterr.com/a/wsa/lynyrd-skynyrd-sweet-home-alabama-tab-s58984t0',
                id: '58984'
            },
            {
                title: 'Hotel California',
                artist: 'The Eagles',
                url: 'https://www.songsterr.com/a/wsa/the-eagles-hotel-california-tab-s447t5',
                id: '447'
            },
            {
                title: 'Back In Black',
                artist: 'AC/DC',
                url: 'https://www.songsterr.com/a/wsa/ac-dc-back-in-black-tab-s1024t2',
                id: '1024'
            },
            {
                title: 'Killing In The Name Of',
                artist: 'Rage Against The Machine',
                url: 'https://www.songsterr.com/a/wsa/rage-against-the-machine-killing-in-the-name-of-tab-s393865t1',
                id: '393865'
            },
            {
                title: 'Jessica',
                artist: 'The Allman Brothers Band',
                url: 'https://www.songsterr.com/a/wsa/the-allman-brothers-band-jessica-tab-s445t1',
                id: '445'
            },
            {
                title: 'Pride and Joy',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-pride-and-joy-tab-s240t1',
                id: '240'
            },
            {
                title: 'Little Wing',
                artist: 'Jimi Hendrix',
                url: 'https://www.songsterr.com/a/wsa/jimi-hendrix-little-wing-tab-s321t0',
                id: '321'
            },
            {
                title: 'While My Guitar Gently Weeps',
                artist: 'The Beatles',
                url: 'https://www.songsterr.com/a/wsa/the-beatles-while-my-guitar-gently-weeps-tab-s373t2',
                id: '373'
            },
            {
                title: 'Cocaine',
                artist: 'Eric Clapton',
                url: 'https://www.songsterr.com/a/wsa/eric-clapton-cocaine-tab-s374t1',
                id: '374'
            },
            {
                title: 'Tears in Heaven',
                artist: 'Eric Clapton',
                url: 'https://www.songsterr.com/a/wsa/eric-clapton-tears-in-heaven-tab-s4t2',
                id: '4'
            },
            {
                title: 'Stairway to Heaven',
                artist: 'Led Zeppelin',
                url: 'https://www.songsterr.com/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1',
                id: '27'
            },
            {
                title: 'Over The Hills And Far Away',
                artist: 'Led Zeppelin',
                url: 'https://www.songsterr.com/a/wsa/led-zeppelin-over-the-hills-and-far-away-tab-s11714t0',
                id: '11714'
            },
            {
                title: 'Texas Flood',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-texas-flood-tab-s8709t1',
                id: '8709'
            },
            {
                title: 'Scuttle Buttin',
                artist: 'Stevie Ray Vaughan',
                url: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-scuttle-buttin-tab-s36550t2',
                id: '36550'
            },
            {
                title: 'Rock You Like A Hurricane',
                artist: 'Scorpions',
                url: 'https://www.songsterr.com/a/wsa/scorpions-rock-you-like-a-hurricane-tab-s337t2',
                id: '337'
            },
            {
                title: 'Boulevard Of Broken Dreams',
                artist: 'Green Day',
                url: 'https://www.songsterr.com/a/wsa/green-day-boulevard-of-broken-dreams-tab-s92866t3',
                id: '92866'
            },
            {
                title: 'Another Brick In The Wall',
                artist: 'Pink Floyd',
                url: 'https://www.songsterr.com/a/wsa/pink-floyd-another-brick-in-the-wall-tab-s303t4',
                id: '303'
            },
            {
                title: 'Comfortably Numb',
                artist: 'Green Day',
                url: 'https://www.songsterr.com/a/wsa/pink-floyd-comfortably-numb-tab-s271t2',
                id: '271'
            },
           
        ]

        console.log(bestSongsInTheWorld.length)

        let num = Math.floor(Math.random() * bestSongsInTheWorld.length)
        let song = bestSongsInTheWorld[num].title


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
                <h3>Recommended Tabs</h3>
                <div className='each_rec_song'>
                    <a href={song1.url} target='_blank'>{song1.title}</a> 
                    <br />
                    by: {song1.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song2.url} target='_blank'>{song2.title}</a> 
                    <br />
                    by: {song2.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song3.url} target='_blank'>{song3.title}</a> 
                    <br />
                    by: {song3.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song4.url} target='_blank'>{song4.title}</a> 
                    <br />
                    by: {song4.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song5.url} target='_blank'>{song5.title}</a> 
                    <br />
                    by: {song5.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song6.url} target='_blank'>{song6.title}</a> 
                    <br />
                    by: {song6.artist}
                </div>
                <div className='each_rec_song'>
                    <a href={song7.url} target='_blank'>{song7.title}</a> 
                    <br />
                    by: {song7.artist}
                </div>

            </div>
         );
    }
}
 
export default RecTabs;

        
        