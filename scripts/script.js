new Vue({
  el: "#app",
  data() {
    return {
     
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: " 1. Surat Al-Fatihah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "2. Surat Al-Baqarah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: true
        },
        {
          name: "3. Surat Ali 'Imran",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/003.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "4. Surat An-Nisa",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/004.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "5. Surat Al-Ma'idah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/005.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: true
        },
        {
          name: "6. Surat Al-An'am",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/006.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "7. Surat Al-A'raf",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/007.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: true
        },
        {
          name: "8. Surat Al-Anfal",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/008.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          {
          name: "9. Surat At-Tawbah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/009.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "10. Surat Yunus",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/010.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          
          ,
        {
          name: "11. Surat Hud",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/011.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
        {
          name: "12. Surat Yusuf",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/012.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
          {
          name: "13. Surat Ar-Ra'd",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/013.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "14. Surat Ibrahim",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/014.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "15. Surat Al-Hijr",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/015.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "16. Surat An-Nahl",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/016.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "17. Surat Al-Isra",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/017.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "18. Surat Al-Kahf",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/018.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "19. Surat Maryam",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/019.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "20. Surat Taha",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/020.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "21. Surat Al-Anbya",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/021.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "22. Surat Al-Haj",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/022.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "23. Surat Al-Mu'minun",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/023.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "24. Surat An-Nur",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/024.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "25. Surat Al-Furqan",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/025.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "26. Surat Ash-Shu'ara",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/026.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "27. Surat An-Naml",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/027.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "28. Surat Al-Qasas",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/028.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "29. Surat Al-'Ankabut",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/029.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "30. Surat Ar-Rum",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/030.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "31. Surat Luqman",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/031.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "32. Surat As-Sajdah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/032.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
                {
          name: "33. Surat Al-Ahzab",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/033.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "34. Surat Saba",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/034.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "35. Surat Fatir",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/035.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "36. Surat Yaseen",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
               {
          name: "37. Surat As-Saffat",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/037.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "38. Surat Sad",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/038.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
              
        {
          name: "44. Surat Ad-Dukhan",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/044.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
                     
        {
          name: "55. Surat Ar-Rahman",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "67. Surat Al-Mulk",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "93. Surat Ad-Duhaa",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/093.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "94. Surat Ash-Sharh",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/094.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "95. Surat At-Tin",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/095.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "96. Surat Al-'Alaq",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/096.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "97. Surat Al-Qadr",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/097.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "98. Surat Al-Bayyinah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/098.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "99. Surat Az-Zalzalah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/099.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "100. Surat Al-'Adiyat",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/100.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "101. Surat Al-Qari'ah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/101.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "102. Surat At-Takathur",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/102.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "103. Surat Al-'Asr",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/103.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "104. Surat Al-Humazah",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/104.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "105. Surat Al-Fil",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/105.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "106. Surat Quraysh",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/106.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "107. Surat Al-Ma'un",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/107.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "108. Surat Al-Kawthar",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/108.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        },
          
        {
          name: "109. Surat Al-Kafirun",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/109.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          ,
          
        {
          name: "110. Surat An-Nasr",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/110.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          ,
          
        {
          name: "111. Surat Al-Lahab",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/111.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          ,
          
        {
          name: "112. Surah Al-Ikhlas",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          ,
          
        {
          name: "113. Surat Al-Falaq",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          ,
          
        {
          name: "114. Surat Al-Naas",
          artist: "Mishari Rashid al-`Afasy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3",
          url: "https://quranicaudio.com/quran/5",
          favorited: false
        }
          
          
          
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
