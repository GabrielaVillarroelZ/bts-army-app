export const getBTSAlbums = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
  
    return {
      group: [
        {
          id: 'full-1',
          name: 'Dark & Wild',
          release_date: '2014-08-20',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/ab7b99ffe69328bdfb1a88c400d30c52/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro: What am I to You', 'Danger', 'War of Hormone', 'Hip Hop Phile', 'Let Me Know', 'Rain', 'BTS Cypher PT.3: Killer', 'Interlude: What Are You Doing now', 'Can You Turn Off Your Phone', 'Blanket Kick', '24/7=heaven', 'Look Here', '2nd Grade', 'Outro: Does that make sense?']
        },
        {
          id: 'full-2',
          name: 'Wings / You Never Walk Alone',
          release_date: '2016-10-10',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/7a33855a0b67cb4b8d7364fc7a5b696f/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro: Boy Meets Evil', 'Blood Sweat & Tears', 'Begin (Solo Jungkook)', 'Lie (Solo Jimin)', 'Stigma (Solo V)', 'First Love (Solo Suga)', 'Reflection (Solo RM)', 'MAMA (Solo J-Hope)', 'Awake (Solo Jin)', 'Lost', 'BTS Cypher 4', 'Am I Wrong', '21st Century Girl', 'Two! Three!', 'Interlude: Wings', 'Spring Day', 'Not Today', 'Outro: Wings', 'A Supplementary Story: You Never Walk Alone']
        },
        {
          id: 'full-3',
          name: 'Love Yourself: Tear',
          release_date: '2018-05-18',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/6795f5a1a714dd2f050fd95195646a98/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro: Singularity', 'FAKE LOVE', 'The Truth Untold', '134340', 'Paradise', 'Love Maze', 'Magic Shop', 'Airplane pt.2', 'Anpanman', 'So What', 'Outro: Tear']
        },
        {
          id: 'full-4',
          name: 'MAP OF THE SOUL : 7',
          release_date: '2020-02-21',
          images: [{ url: 'https://m.media-amazon.com/images/I/61Pj0N8bp2L._UF894,1000_QL80_.jpg' }],
          tracks: ['Intro: Persona', 'Boy With Luv (Feat. Halsey)', 'Make It Right', 'Jamais Vu', 'Dionysus', 'Interlude: Shadow', 'Black Swan', 'Filter', 'My Time', 'Louder than bombs', 'ON', 'UGH!', '00:00 (Zero O\'Clock)', 'Inner Child', 'Friends', 'Moon', 'Respect', 'We are Bulletproof: the Eternal', 'Outro: Ego', 'ON (Feat. Sia)']
        },
        {
          id: 'full-5',
          name: 'ARIRANG',
          release_date: '2026-03-20',
          images: [{ url: 'https://shop.bts-official.us/cdn/shop/files/Digital_Cover_260226_F1.jpg?v=1773979702' }],
          tracks: ['Body to Body', 'Hooligan', 'Aliens', 'FYA', '2.0 (Follow-up track)', 'No. 29', 'SWIM (Title Track)', 'Merry Go Round', 'NORMAL', 'Like Animals', 'they don\'t know \'bout us', 'One More Night', 'Please', 'Into the Sun']
        },
        {
          id: 'spec-1',
          name: 'BE',
          release_date: '2020-11-20',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/7218df00a126bf159d852516400a1127/1900x1900-000000-81-0-0.jpg' }],
          tracks: ['Life Goes On', 'Fly To My Room', 'Blue & Grey', 'Skit', 'Telepathy', 'Dis-ease', 'Stay', 'Dynamite']
        },
        {
          id: 'spec-2',
          name: 'Proof (Anthology)',
          release_date: '2022-06-10',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/ff2321f46527178fcbe09b5164450c39/1900x1900-000000-81-0-0.jpg' }],
          tracks: ['Yet To Come', 'Run BTS', 'For Youth', '... (Incluye 3 CDs con demos inéditos y grandes éxitos)']
        }
      ],
      eps: [
        {
          id: 'ep-1',
          name: '2 Cool 4 Skool',
          release_date: '2013-06-12',
          images: [{ url: 'https://kstoryespana.es/cdn/shop/products/cokodive-bts-1st-single-album-2-cool-4-skool-3687137574992.png?v=1627327886' }],
          tracks: ['Intro: 2 Cool 4 Skool', 'No More Dream', 'Interlude', 'We Are Bulletproof Pt.2', 'Skit: Circle Room Talk', 'Outro: Circle Room Cypher']
        },
        {
          id: 'ep-2',
          name: 'O!RUL8,2?',
          release_date: '2013-09-11',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/c3f3a070650d100f0e54f0a494a9bbb5/500x500.jpg' }],
          tracks: ['Intro: O!RUL8,2?', 'N.O', 'We On', 'Skit: R U Happy Now?', 'If I Ruled The World', 'Coffee', 'BTS Cypher Pt.1', 'Attack on Bangtan', 'Paldogangsan', 'Outro: Luv In Skool']
        },
        {
          id: 'ep-3',
          name: 'Skool Luv Affair',
          release_date: '2014-02-12',
          images: [{ url: 'https://nolae.es/cdn/shop/products/bts-skool-luv-affair-431038_grande.jpg?v=1616529408' }],
          tracks: ['Intro: Skool Luv Affair', 'Boy In Luv', 'Skit: Soulmate', 'Where You From', 'Just One Day', 'Tomorrow', 'BTS Cypher Pt.2: Triptych', 'Spine Breaker', 'Jump', 'Outro: Propose']
        },
        {
          id: 'ep-4',
          name: 'The Most Beautiful Moment in Life Pt.1',
          release_date: '2015-04-29',
          images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/7/78/BTS_The_Most_Beautiful_Moment_in_Life_Part_1_pink.jpg' }],
          tracks: ['Intro: HYYH', 'I Need U', 'Hold Me Tight', 'Skit: Expectation!', 'Dope', 'Boyz with Fun', 'Converse High', 'Moving On', 'Outro: Love is Not Over']
        },
        {
          id: 'ep-5',
          name: 'The Most Beautiful Moment in Life Pt.2',
          release_date: '2015-11-30',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/c39b32173a56dba799d8abfef5f0fe65/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro: Never Mind', 'Run', 'Butterfly', 'Whalien 52', 'Ma City', 'Silver Spoon (Baepsae)', 'Skit: One Night in a Strange City', 'Autumn Leaves', 'Outro: House of Cards']
        },
        {
          id: 'ep-6',
          name: 'Love Yourself: Her',
          release_date: '2017-09-18',
          images: [{ url: 'https://m.media-amazon.com/images/I/61OTozwevnL._UF894,1000_QL80_.jpg' }],
          tracks: ['Intro: Serendipity', 'DNA', 'Best Of Me', 'dimple', 'Pied Piper', 'Skit: Billboard Music Awards Speech', 'MIC Drop', 'Go Go', 'Outro: Her']
        },
        {
          id: 'ep-7',
          name: 'MAP OF THE SOUL: PERSONA',
          release_date: '2019-04-12',
          images: [{ url: 'https://m.media-amazon.com/images/I/51wUYZ1HYmL._UF894,1000_QL80_.jpg' }],
          tracks: ['Intro: Persona', 'Boy With Luv', 'Mikrokosmos', 'Make It Right', 'HOME', 'Jamais Vu', 'Dionysus']
        }
      ],
      japanese: [
        {
          id: 'jp-1',
          name: 'Wake Up',
          release_date: '2014-12-24',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/d2fb8e7886cf28ae32c264e9579076ad/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro', 'The Stars', 'Jump', 'Danger', 'Boy In Luv', 'Just One Day', 'I Like It', 'No More Dream', 'Wake Up']
        },
        {
          id: 'jp-2',
          name: 'Youth',
          release_date: '2016-09-07',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/21264b41d0af3d12bdfd9146cfbadf64/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Introduction: Youth', 'Run', 'Fire', 'For You', 'Good Day', 'Save Me']
        },
        {
          id: 'jp-3',
          name: 'Face Yourself',
          release_date: '2018-04-04',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/eab0e6acd1cc800485967e5379fde262/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Ringwanderung', 'Best Of Me', 'Blood Sweat & Tears', 'Crystal Snow', 'Don\'t Leave Me', 'Let Go']
        },
        {
          id: 'jp-4',
          name: 'MAP OF THE SOUL : 7 ~ THE JOURNEY ~',
          release_date: '2020-07-15',
          images: [{ url: 'https://m.media-amazon.com/images/I/71+mv6WoW6L._UF894,1000_QL80_.jpg' }],
          tracks: ['Stay Gold', 'Your eyes tell', 'Lights']
        }
      ],
      solo: [
        {
          id: 'solo-rm-1',
          name: 'Indigo (RM)',
          release_date: '2022-12-02',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/49d11811af79f0569bb765157d79b64b/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Yun (with Erykah Badu)', 'Still Life (with Anderson .Paak)', 'All Day (with Tablo)', 'Forg_tful (with Kim Sawol)', 'Closer (with Paul Blanco, Mahalia)', 'Change Pt.2', 'Lonely', 'Hectic (with Colde)', 'Wild Flower (with youjeen)', 'No.2 (with parkjiyoon)']
        },
        {
          id: 'solo-rm-2',
          name: 'Right Place, Wrong Person (RM)',
          release_date: '2024-05-24',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/f25efddf48fc11303ef2ec01f9b163c6/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['Right People, Wrong Place', 'Nuts', 'out of love', 'Domodachi (feat. Little Simz)', '? (Interlude)', 'Groin', 'Heaven', 'LOST!', 'Around the world in a day (feat. Moses Sumney)', 'ㅠㅠ (Credit Roll)', 'Come back to me']
        },
        {
           id: 'solo-jin-1',
           name: 'Happy (Jin)',
           release_date: '2024-11-15',
           images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/c7a02f827161023a358d9f64955e9eba/1900x1900-000000-80-0-0.jpg' }],
           tracks: ['Running Wild', 'I\'ll Be There', 'Another Level', 'Falling', 'Heart on the Window (feat. Wendy)', 'I will come to you']
        },
        {
           id: 'solo-jin-2',
           name: 'The Astronaut (Jin)',
           release_date: '2022-10-28',
           images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/The_Astronaut_by_Jin_of_BTS_digital_single_cover_art.jpg/250px-The_Astronaut_by_Jin_of_BTS_digital_single_cover_art.jpg' }],
           tracks: ['The Astronaut']
        },
        {
           id: 'solo-jin-3',
           name: 'Echo (Jin)',
           release_date: '2025-05-16',
           images: [{ url: 'https://i.scdn.co/image/ab67616d0000b27389228504f700641956e29f5d' }],
           tracks: [" Don't Say You Love Me", 'Nothing Without Your Love', 'Loser (feat. YENA)', 'Rope It', 'With The Clouds (구름과 떠나는 여행)', 'Background','To Me, Today (오늘의 나에게)']
        },
        {
          id: 'solo-suga-1',
          name: 'D-DAY (Agust D)',
          release_date: '2023-04-21',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/20c82939ea174f4d127622105cc27ef9/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['D-Day', 'Haegeum', 'HUH?! (feat. j-hope)', 'AMYGDALA', 'SDL', 'People Pt.2 (feat. IU)', 'Polar Night', 'Interlude: Dawn', 'Snooze (feat. Ryuichi Sakamoto, Woosung)', 'Life Goes On']
        },
        {
          id: 'solo-suga-2',
          name: 'D-2 (Agust D)',
          release_date: '2020-05-22',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/b26cacd634b080e3cd85378ecc780472/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Moonlight', 'Daechwita', 'What do you think?', 'Strange (feat. RM)', '28 (feat. NiiHWA)', 'Burn It (feat. MAX)', 'People', 'Honsool', 'Interlude : Set me free', 'Dear my friend (feat. Kim Jong Wan)']
        },
        {
          id: 'solo-suga-3',
          name: 'Agust D (Agust D)',
          release_date: '2016-08-15',
          images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273d50c63294b5dd4f6b7f79429' }],
          tracks: ['Intro ; Dt sugA (feat. DJ Friz)', 'Agust D', 'give it to me', 'skit', '724148', '140503 at dawn', 'The Last', 'Tony Montana (feat. Yankie)', 'Interlude ; Dream, Reality', 'so far away (feat. SURAN)']
        },
        {
          id: 'solo-jhope-1',
          name: 'Jack In The Box (j-hope)',
          release_date: '2022-07-15',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/eb182d3b25e0e86432817596ad17decc/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Intro', 'Pandora\'s Box', 'MORE', 'STOP', '= (Equal Sign)', 'Music Box: Reflection', 'What if...', 'Safety Zone', 'Future', 'Arson']
        },
        {
          id: 'solo-jhope-2',
          name: 'HOPE ON THE STREET VOL.1 (j-hope)',
          release_date: '2024-03-29',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/6052a7a7f51209e8a477abd233b4d41d/500x500.jpg' }],
          tracks: ['on the street (solo ver.)', 'i wonder... (with Jungkook)', 'lock / unlock (with Benny Blanco, Nile Rodgers)', 'i don\'t know (with Huh Yunjin)', 'what if... (dance mix)', 'NEURON (with Gaeko, Yoonmirae)']
        },
        {
          id: 'solo-jimin-1',
          name: 'FACE (Jimin)',
          release_date: '2023-03-24',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/500x500.jpg' }],
          tracks: ['Face-off', 'Interlude: Dive', 'Like Crazy', 'Alone', 'Set Me Free Pt.2', 'Like Crazy (English Ver.)']
        },
        {
          id: 'solo-jimin-2',
          name: 'MUSE (Jimin)',
          release_date: '2024-07-19',
          images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec' }],
          tracks: ['Rebirth (Intro)', 'Interlude: Showtime', 'Smeraldo Garden Marching Band (feat. Loco)', 'Slow Dance (feat. Sofia Carson)', 'Be Mine', 'Who', 'Closer Than This']
        },
        {
          id: 'solo-v-1',
          name: 'Layover (V)',
          release_date: '2023-09-08',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/d46aa3a3b70786cb2137c878f1a76946/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Rainy Days', 'Blue', 'Love Me Again', 'Slow Dancing', 'For Us', 'Slow Dancing (Piano Ver.)']
        },
        {
          id: 'solo-v-2',
          name: 'FRI(END)S (V)',
          release_date: '2024-03-15',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/9a2ae793f31925e6f9732f6cc33ef597/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['FRI(END)S']
        },
        {
          id: 'solo-jk-1',
          name: 'GOLDEN (Jung Kook)',
          release_date: '2023-11-03',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['3D (feat. Jack Harlow)', 'Closer to You (feat. Major Lazer)', 'Seven (feat. Latto) [Explicit & Clean]', 'Standing Next to You', 'Yes or No', 'Please Don\'t Change (feat. DJ Snake)', 'Hate You', 'Somebody', 'Too Sad to Dance', 'Shot Glass of Tears']
        },
        {
          id: 'solo-jk-2',
          name: 'Never Let Go (Jung Kook)',
          release_date: '2024-06-07',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/adba3b444046fa6dbbbaf93e4d1a6cfe/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Never Let Go']
        }
      ],
      singles: [
        {
          id: 'single1',
          name: 'Take Two',
          release_date: '2023-06-09',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/327f27bb81e5d7a7bf74aa12133f9e13/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Take Two']
        },
        {
          id: 'single2',
          name: 'Butter',
          release_date: '2021-05-21',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/d17875ef1979ea6aa0b5096fb7d85263/0x1900-000000-80-0-0.jpg' }],
          tracks: ['Butter', 'Butter (Instrumental)']
        },
        {
          id: 'single3',
          name: 'Dynamite',
          release_date: '2020-08-21',
          images: [{ url: 'https://cdn-images.dzcdn.net/images/cover/ae906be46c5e8e4d58459e786c148341/1900x1900-000000-80-0-0.jpg' }],
          tracks: ['Dynamite', 'Dynamite (Instrumental)']
        }
      ]
    };
};